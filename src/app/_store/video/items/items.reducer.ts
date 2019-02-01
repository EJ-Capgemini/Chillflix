import { VideoActionsUnion, VideoActionTypes } from '../video.action';
import { Video } from 'src/app/_models/video';

export const itemsReducer = (state = [], action: VideoActionsUnion): Video[] => {
  switch (action.type) {
    case VideoActionTypes.LOAD_COMPLETE:
      console.log("action.videos: " + action.videos); //dit zijn inderdaad de juiste 11 items!
      return action.videos;
    case VideoActionTypes.LOAD_ERROR:
      return [];
    case VideoActionTypes.ADD_COMPLETE:
      return [
        ...state,
        action.video
      ];
    default:
      return state;
  }
};