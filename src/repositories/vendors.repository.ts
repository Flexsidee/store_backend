import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Vendors, VendorsRelations} from '../models';

export class VendorsRepository extends DefaultCrudRepository<
  Vendors,
  typeof Vendors.prototype.id,
  VendorsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Vendors, dataSource);
  }
}
