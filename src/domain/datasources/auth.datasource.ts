import { RegisterUserDto } from "../dtos/auth/register-user-dto";
import { UserEntity } from "../entities/auth/user.entity";//2

export abstract class AuthDataSource { // 1
    abstract register(registerUserDto:RegisterUserDto): Promise<UserEntity> //4

} 