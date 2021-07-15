import { Injectable } from '@nestjs/common';
import { CreateTestauthDto } from './dto/create-testauth.dto';
import { UpdateTestauthDto } from './dto/update-testauth.dto';

@Injectable()
export class TestauthService {
  create(createTestauthDto: CreateTestauthDto) {
    return 'This action adds a new testauth';
  }

  findAll() {
    return `This action returns all testauth 111`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testauth`;
  }

  update(id: number, updateTestauthDto: UpdateTestauthDto) {
    return `This action updates a #${id} testauth`;
  }

  remove(id: number) {
    return `This action removes a #${id} testauth`;
  }
}
