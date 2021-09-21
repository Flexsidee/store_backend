import {Entity, model, property} from '@loopback/repository';

@model()
export class Staffs extends Entity {
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
  roleId: number;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

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
  jobTitle: string;

  @property({
    type: 'number',
  })
  branchId?: number;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'date',
  })
  date_joined?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Staffs>) {
    super(data);
  }
}

export interface StaffsRelations {
  // describe navigational properties here
}

export type StaffsWithRelations = Staffs & StaffsRelations;
