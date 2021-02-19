import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  requireAuth,
  NotFoundError,
  NotAuthorizedError
} from '@bztickets/common';
import { Ticket } from '../models/ticket';
import { idText } from 'typescript';


const router = express.Router();

router.put('/api/tickets/:id', requireAuth, async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as updateTicketRouter };
