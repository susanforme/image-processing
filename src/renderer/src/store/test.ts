/*
 * @Author: zhicheng ran
 * @Date: 2023-02-22 11:33:11
 * @LastEditTime: 2023-02-22 11:37:35
 * @FilePath: \image-processing\src\renderer\src\store\test.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore('test', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})

export const useXStore = defineStore('x', () => {
  const count = ref(0)
  const increment = (): void => {
    count.value++
  }
  return {
    count,
    increment,
  }
})
