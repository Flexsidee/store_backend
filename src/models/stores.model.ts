import {Entity, model, property} from '@loopback/repository';

@model()
export class Stores extends Entity {
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


  constructor(data?: Partial<Stores>) {
    super(data);
  }
}

export interface StoresRelations {
  // describe navigational properties here
}

export type StoresWithRelations = Stores & StoresRelations;
