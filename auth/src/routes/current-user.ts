
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
const router = Router();

router.get('/api/users/current-user', (req: Request, res: Response) => {
    if (!req.session?.jwt) {
      res.send({currentUser: null});
    }
    try {
      const payload = jwt.verify(req.session?.jwt,process.env.JWT_KEY!);
      res.send({currentUser:payload});  
    } catch (error) {
      res.send({currentUser: null});
    }
});

export {router as currentUserRounter};
