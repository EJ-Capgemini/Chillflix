import { ILoad } from './load.interface';
import { VideoActionsUnion, VideoActionTypes } from '../video.action';

export const loadReducer = (state: ILoad, action: VideoActionsUnion): ILoad => {
  switch (action.type) {
    case VideoActionTypes.LOAD:
      return {
        active: true,
        success: undefined,
        error: undefined
      };
    case VideoActionTypes.LOAD_COMPLETE:
      return {
        active: false,
        success: true,
        error: undefined
      };
    case VideoActionTypes.LOAD_ERROR:
      return {
        active: false,
        success: undefined,
        error: true
      };
    default:
      return state;
  }
};