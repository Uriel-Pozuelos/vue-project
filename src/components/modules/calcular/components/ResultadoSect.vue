<template>
    <v-container class="w-full">
        {{ props.resultado }}
    </v-container>
</template>

<script setup>
import { defineProps } from 'vue';


const props = defineProps(['resultado']);


</script>

<style scoped>
.resultado{
    background-color: #0f0f0f;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
}
</style>