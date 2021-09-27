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
  logisticId?: string;

  @property({
    type: 'string',
  })
  staffId?: string;

  @property({
    type: 'string',
  })
  storeId?: string;

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
