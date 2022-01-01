
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";

import { currentUser }  from '@nimatrazmjo/ticketingcommon'
const router = Router();

router.get('/api/users/current-user',currentUser, (req: Request, res: Response) => {
  res.send({currentUser: req.currentUser || null});
});

export {router as currentUserRounter};
