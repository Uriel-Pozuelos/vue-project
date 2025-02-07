<script setup>
import { ref, computed } from 'vue'

const task = ref('')
const tasks = ref([])

const isVisible = computed(() => tasks.value.length > 0)

const addTask = () => {
    if (task.value.trim()) {
        tasks.value.push(task.value.trim())
        task.value = ''
    }
}

const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}
</script>

<template>
    <v-container class=" ma-6 flex justify-center items-center mr-16 ">

        <h2 class="text-white">Lista de tareas</h2>
        
        <v-container>
            <v-text-field 
                variant="solo-filled" 
                class="color-white" 
                v-model="task" 
                @keyup.enter="addTask" 
                placeholder="Ingresa una tarea" 
            />
            <v-btn 
                variant="elevated" 
                color="green-darken-3" 
                elevation="8" 
                @click="addTask"
            >
                Agregar tarea
            </v-btn>
        </v-container>
        
        <!-- <v-card > -->
            <v-list v-if="isVisible">
                <p class="block text-caption text-grey-darken-1 ml-4">Presione para eliminar</p>
                <v-list-item 
                    v-for="(task, index) in tasks" 
                    :key="index" 
                    @click="deleteTask(index)"
                    class="li"
                >
                    {{ task }}
                </v-list-item>
            </v-list>
        <!-- </v-card> -->
    </v-container>
</template>

<style scoped>
/* 
.taskList{
    padding: 20px;
    height: 100%;
}

h2{
    color: white;
    font-weight: bold;
}

button{
    padding: 8px;
    margin: 5px 0;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover{
    background-color: #018e01;
}

input{
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
} */

.li{
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.li:hover{
    color: #ff0000;
    background-color: #ff00001f;
}
</style>