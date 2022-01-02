import { Request, Response, Router } from "express";

const router = Router();

router.get('/api/tickets',(req: Request, res: Response) => {
 res.send('Hello from ticket service');
});
router.get('/api/tickets/:id',(req: Request, res: Response) => {
  
});
router.post('/api/tickets',(req: Request, res: Response) => {
  
});
router.put('/api/tickets',(req: Request, res: Response) => {
  
});

export default router;