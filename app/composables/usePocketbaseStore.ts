import {defineStore} from "pinia";
import PocketBase from 'pocketbase'

export const usePocketbaseStore = defineStore('usePocketBaseStore', () =>{

    const pb = new PocketBase('https://api.clementlopes.site');

    return{
        pb,
    }

})