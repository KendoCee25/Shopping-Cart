// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/productsApi';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
