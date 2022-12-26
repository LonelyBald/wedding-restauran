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
    deleteWifeGuest: (state, action) => {
      const table = state.tables.find(({ id }) => id === action.payload.id);
      table.wifeGuests.filter((guest) => action.payload.guest.name !== guest.name);
    },
    deleteHusbandGuest: (state, action) => {
      const table = state.tables.find(({ id }) => id === action.payload.id);
      table.husbandGuests.push((guest) => action.payload.guest.name !== guest.name);
    },
  },
});
export const { addTable, addHusbandGuest, addWifeGuest, deleteHusbandGuest, deleteWifeGuest } =
  tablesSlice.actions;

export const store = configureStore({
  reducer: {
    counter: tablesSlice.reducer,
  },
});
