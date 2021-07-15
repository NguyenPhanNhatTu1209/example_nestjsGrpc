import { PartialType } from '@nestjs/mapped-types';
import { CreateTestauthDto } from './create-testauth.dto';

export class UpdateTestauthDto extends PartialType(CreateTestauthDto) {}
