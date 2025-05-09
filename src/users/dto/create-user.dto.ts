import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
 
export class CreateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'jeffkim',
    minLength: 1,
    maxLength: 20
  })
  @IsString()
  @Length(1, 20)
  username: string;
} 