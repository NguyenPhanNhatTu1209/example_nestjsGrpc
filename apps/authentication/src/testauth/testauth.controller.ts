import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestauthService } from './testauth.service';
import { CreateTestauthDto } from './dto/create-testauth.dto';
import { UpdateTestauthDto } from './dto/update-testauth.dto';

@Controller('testauth')
export class TestauthController {
  constructor(private readonly testauthService: TestauthService) {}

  @Post()
  create(@Body() createTestauthDto: CreateTestauthDto) {
    return this.testauthService.create(createTestauthDto);
  }

  @Get()
  findAll() {
    return this.testauthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testauthService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestauthDto: UpdateTestauthDto,
  ) {
    return this.testauthService.update(+id, updateTestauthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testauthService.remove(+id);
  }
}
