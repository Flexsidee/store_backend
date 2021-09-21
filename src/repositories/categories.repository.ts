import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Categories, CategoriesRelations} from '../models';

export class CategoriesRepository extends DefaultCrudRepository<
  Categories,
  typeof Categories.prototype.id,
  CategoriesRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Categories, dataSource);
  }
}
