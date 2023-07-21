import { createReducer } from '@reduxjs/toolkit';


const initialState: MainData = {
};


const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMainData, (state, action) => {
      state.main = action.payload;
    })
    .addCase(setMainDataLoadingStatus, (state, action) => {
      state.mainLoadingStatus = action.payload;
    });
});

export { mainData };
