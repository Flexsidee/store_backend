import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'fieldbase_test',
  connector: 'mysql',
  url: '',
  host: '67.225.140.29',
  port: 3306,
  user: 'duonymit',
  password: 'VB36a(M[H3sep6',
  database: 'duonymit_fieldbase_test'
};

// Observe application's life cycle to disconnect the datasource when
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
