<script setup>

import { useRegisterStore } from './modules/registro/stores/registerStore';

const registerStore = useRegisterStore();

</script>

<template>
    <!-- <v-container> -->
        
        <v-navigation-drawer
        app
        permanent
        class="bg-black"
        >
        
            <v-list-item>
                <h1>SideBar</h1>
            </v-list-item>
            
            <v-divider></v-divider>

            <v-list-item>
                <h3>Bienvenido  {{ registerStore.name }}</h3>
            </v-list-item>
            
            <v-divider></v-divider>
            
            <v-list
                density="compact"
                nav
            >
                <v-list-item >
                    <router-link class="router-link" to="/contador">Contador</router-link>
                </v-list-item>
                <v-list-item >
                    <router-link class="router-link" to="/taskList">Task List</router-link>
                </v-list-item>
                <v-list-item >
                    <router-link class="router-link" to="/registrar">Registro</router-link>
                </v-list-item>
                <v-list-item >
                    <router-link class="router-link" to="/calcular">Calcular</router-link>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>
        
        
    <!-- </v-container> -->

</template>

<style scoped>

</style>