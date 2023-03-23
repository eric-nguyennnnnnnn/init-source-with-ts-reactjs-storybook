import { /* createAsyncThunk */createSlice } from '@reduxjs/toolkit';

import { User } from 'services/types';

interface HomeState {
  infuser?: User;
  id: number
  allUser: User[],
}

const initialState: HomeState = {
  infuser: undefined,
  id: 0,
  allUser: [],
};

// export const getUserAction = createAsyncThunk<
//   User,
//   number,
//   { rejectValue: any }
// >('mapsReducer/getProjectAction', async (id, { rejectWithValue }) => {
//   try {
//     const response = await getUserInfo(id);
//     return response;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  // extraReducers(builder) {
  //   builder.addCase(getUserAction.fulfilled, ($state, action) => {
  //     $state.infuser = action.payload;
  //   });

  // },
});

export default userSlice.reducer;
