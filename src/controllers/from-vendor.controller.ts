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
import {FromVendors} from '../models';
import {FromVendorsRepository} from '../repositories';

export class FromVendorController {
  constructor(
    @repository(FromVendorsRepository)
    public fromVendorsRepository : FromVendorsRepository,
  ) {}

  @post('/fvendor')
  @response(200, {
    description: 'FromVendors model instance',
    content: {'application/json': {schema: getModelSchemaRef(FromVendors)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FromVendors, {
            title: 'NewFromVendors',
            exclude: ['id'],
          }),
        },
      },
    })
    fromVendors: Omit<FromVendors, 'id'>,
  ): Promise<FromVendors> {
    return this.fromVendorsRepository.create(fromVendors);
  }

  @get('/fvendor/count')
  @response(200, {
    description: 'FromVendors model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FromVendors) where?: Where<FromVendors>,
  ): Promise<Count> {
    return this.fromVendorsRepository.count(where);
  }

  @get('/fvendor')
  @response(200, {
    description: 'Array of FromVendors model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FromVendors, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FromVendors) filter?: Filter<FromVendors>,
  ): Promise<FromVendors[]> {
    return this.fromVendorsRepository.find(filter);
  }

  @patch('/fvendor')
  @response(200, {
    description: 'FromVendors PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FromVendors, {partial: true}),
        },
      },
    })
    fromVendors: FromVendors,
    @param.where(FromVendors) where?: Where<FromVendors>,
  ): Promise<Count> {
    return this.fromVendorsRepository.updateAll(fromVendors, where);
  }

  @get('/fvendor/{id}')
  @response(200, {
    description: 'FromVendors model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FromVendors, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FromVendors, {exclude: 'where'}) filter?: FilterExcludingWhere<FromVendors>
  ): Promise<FromVendors> {
    return this.fromVendorsRepository.findById(id, filter);
  }

  @patch('/fvendor/{id}')
  @response(204, {
    description: 'FromVendors PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FromVendors, {partial: true}),
        },
      },
    })
    fromVendors: FromVendors,
  ): Promise<void> {
    await this.fromVendorsRepository.updateById(id, fromVendors);
  }

  @put('/fvendor/{id}')
  @response(204, {
    description: 'FromVendors PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fromVendors: FromVendors,
  ): Promise<void> {
    await this.fromVendorsRepository.replaceById(id, fromVendors);
  }

  @del('/fvendor/{id}')
  @response(204, {
    description: 'FromVendors DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fromVendorsRepository.deleteById(id);
  }
}
