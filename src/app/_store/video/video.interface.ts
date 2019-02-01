import { Video } from '../../_models/video';
import { IAdd } from './add/add.interface';
import { ILoad } from './load/load.interface';

export interface IVideo {
    items: Video[];
    load: ILoad;
    add: IAdd;
}