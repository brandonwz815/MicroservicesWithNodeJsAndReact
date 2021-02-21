import { Publisher, Subjects, TicketCreatedEvent } from '@bztickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

}
