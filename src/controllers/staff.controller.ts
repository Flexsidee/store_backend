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
import {Staffs} from '../models';
import {StaffsRepository} from '../repositories';

export class StaffController {
  constructor(
    @repository(StaffsRepository)
    public staffsRepository : StaffsRepository,
  ) {}

  @post('/staffs')
  @response(200, {
    description: 'Staffs model instance',
    content: {'application/json': {schema: getModelSchemaRef(Staffs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Staffs, {
            title: 'NewStaffs',
            exclude: ['id'],
          }),
        },
      },
    })
    staffs: Omit<Staffs, 'id'>,
  ): Promise<Staffs> {
    return this.staffsRepository.create(staffs);
  }

  @get('/staffs/count')
  @response(200, {
    description: 'Staffs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Staffs) where?: Where<Staffs>,
  ): Promise<Count> {
    return this.staffsRepository.count(where);
  }

  @get('/staffs')
  @response(200, {
    description: 'Array of Staffs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Staffs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Staffs) filter?: Filter<Staffs>,
  ): Promise<Staffs[]> {
    return this.staffsRepository.find(filter);
  }

  @patch('/staffs')
  @response(200, {
    description: 'Staffs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Staffs, {partial: true}),
        },
      },
    })
    staffs: Staffs,
    @param.where(Staffs) where?: Where<Staffs>,
  ): Promise<Count> {
    return this.staffsRepository.updateAll(staffs, where);
  }

  @get('/staffs/{id}')
  @response(200, {
    description: 'Staffs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Staffs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Staffs, {exclude: 'where'}) filter?: FilterExcludingWhere<Staffs>
  ): Promise<Staffs> {
    return this.staffsRepository.findById(id, filter);
  }

  @patch('/staffs/{id}')
  @response(204, {
    description: 'Staffs PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Staffs, {partial: true}),
        },
      },
    })
    staffs: Staffs,
  ): Promise<void> {
    await this.staffsRepository.updateById(id, staffs);
  }

  @put('/staffs/{id}')
  @response(204, {
    description: 'Staffs PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() staffs: Staffs,
  ): Promise<void> {
    await this.staffsRepository.replaceById(id, staffs);
  }

  @del('/staffs/{id}')
  @response(204, {
    description: 'Staffs DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.staffsRepository.deleteById(id);
  }
}
