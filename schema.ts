import { Schema, model, Document } from "mongoose";

export const LocationSchema = new Schema({
  address: { type: String, required: true },
  street: { type: String, required: true },
  zipcode: { type: String, required: true },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grade: { type: String, required: true },
  name: { type: String, required: true },
  on_wishlist: { type: [String], required: true },
  location_id: { type: String, required: true },
});

// Make sure to include Document to ensure it has Mongoose methods like `save()`
export type LocationType = Document & {
  address: string;
  street: string;
  zipcode: string;
  borough: string;
  cuisine: string;
  grade: string;
  name: string;
  on_wishlist: string[];
  location_id: string;
};

const LocationModel = model<LocationType>("Location", LocationSchema);

export default LocationModel;
