import {
  ArrayMinSize,
  IsEmail,
  IsNotEmpty,
  IsNumber,
} from '@webblocksapp/class-validator';

export class RegistrationFormDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  country: number;

  @ArrayMinSize(2)
  favoriteFoods: number[];

  @IsNumber()
  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  birthDate: string;
}
