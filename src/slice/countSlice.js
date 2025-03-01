import { createSlice } from '@reduxjs/toolkit';
//nombre
// estado inicial
// reducers

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload ?? 1;
    },
    decrement: (state, action) => {
      state.count -= action.payload ?? 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = countSlice.actions;
export default countSlice.reducer;
