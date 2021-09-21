import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Logistics} from '../models';
import {LogisticsRepository} from '../repositories';

export class LogisticController {
  constructor(
    @repository(LogisticsRepository)
    public logisticsRepository : LogisticsRepository,
  ) {}

  @post('/logistics')
  @response(200, {
    description: 'Logistics model instance',
    content: {'application/json': {schema: getModelSchemaRef(Logistics)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logistics, {
            title: 'NewLogistics',
            exclude: ['id'],
          }),
        },
      },
    })
    logistics: Omit<Logistics, 'id'>,
  ): Promise<Logistics> {
    return this.logisticsRepository.create(logistics);
  }

  @get('/logistics/count')
  @response(200, {
    description: 'Logistics model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Logistics) where?: Where<Logistics>,
  ): Promise<Count> {
    return this.logisticsRepository.count(where);
  }

  @get('/logistics')
  @response(200, {
    description: 'Array of Logistics model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Logistics, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Logistics) filter?: Filter<Logistics>,
  ): Promise<Logistics[]> {
    return this.logisticsRepository.find(filter);
  }

  @patch('/logistics')
  @response(200, {
    description: 'Logistics PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logistics, {partial: true}),
        },
      },
    })
    logistics: Logistics,
    @param.where(Logistics) where?: Where<Logistics>,
  ): Promise<Count> {
    return this.logisticsRepository.updateAll(logistics, where);
  }

  @get('/logistics/{id}')
  @response(200, {
    description: 'Logistics model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Logistics, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Logistics, {exclude: 'where'}) filter?: FilterExcludingWhere<Logistics>
  ): Promise<Logistics> {
    return this.logisticsRepository.findById(id, filter);
  }

  @patch('/logistics/{id}')
  @response(204, {
    description: 'Logistics PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Logistics, {partial: true}),
        },
      },
    })
    logistics: Logistics,
  ): Promise<void> {
    await this.logisticsRepository.updateById(id, logistics);
  }

  @put('/logistics/{id}')
  @response(204, {
    description: 'Logistics PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() logistics: Logistics,
  ): Promise<void> {
    await this.logisticsRepository.replaceById(id, logistics);
  }

  @del('/logistics/{id}')
  @response(204, {
    description: 'Logistics DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.logisticsRepository.deleteById(id);
  }
}
