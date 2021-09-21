import {Entity, model, property} from '@loopback/repository';

@model()
export class FromVendors extends Entity {
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
  logisticId?: number;

  @property({
    type: 'number',
  })
  staffId?: number;

  @property({
    type: 'number',
  })
  storeId?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<FromVendors>) {
    super(data);
  }
}

export interface FromVendorsRelations {
  // describe navigational properties here
}

export type FromVendorsWithRelations = FromVendors & FromVendorsRelations;
