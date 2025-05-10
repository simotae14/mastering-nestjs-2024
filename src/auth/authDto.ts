import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum Country {
  IND = 'IND',
  USA = 'USA',
  UK = 'UK',
  AUS = 'AUS',
}

export class AuthDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8, {
    message:
      'Password is too short, minimal length required is of $constraint1 characters.',
  })
  @MaxLength(15, {
    message: 'Password should be within $constraint1 characters length',
  })
  password: string;

  @IsEnum(Country)
  country: Country;
}
