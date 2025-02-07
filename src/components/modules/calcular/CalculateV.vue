<template>
    <v-container class="mr-16">
        <h2 class="mb-4">Propiedades computadas</h2>
        <v-text-field variant="solo-filled" label="Variable computada" v-model="val" />
        {{ valComputed }}
        <ResultadoSect :resultado="valComputed" v-if="showComputed" />
        <div v-else-if="isNaN(val)">No se puede realizar una multiplicación sin un número</div>
        <div v-else>No hay nada</div>

    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResultadoSect from './components/ResultadoSect.vue';

const val = ref();

const valComputed = computed(() => {
    return val.value * 4;
});

const showComputed = computed(() => {
    return val.value > 10;
});


</script>

<style scoped>
.computed{
    background-color: #0f0f0f;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
}

input{
    padding: 8px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
}

</style>