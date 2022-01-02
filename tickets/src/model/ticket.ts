import {Schema, model, Document} from 'mongoose';

export interface ITicket extends Document {
  title: string;
  price: string;
  userId: string
}

const schema = new Schema<ITicket>({
  title: {type: String, required: true},
  price: {type: String, required: true},
  userId: Schema.Types.ObjectId
});

export default model<ITicket>('Ticket',schema);