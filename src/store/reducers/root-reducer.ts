import { combineReducers } from '@reduxjs/toolkit';


export enum NameSpace {
  main = 'MAIN_DATA',
  stepOne = 'STEP_ONE_DATA',
  stepTwo = 'STEP_TWO_DATA',
  stepThree = 'STEP_THREE_DATA',
  state = 'STATE',
}

export const rootReducer = combineReducers ({
  [NameSpace.main]: mainData,
});

export type RootState = ReturnType<typeof rootReducer>;

