import { Publisher, Subjects, TicketUpdatedEvent } from '@bztickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

}
