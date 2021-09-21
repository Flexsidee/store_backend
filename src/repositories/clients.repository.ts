import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FieldbaseTestDataSource} from '../datasources';
import {Clients, ClientsRelations} from '../models';

export class ClientsRepository extends DefaultCrudRepository<
  Clients,
  typeof Clients.prototype.id,
  ClientsRelations
> {
  constructor(
    @inject('datasources.fieldbase_test') dataSource: FieldbaseTestDataSource,
  ) {
    super(Clients, dataSource);
  }
}
