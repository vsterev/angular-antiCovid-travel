import { IUser } from './user';
import { IVilla } from './villa';
export interface IReservation {
  clients: [];
  comments: [];
  villaId: IVilla;
  creatorId: IUser;
  _id: string;
}
