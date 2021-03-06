import { IsAlphanumeric, IsEmail, IsNotEmpty } from "class-validator";
export class UpdateUserDto {
    @IsEmail()
    email: string;
    @IsAlphanumeric()
    password: string;
}