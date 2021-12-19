import { Router } from "express";

const router = Router();

router.get('/api/users/signout', (req, res) => {
 res.send("Jello");
});

export {router as signoutRounter};
