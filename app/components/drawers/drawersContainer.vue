<template>
  <component
    :is="drawers[drawerStore.currentDrawer]"
    v-if="drawerStore.isOpen && drawers[drawerStore.currentDrawer]"
    :open="drawerStore.isOpen"
    @close="drawerStore.closeDrawer"
  />
</template>

<script setup lang="ts">
import { useDrawersStore } from '~/composables/useDrawersStore';
import drawerLogin from '@/components/drawers/drawerLogin.vue';

/**
 * Stores
 */

/**
 * Props/Emits
 */

/**
 * References
 */
const drawerStore = useDrawersStore();

/**
 * Computed Properties
 */
const drawers = {
  drawerLogin,
};

/**
 * Methods
 */

/**
 * Watchers
 */

/**
 * Mounted/Unmounted
 */
</script>