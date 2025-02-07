<template>
    <div class="header">
        
        <h2>Weather</h2>

        <div class="">
            {{ msgReceibed }}
            <WeatherV />
        </div>
    </div>
</template>

<script setup>
import WeatherV from './WeatherV.vue';
import { defineProps, ref } from 'vue';

const props = defineProps(['msg'])

const msgReceibed = ref(props.msg);

</script>

<style scoped>
.header{
    width: 100%;
    background-color: #0f0f0f;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: white;
}

h2{
    font-weight: bold;
    margin: 0;
}
</style>