import { configureStore } from '@reduxjs/toolkit'

export const applicationStore = configureStore({
  reducer: {},
})

export type ApplicationStore = ReturnType<typeof applicationStore.getState>
export type ApplicationDispatch = typeof applicationStore.dispatch
