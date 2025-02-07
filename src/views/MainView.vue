<script setup>
// import { RouterView } from 'vue-router';
import SideBar from '../components/SideBar.vue'
import Header from '../components/HeaderV.vue'
import { ref } from 'vue';

const texto = ref('');
</script>

<template>

    <v-app class="bg-grey-darken-4">
        
        <v-app-bar color="black" dense app>
            <v-container class="d-flex justify-space-between">
                <Header msg="Temperatura: " />
            </v-container>
        </v-app-bar>

        <v-container fluid class="fill-height">

            <SideBar />
            
            <v-main class="bg-grey-darken-4 fill-height">
                <v-text-field  label="Variable reactiva" v-model="texto" variant="solo-filled"></v-text-field>
                    
                    {{ texto }}
                <router-view />
            </v-main>
        </v-container>
    </v-app>
</template>

<style scoped>

/* .container{
    display: flex;
    width: 100%;
} */

/* .content{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #0f0f0f;
} */

/* input{
    padding: 8px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
} */

</style>