export interface PocketBaseAuthData {
  token: string;
  record: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    created: string;
    themeMode: string;
    collectionId: string;
    collectionName: string;
    username?: string;
    verified: boolean;
    emailVisibility: boolean;
    updated: string;
  };
}
