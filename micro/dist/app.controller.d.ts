import { Logger } from '@nestjs/common';
import { NatsContext } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from './Dto/create-user-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    logger: Logger;
    getUsers(data: any, context: NatsContext): Promise<import("./User/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUser(data: any, context: NatsContext): Promise<(import("./User/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(user: CreateUserDto, context: NatsContext): Promise<any>;
    updateUser(user: any, context: NatsContext): Promise<any>;
    deleteUser(customer: any, context: NatsContext): Promise<void>;
}
