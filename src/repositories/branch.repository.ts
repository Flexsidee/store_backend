import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Branch, BranchRelations} from '../models';

export class BranchRepository extends DefaultCrudRepository<
  Branch,
  typeof Branch.prototype.id,
  BranchRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Branch, dataSource);
  }
}
