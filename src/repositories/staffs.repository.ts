import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Staffs, StaffsRelations} from '../models';

export class StaffsRepository extends DefaultCrudRepository<
  Staffs,
  typeof Staffs.prototype.id,
  StaffsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Staffs, dataSource);
  }
}
