import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { api } from '@/store/api/apiSlice'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
