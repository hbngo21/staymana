import { Schema, Document } from 'mongoose';

export const RoomSchema = new Schema(
  {
    name: String,
    area: Number,
    rentalFee: Number,
    image: {type: String, default: ''},
    hostId: String,
    houseId: String,
    memberId: {type: [String], default: []},
    billId: {type: [String], default: []},
  }
);

export interface Room extends Document {
  name: number,
  area: number,
  rentalFee: number,
  image: string,
  houseId: string,
  hostId: string,
  memberId: string[],
  billId: string[],
}