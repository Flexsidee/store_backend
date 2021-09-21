import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {FromVendors, FromVendorsRelations} from '../models';

export class FromVendorsRepository extends DefaultCrudRepository<
  FromVendors,
  typeof FromVendors.prototype.id,
  FromVendorsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(FromVendors, dataSource);
  }
}
