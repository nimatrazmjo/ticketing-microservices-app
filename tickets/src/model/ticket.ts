import {Schema, model, Document, Model} from 'mongoose';


interface TicketAtrrs {
  title: string;
  price: string;
  userId: string
}

interface TicketDoc extends Document{
  title: string;
  price: string;
  userId: string
}

interface TicketModel extends Model<TicketDoc> {
    build(attrs: TicketAtrrs): TicketDoc
}

const schema = new Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  userId: Schema.Types.ObjectId
},{
  toJSON:{
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

schema.statics.build = (attr: TicketAtrrs) => {
  return new Ticket(attr);
}

const Ticket = model<TicketDoc, TicketModel>('Ticket',schema);
export { Ticket }
