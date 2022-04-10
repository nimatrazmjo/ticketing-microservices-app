import jwt  from 'jsonwebtoken';
import mongoose from 'mongoose';
const token = ():string[] => {
  const payload = {
    id: new mongoose.Types.ObjectId(),
    email: 'test@test.com'
  };

  const token = jwt.sign(payload,process.env.JWT_KEY!);
  const session = JSON.stringify({jwt: token});
  const base64 = Buffer.from(session).toString('base64');
  const cookie = [`session=${base64};path:/ httponly`]
  return cookie;
}

export { token }