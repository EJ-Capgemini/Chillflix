import { IAdd } from './add.interface';
import { VideoActionTypes, VideoActionsUnion } from '../video.action';

export const AddReducer = (state: IAdd, action: VideoActionsUnion): IAdd => {
  switch (action.type) {
    case VideoActionTypes.ADD:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case VideoActionTypes.ADD_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case VideoActionTypes.ADD_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};