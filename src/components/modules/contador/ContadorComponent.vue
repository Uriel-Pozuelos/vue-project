<script setup>
import {ref} from 'vue'
const cont = ref(0)

const increment = () => {
  cont.value++
}

const decrement = () => {
  cont.value--
}


</script>

<template>
  <v-container class="mr-16">

    <v-container class="mb-2">
      <h2 class="text-h4 font-weight-bold px-3 text-white ">Contador</h2>
    </v-container>

    <!-- <br /> -->

    <v-container class="text-center">
      <p class="text-red text-h3">{{ cont }}</p>
    </v-container>
    
    <!-- <br /> -->

    <v-container class="flex justify-center items-center w-full" >
      <v-btn variant="elevated" class="mx-2" elevation="8" color="black" @click="increment">Aumentar</v-btn>
      <v-btn variant="elevated" elevation="8" color="black" @click="decrement">Disminuir</v-btn>
    </v-container>

  </v-container>

</template>

<style scoped>
/* .divPadre{
  padding: 20px;
  height: 100%;
} */

/* h2{
  color: white;
  font-weight: bold;
} */

/* p{
  color: red;
  font-size: 20px;
} */

/* button{
  padding: 10px;
  margin: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
} */

/* button:hover{
  background-color: #0000ffc6;
}

.buttons{
  display: flex;
  justify-content: center;
} */

</style>
