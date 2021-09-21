import {Entity, model, property} from '@loopback/repository';

@model()
export class Logistics extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  tel: string;


  constructor(data?: Partial<Logistics>) {
    super(data);
  }
}

export interface LogisticsRelations {
  // describe navigational properties here
}

export type LogisticsWithRelations = Logistics & LogisticsRelations;
