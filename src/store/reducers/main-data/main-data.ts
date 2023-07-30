import { createReducer } from '@reduxjs/toolkit';
import { MainFormData } from '../../../types/form-type';


const initialState: MainFormData = {
  Phone: 0,
  Email: '',
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
