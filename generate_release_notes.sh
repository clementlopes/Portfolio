#!/bin/sh

# Script adapted for GitHub Releases
# Using sh-compatible syntax for maximum portability

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <owner/repo>" >&2
    exit 1
fi

REPOSITORY_PATH=$1
GITHUB_URL="https://github.com/${REPOSITORY_PATH}"

CURRENT_TAG=$(git describe --tags --abbrev=0 HEAD 2>/dev/null || git tag --sort=-v:refname | head -n1)
if [ -z "$CURRENT_TAG" ]; then
    echo "Error: No tags found in repository" >&2
    exit 1
fi

COMMIT_SHA=$(git rev-parse --short HEAD)

ALL_TAGS=$(git tag --sort=-v:refname)
TEMP_TAGS=$(mktemp)
echo "$ALL_TAGS" > "$TEMP_TAGS"

CURRENT_COMMIT=$(git rev-parse "$CURRENT_TAG" 2>/dev/null || git rev-parse HEAD)
PREVIOUS_TAG=""
FOUND_CURRENT=0

while IFS= read -r tag; do
    if [ "$tag" = "$CURRENT_TAG" ]; then
        FOUND_CURRENT=1
        continue
    elif [ "$FOUND_CURRENT" -eq 1 ]; then
        TAG_COMMIT=$(git rev-parse "$tag" 2>/dev/null)
        if [ "$TAG_COMMIT" != "$CURRENT_COMMIT" ]; then
            PREVIOUS_TAG="$tag"
            break
        fi
    fi
done < "$TEMP_TAGS"

rm -f "$TEMP_TAGS"

if [ -z "$PREVIOUS_TAG" ]; then
    PREVIOUS_TAG=$(git rev-list --max-parents=0 HEAD)
fi

if git describe --tags --exact-match HEAD >/dev/null 2>&1; then
    COMMIT_RANGE="$PREVIOUS_TAG..$CURRENT_TAG"
else
    COMMIT_RANGE="$CURRENT_TAG..HEAD"
fi

if [ "$PREVIOUS_TAG" = "$CURRENT_TAG" ] || [ "$COMMIT_RANGE" = "$CURRENT_TAG..$CURRENT_TAG" ]; then
    COMMIT_RANGE="$CURRENT_TAG^..$CURRENT_TAG"
fi

TEMP_COMMITS=$(mktemp)
TEMP_AUTHORS=$(mktemp)

git log --pretty=format:"%H" "$COMMIT_RANGE" > "$TEMP_COMMITS"
git log --format='%an|%ae' "$COMMIT_RANGE" | sort -u > "$TEMP_AUTHORS"

COMMITS_COUNT=$(wc -l < "$TEMP_COMMITS")
CONTRIBUTORS_COUNT=$(wc -l < "$TEMP_AUTHORS")

echo "# Release ${CURRENT_TAG}"
echo ""
echo "Repository: [${REPOSITORY_PATH}](${GITHUB_URL}) · Tag: [${CURRENT_TAG}](${GITHUB_URL}/releases/tag/${CURRENT_TAG}) · Commit: [${COMMIT_SHA}](${GITHUB_URL}/commit/${COMMIT_SHA})"
echo ""
echo "In this release: **${COMMITS_COUNT}** commits by **${CONTRIBUTORS_COUNT}** contributors"
echo ""
echo "## What's Changed"
echo ""

if [ -s "$TEMP_COMMITS" ]; then
    while IFS= read -r COMMIT_HASH || [ -n "$COMMIT_HASH" ]; do
        if [ -z "$COMMIT_HASH" ]; then
            continue
        fi

        SUBJECT=$(git show -s --format=%s "$COMMIT_HASH")
        BODY=$(git show -s --format=%b "$COMMIT_HASH")
        AUTHOR=$(git show -s --format=%an "$COMMIT_HASH")
        SHORT_COMMIT_HASH=$(echo "$COMMIT_HASH" | cut -c1-7)

        PR_NUMBER=$(echo "$SUBJECT $BODY" | grep -o '#[0-9]*' | head -n 1 | sed 's/#//')
        if [ -z "$PR_NUMBER" ]; then
            PR_TEXT=""
        else
            PR_TEXT=" in [#${PR_NUMBER}](${GITHUB_URL}/pull/${PR_NUMBER})"
        fi

        echo "- [${SHORT_COMMIT_HASH}](${GITHUB_URL}/commit/${COMMIT_HASH}) ${SUBJECT}${PR_TEXT}"
    done < "$TEMP_COMMITS"
else
    echo "- No changes found between ${PREVIOUS_TAG} and ${CURRENT_TAG}"
fi

echo ""
echo "## New Contributors"
echo ""

if [ -s "$TEMP_AUTHORS" ]; then
    while IFS='|' read -r AUTHOR EMAIL || [ -n "$AUTHOR" ]; do
        if [ -z "$AUTHOR" ]; then
            continue
        fi

        USERNAME=$(echo "$AUTHOR" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

        echo "- @${USERNAME} made their first contribution 🎉"
    done < "$TEMP_AUTHORS"
fi

echo ""
echo "Full Changelog: [${PREVIOUS_TAG} → ${CURRENT_TAG}](${GITHUB_URL}/compare/${PREVIOUS_TAG}...${CURRENT_TAG})"

rm -f "$TEMP_COMMITS" "$TEMP_AUTHORS"
