import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: { height: 0, weight: 0, bmi: null },
  reducers: {
    updateInput: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    calculateBMI: (state) => {
      if (state.height > 0 && state.weight > 0) {
        const heightInMeters = state.height / 100;
        state.bmi = (state.weight / (heightInMeters * heightInMeters)).toFixed(2);
      }
    },
  },
});

export const { updateInput, calculateBMI } = bmiSlice.actions;
export default bmiSlice.reducer;