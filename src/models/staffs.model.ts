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
    type: 'string',
    required: true,
  })
  roleId: string;

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
    type: 'string',
  })
  branchId?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  dateJoined?: string;

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
