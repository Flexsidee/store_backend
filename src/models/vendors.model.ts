import {Entity, model, property} from '@loopback/repository';

@model()
export class Vendors extends Entity {
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
    type: 'number',
    required: true,
  })
  categoryId: number;

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

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
  })
  logo?: string;


  constructor(data?: Partial<Vendors>) {
    super(data);
  }
}

export interface VendorsRelations {
  // describe navigational properties here
}

export type VendorsWithRelations = Vendors & VendorsRelations;
