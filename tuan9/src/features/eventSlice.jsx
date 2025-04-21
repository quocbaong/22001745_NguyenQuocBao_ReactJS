import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: { events: [] },
  reducers: {
    addEvent: (state, action) => {
      state.events.push({ id: Date.now(), ...action.payload });
    },
    editEvent: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload.id);
      if (event) {
        Object.assign(event, action.payload);
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;