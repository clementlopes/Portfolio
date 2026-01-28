<template>
    <!-- Background overlay -->
    <div v-if="open" class="fixed inset-0 bg-base-100/50 backdrop-blur-[4px] z-40" @click="handleClose" />

    <!-- DrawerCreateUser panel -->
    <div class="fixed top-0 right-0 h-screen w-full md:w-1/3 bg-base-100 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out"
        :class="open ? 'translate-x-0' : 'translate-x-full'">
        <div class="bg-base-200 p-4 pt-20 w-full h-full">
            <button class="absolute top-4 right-4 btn btn-outline btn-error md:hidden" @click="">
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>


            <h2 class="text-2xl font-bold text-center text-primary mb-6">Create New Account</h2>
            <form ref="createUserForm" @submit.prevent="">
                <label for="name">
                    <div class="fieldset-legend mt-2" for="name">Full Name</div>
                </label>
                <div class="input input-primary validator w-full ">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                            stroke="currentColor">
                            <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z" />
                        </g>
                    </svg>
                    <input id="name" type="text" placeholder="Your name" required />
                </div>

                <label for="email">
                    <div class="fieldset-legend mt-2" for="email">Email</div>
                </label>
                <div class="input input-primary validator w-full ">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                            stroke="currentColor">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </g>
                    </svg>
                    <input id="email" type="email" placeholder="yourmail@mail.com" required />
                </div>
                <div class="validator-hint hidden">Enter valid email address</div>

                <label for="password">
                    <div class="fieldset-legend mt-2" for="password">Password</div>
                </label>
                <div class="input input-primary validator w-full ">
                     <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                        </g>
                    </svg>
                    <input id="password" type="password" required placeholder="Password" minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </div>
                <p class="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase
                    letter
                </p>

                <label for="confirmPassword">
                    <div class="fieldset-legend mt-2" for="confirmPassword">Confirm Password</div>
                </label>
                <div class="input input-primary validator w-full ">
                     <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                        </g>
                    </svg>
                    <input class="" id="confirmPassword" type="password" required placeholder="Confirm Password" minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </div>
                <p class="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase
                    letter
                </p>



                <button type="submit" class="w-full btn btn-primary mt-6">
                    <span>Create Account</span>
                </button>
            </form>

        </div>
    </div>
</template>


<script setup lang="ts">
/**
 * Stores
 */

import { useDrawersStore } from '~/composables/useDrawersStore';
import { useMyAuthStore } from '~/composables/useMyAuthStore';
import { useToastStore } from '~/composables/useToastStore';
import { useUserStore } from '~/composables/useUserStore';
import { useThemeStore } from '~/composables/useThemeStore';
import { themeChange } from 'theme-change';

const drawerStore = useDrawersStore();
const authStore = useMyAuthStore();
const toast = useToastStore();
const userStore = useUserStore();
const themeStore = useThemeStore();

/**
 * Props/Emits
 */

defineProps({
    open: { type: Boolean, default: false },
});
const emits = defineEmits(['close']);
const handleClose = () => emits('close');
</script>