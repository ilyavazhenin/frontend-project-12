import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
  },
});

export default usersSlice.reducer;
export const { actions } = usersSlice;
export const usersSelectors = usersAdapter.getSelectors((state) => state.users);

