import { createRouter, createWebHistory } from 'vue-router'
import ContadorComponent from '../components/modules/contador/ContadorComponent.vue'
import TaskListComponent from '../components/modules/taskList/TaskList.vue'
import RegistrarComponent from '../components/modules/registro/views/RegistroVue.vue'
import CalcularComponent from '../components/modules/calcular/CalculateV.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'home',
      component: ContadorComponent,
    },
    {
      path: '/taskList',
      name: 'taskList',
      component: TaskListComponent,
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegistrarComponent,
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: CalcularComponent,
    }
    
  ],
})

export default router
