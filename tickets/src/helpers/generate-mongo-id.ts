import { Types } from "mongoose";

const mongoId = () => new Types.ObjectId().toHexString();
export { mongoId };
