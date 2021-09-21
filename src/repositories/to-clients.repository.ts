import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {ToClients, ToClientsRelations} from '../models';

export class ToClientsRepository extends DefaultCrudRepository<
  ToClients,
  typeof ToClients.prototype.id,
  ToClientsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(ToClients, dataSource);
  }
}
