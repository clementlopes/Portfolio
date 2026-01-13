<template>

  <div class="w-full h-full px-4 py-16 mt-20">

    <div class=" grid grid-cols-1 lg:grid-cols-3 gap-6 ">

      <!-- Left col  - Avatar and created -->
      <div class="lg:col-span-1 ">
        <div class="h-full flex flex-col bg-base-100 rounded-xl shadow-xl border border-base-300 ">
          <!-- Seção de avatar -->
          <div class="flex flex-col h-auto items-center p-6 border-b border-base-300">
            <div class="avatar online mb-4">
              <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img :src="userData.avatar" />
              </div>
            </div>
            <h2 class="text-xl font-bold">{{ userData.name }}</h2>
            <p class="text-base-content/70">{{ userData.email }}</p>
            <div class="mt-4 w-full">
              <label class="btn btn-outline w-full btn-sm gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Change photo
                <input type="file" class="hidden">
              </label>
            </div>
          </div>

          <!-- Status e estatísticas -->
          <div class=" p-4 ">
            <div class=" stats stats-vertical w-full shadow">
              <div class="stat">
                <div class="stat-title">Created</div>
                <div class="stat-desc text-lg">{{ userData.created }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Col- profile form-->

        <div class="w-full col-span-2 shadow-xl rounded-xl border border-base-300">

          <div class="tabs tabs-lift ">
            <input type="radio" name="tabsProfile" class="tab" aria-label="Profile" checked>
            <!-- Profile Tab -->
            <div class="tab-content bg-base-100 p-6 rounded-b-xs border border-base-300 ">

              <div>
                <h2 class="text-xl font-bold mb-4">Profile</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div class="form-control w-full">
                    <label class="fieldset-legend" for="first_name"> Name</label>
                    <input id="first_name" v-model="userData.name" type="text" placeholder="Your name"
                      class="input w-full validator">
                    <p class="validator-hint"> Required Field!</p>
                  </div>

                  <div class="form-control w-full">
                    <label class="fieldset-legend" for="email"> Email</label>
                    <input id="email" v-model="userData.email" type="email" placeholder="email@exemplo.com"
                      class="input w-full validator">
                    <p class="validator-hint">Required Field!</p>
                  </div>
                </div>
              </div>


              <!-- Preferences -->
              <div class="divider"></div>

              <h2 class="text-xl font-bold mb-4">Theme preference</h2>
              <label class="swap-rotate swap btn btn-ghost">
                <!-- Theme change -->
                <input type="checkbox" :checked="themeStore.activeTheme === 'winter'" data-toggle-theme="forest,winter"
                  @change="themeStore.changeTheme()" />

                <!-- sun icon -->
                <svg class="swap-off w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <!-- moon icon -->
                <svg class="swap-on w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

            </div>

            <input type="radio" name="tabsProfile" class="tab" aria-label="Security">
            <!-- security Tab-->
            <div class="tab-content p-6 rounded-b-xs border border-base-300">
              <div>
                <h2 class="text-xl font-bold mb-4">Security</h2>


                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                  <div class="form-control w-full">
                    <label class="fieldset-legend" for="email"> Email</label>
                    <input id="email1" v-model="userData.email" type="email" placeholder="email@exemplo.com"
                           class="input w-full validator">
                    <p class="validator-hint">Required Field!</p>
                  </div>

                  <div class="form-control">
                    <label class="fieldset-legend">Password atual</label>
                    <input type="password" required class="input validator w-full"
                      placeholder="Password atual" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Repita a nova password">
                    <p class="validator-hint">Required Field!</p>
                  </div>

                  <div class="form-control">
                    <label class="fieldset-legend">Nova Password</label>

                    <input type="password" required class="input validator w-full"
                      placeholder="Nova password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Deve conter 8 caracteres com letra maiúscula, minuscula, números e símbolos">
                    <p class=" validator-hint">Minimum 8 characters with uppercase, lowercase, numbers, and symbols.</p>
                  </div>

                  <div class="form-control">
                    <label class="fieldset-legend">Confirmar nova password</label>
                    <input type="password" required class="input validator w-full "
                      placeholder="Confirme nova password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Deve conter 8 caracteres com letra maiúscula, minuscula, números e símbolos">
                    <p class="validator-hint">Passwords do not match!</p>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <!-- Botões de ação -->
          <div class="flex w-full justify-end gap-2 p-4">
            <button @click="cancelChanges()" class="btn btn-outline btn-error rounded-md">Cancelar</button>
            <button class="btn btn-outline btn-success rounded-md">Guardar Alterações</button>
          </div>
        </div>
    </div>


  </div>


</template>

<script setup lang="ts">

import { onMounted, onBeforeUnmount } from 'vue';
import { themeChange } from 'theme-change';
import { useUserStore } from "~/composables/useUserStore";
import { useThemeStore } from "~/composables/useThemeStore"
import {useAlertStore} from "~/composables/useAlertStore";
import {toRaw} from "vue";


/**
 * Stores
 */
const userStore = useUserStore();
const themeStore = useThemeStore();
const alertStore = useAlertStore();
/**
 * Props/Emits
 */

/**
 * References
 */
const { userData } = storeToRefs(userStore);
const originalData = ref(structuredClone(toRaw(userData.value)));
/**
 * Computed Properties
 */

/**
 * Methods
 */
const cancelChanges = () =>{
  
}


/**
 * Watchers
 */
onBeforeRouteLeave(async () => {
  const editedProfile = await userStore.userDataHasEdited(originalData.value)
  if (editedProfile) {
    const response = await alertStore.openAlert({type: 'success', message: 'Data profile was edited do you wanna leave?'})

    if (!response) {
      return false
    }

  }

});
/**
 * Mounted/Unmounted
 */
onMounted(() => {

});

</script>
