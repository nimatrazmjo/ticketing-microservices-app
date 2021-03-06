import mongoose from 'mongoose';
import { Password } from '../services/password';

/** An interface describes the properties
 * that required to create a new User
 */
interface UserAttrs {
  email: string;
  password: string;
}

/** An interface that describes the properties 
 * that a User Model has
 */
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

/** An interface that describe the properties
 * of a User Document has
 */
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  id: string
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{
  toJSON:{ 
    transform (doc, ret) {
      ret.id= ret._id;
      delete ret.password;
      delete ret.__v;
      delete ret._id;
    }
  }
});

userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
     const hashedPassword = await Password.toHash(this.get('password'));
     this.set('password', hashedPassword);
  }
  done();
});

userSchema.statics.build= (attr: UserAttrs) => {
  return new User(attr);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };