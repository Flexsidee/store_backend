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
import {ToClients} from '../models';
import {ToClientsRepository} from '../repositories';

export class ToClientController {
  constructor(
    @repository(ToClientsRepository)
    public toClientsRepository : ToClientsRepository,
  ) {}

  @post('/tClient')
  @response(200, {
    description: 'ToClients model instance',
    content: {'application/json': {schema: getModelSchemaRef(ToClients)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToClients, {
            title: 'NewToClients',
            exclude: ['id'],
          }),
        },
      },
    })
    toClients: Omit<ToClients, 'id'>,
  ): Promise<ToClients> {
    return this.toClientsRepository.create(toClients);
  }

  @get('/tClient/count')
  @response(200, {
    description: 'ToClients model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ToClients) where?: Where<ToClients>,
  ): Promise<Count> {
    return this.toClientsRepository.count(where);
  }

  @get('/tClient')
  @response(200, {
    description: 'Array of ToClients model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ToClients, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ToClients) filter?: Filter<ToClients>,
  ): Promise<ToClients[]> {
    return this.toClientsRepository.find(filter);
  }

  @patch('/tClient')
  @response(200, {
    description: 'ToClients PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToClients, {partial: true}),
        },
      },
    })
    toClients: ToClients,
    @param.where(ToClients) where?: Where<ToClients>,
  ): Promise<Count> {
    return this.toClientsRepository.updateAll(toClients, where);
  }

  @get('/tClient/{id}')
  @response(200, {
    description: 'ToClients model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ToClients, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ToClients, {exclude: 'where'}) filter?: FilterExcludingWhere<ToClients>
  ): Promise<ToClients> {
    return this.toClientsRepository.findById(id, filter);
  }

  @patch('/tClient/{id}')
  @response(204, {
    description: 'ToClients PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ToClients, {partial: true}),
        },
      },
    })
    toClients: ToClients,
  ): Promise<void> {
    await this.toClientsRepository.updateById(id, toClients);
  }

  @put('/tClient/{id}')
  @response(204, {
    description: 'ToClients PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() toClients: ToClients,
  ): Promise<void> {
    await this.toClientsRepository.replaceById(id, toClients);
  }

  @del('/tClient/{id}')
  @response(204, {
    description: 'ToClients DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.toClientsRepository.deleteById(id);
  }
}
