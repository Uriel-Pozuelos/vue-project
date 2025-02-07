<template>
    <v-container class="p-4 h-full mr-16">
        <h2 class="font-weight-bold">Formulario de registro</h2>
        
        <Form :validation-schema="schema" @submit="onSubmit">
            <v-container class="mb-2" >
                <label for="name">Nombre:</label>
                <Field v-model="name" type="text" class="input bg-white" name="name" id="name" placeholder="Ingresa tu nombre" />
                <ErrorMessage class="errorMessage" name="name"> </ErrorMessage>
            </v-container>

            <v-container class="mb-2">
                <label for="email">Correo:</label>
                <Field v-model="email" type="email" class="input bg-white" name="email" id="email" placeholder="Ingresa tu correo" />
                <ErrorMessage class="errorMessage" name="email"> </ErrorMessage>
            </v-container>

            <v-container>
                <v-btn variant="elevated" elevation="8" color="blue" >Registrar</v-btn>
            </v-container>
        </Form>

    </v-container>
</template>

<script setup>
import { Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegisterStore } from '../stores/registerStore';
import { ref } from 'vue';

const registerStore = useRegisterStore();

const name = ref('');
const email = ref('');

const onSubmit = () => {
    registerStore.saveRegister(name.value, email.value);
    console.log("Formulario enviado");
}

</script>

<style scoped>

/* .registro{
    padding: 20px;
    height: 100%;
}

h2{
    color: white;
    font-weight: bold;
}

.form-group{
    margin-bottom: 10px;
} */

/* button{
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px; 
}

button:hover{
    background-color: #018e01;
} */

.input{
    display: block;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.label{
    font-weight: bold;
    color: white;
    display: block;
    margin-bottom: 5px;
}

.errorMessage{
    display: block;
    color: red;
    font-size: 12px;
    margin-top: 5px;
}

.errorMessage::before{
    content: "⚠ ";
    font-size: 12px;
    margin-right: 3px;
}
</style>