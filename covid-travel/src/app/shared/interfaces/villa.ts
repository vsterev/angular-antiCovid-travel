import { IUser } from './user';
export interface IVilla {
  _id: string;
  creatorId: IUser;
  name: string;
  region: string;
  date: string;
  beds: number;
  nights: number;
  price: number;
  priceDescription: string;
  description: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  likes: string[];
  reservationId: {};
}
