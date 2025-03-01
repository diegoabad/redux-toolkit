import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../slice/countSlice'; // Asegúrate de que la ruta sea correcta

export const store = configureStore({
  reducer: {
    count: countReducer, // Debes agregar el reducer aquí
  },
});
