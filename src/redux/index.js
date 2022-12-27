import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tables: [{ id: 0, husbandGuests: [], wifeGuests: [] }],
};

export const tablesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTable: (state) => {
      state.tables = [
        ...state.tables,
        {
          id: state.tables[state.tables.length - 1].id + 1,
          husbandGuests: [],
          wifeGuests: [],
        },
      ];
    },
    addWifeGuest: (state, action) => {
      const table = state.tables.find(({ id }) => id === action.payload.id);
      table.wifeGuests.push(action.payload.guest);
    },
    addHusbandGuest: (state, action) => {
      const table = state.tables.find(({ id }) => id === action.payload.id);
      table.husbandGuests.push(action.payload.guest);
    },
    deleteGuests: (state, action) => {
      const table = state.tables.find(({ id }) => id === action.payload.id);
      table.husbandGuests = [];
      table.wifeGuests = [];
    },
  },
});
export const { addTable, addHusbandGuest, addWifeGuest, deleteGuests } = tablesSlice.actions;

export const store = configureStore({
  reducer: {
    counter: tablesSlice.reducer,
  },
});
