import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Logistics, LogisticsRelations} from '../models';

export class LogisticsRepository extends DefaultCrudRepository<
  Logistics,
  typeof Logistics.prototype.id,
  LogisticsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Logistics, dataSource);
  }
}
