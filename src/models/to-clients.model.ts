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
    type: 'number',
    required: true,
  })
  clientId: number;

  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'string',
  })
  remark?: string;

  @property({
    type: 'number',
  })
  staffId?: number;

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
