import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
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

  @IsDateString()
  // @Type(() => Date)
  dob: Date;

  @IsOptional()
  @IsString()
  @Matches(/^[0-9]{10,11}$/, {
    message: 'Phone number must be exactly 10 or 11 digits',
  })
  phone: string;
}
