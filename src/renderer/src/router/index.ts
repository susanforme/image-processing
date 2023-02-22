/*
 * @Author: zhicheng ran
 * @Date: 2023-02-22 11:48:47
 * @LastEditTime: 2023-02-22 11:51:47
 * @FilePath: \image-processing\src\renderer\src\router\index.ts
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
  ],
})
