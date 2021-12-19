
import { Router } from "express";

const router = Router();

router.get('/api/users/current-user', (req, res) => {
  res.send('Hell, This is nimatullah razmjo!');
});

export {router as currentUserRounter};
