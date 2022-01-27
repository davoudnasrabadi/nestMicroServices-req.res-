import { Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from './Dtos/create-user-dto';
export declare class AppController {
    logger: Logger;
    client: ClientProxy;
    getCustomers(): Observable<any>;
    getCustomersById(id: string): Promise<any>;
    addCustomer(user: CreateUserDto): void;
    deleteUserById(id: string): Promise<any>;
    updateById(id: string, user: any): Promise<Observable<any>>;
}
