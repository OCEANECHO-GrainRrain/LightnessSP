import { defineStore } from 'pinia'

export const useClockStore = defineStore('clock', {
  state: () => ({
    dateVisible: true, // 显示日期
    secondsVisible: true // 显示秒数
  }),
  getters: {},
  actions: {
    setDateVisible(status: boolean | null) {
      if (status === null) {
        this.dateVisible = !this.dateVisible
        return
      }
      this.dateVisible = status
    },
    setSecondsVisible(status: boolean | null) {
      if (status === null) {
        this.secondsVisible = !this.secondsVisible
        return
      }
      this.secondsVisible = status
    }
  }
})
