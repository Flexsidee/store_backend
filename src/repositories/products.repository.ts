import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Products, ProductsRelations} from '../models';

export class ProductsRepository extends DefaultCrudRepository<
  Products,
  typeof Products.prototype.id,
  ProductsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Products, dataSource);
  }
}
