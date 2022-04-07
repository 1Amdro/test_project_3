import { createRouter, createWebHashHistory } from 'vue-router';
import TheMain from '../views/TheMain.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:notFound(.*)*',
      component: TheMain,
    },
  ],
});

export default router;
