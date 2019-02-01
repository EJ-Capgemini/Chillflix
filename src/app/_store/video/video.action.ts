import { Video } from '../../_models/video';
import { Action } from '@ngrx/store';

export enum VideoActionTypes {
    LOAD = '[Video] Load',
    LOAD_COMPLETE = '[Video] Load Complete',
    LOAD_ERROR = '[Video] Load Error',
    ADD = '[Video] Add',
    ADD_COMPLETE = '[Video] Add Complete',
    ADD_ERROR = '[Video] Add Error',
    REMOVE = '[Video] Remove',
    REMOVE_COMPLETE = '[Video] Remove Complete',
    REMOVE_ERROR = '[Video] Remove Error',
}

export class Load implements Action {
  public readonly type = VideoActionTypes.LOAD;
}

export class LoadComplete implements Action {
  public readonly type = VideoActionTypes.LOAD_COMPLETE;

  constructor(public readonly videos:Video[]) { }
}

export class LoadError implements Action {
  public readonly type = VideoActionTypes.LOAD_ERROR;
}

export class Add implements Action {
    public readonly type = VideoActionTypes.ADD;
  
    constructor(public readonly video: Video) { }
  }
  
  export class AddComplete implements Action {
    public readonly type = VideoActionTypes.ADD_COMPLETE;
  
    constructor(public readonly video: Video) { }
  }
  
  export class AddError implements Action {
    public readonly type = VideoActionTypes.ADD_ERROR;
  }

  export class Remove implements Action {
    public readonly type = VideoActionTypes.REMOVE;
    constructor(public readonly videoId: string) { }
  }
  
  export class RemoveComplete implements Action {
    public readonly type = VideoActionTypes.REMOVE_COMPLETE;
  
    constructor(public readonly videoId: string) { }
  }
  
  export class RemoveError implements Action {
    public readonly type = VideoActionTypes.REMOVE_ERROR;
  }
    
export type VideoActionsUnion = Load | LoadComplete | LoadError | Add | AddComplete | AddError | Remove | RemoveComplete | RemoveError;