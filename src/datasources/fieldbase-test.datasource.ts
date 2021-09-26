import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  username: 'be4ccb7ec7e146',
  password: '3b5e7647',
  host: 'us-cdbr-east-04.cleardb.com',
  database: 'heroku_cd1bfe087139122',
};

// Observe application's life cycle to disconnect the datasource when VB36a(M[H3sep6
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FieldbaseTestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'fieldbase_test';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.fieldbase_test', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
