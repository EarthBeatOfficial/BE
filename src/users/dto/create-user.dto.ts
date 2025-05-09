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

export class UserResponseDto {
  @ApiProperty({ example: 1, description: 'Auto-generated database ID' })
  id: number;

  @ApiProperty({ example: 'jeffkim', description: 'The username of the user' })
  username: string;

  @ApiProperty({
    example: '2025-05-08T04:53:01.812Z',
    description: 'Timestamp when the user was created',
    type: String,
    format: 'date-time',
  })
  createdAt: string;
}
