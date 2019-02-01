import {
  combineReducers,
  ActionReducerMap
} from '@ngrx/store';
import {
  AddReducer
} from './add/add.reducer';
import {
  IVideo
} from './video.interface';
import { itemsReducer } from './items/items.reducer';
import { loadReducer } from './load/load.reducer';

export const videoReducer = combineReducers( < ActionReducerMap < IVideo >> {
  load: loadReducer,
  items: itemsReducer,
  add: AddReducer
});
