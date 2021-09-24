import {Entity, model, property} from '@loopback/repository';

@model()
export class ToClients extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  clientId: string;

  @property({
    type: 'string',
    required: true,
  })
  productId: string;

  @property({
    type: 'string',
    required: true,
  })
  quantity: string;

  @property({
    type: 'string',
  })
  remark?: string;

  @property({
    type: 'string',
  })
  staffId?: string;

  @property({
    type: 'date',
    required: true,
  })
  dateSent: string;

  @property({
    type: 'boolean',
    required: true,
  })
  returnable: boolean;

  @property({
    type: 'date',
  })
  dateReturned?: string;


  constructor(data?: Partial<ToClients>) {
    super(data);
  }
}

export interface ToClientsRelations {
  // describe navigational properties here
}

export type ToClientsWithRelations = ToClients & ToClientsRelations;
