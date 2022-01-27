import { CreateUserDto } from './Dto/create-user-dto';
import { User, UserDocument } from './User/user.schema';
import { Model } from 'mongoose';
export declare class AppService {
    private readonly model;
    constructor(model: Model<UserDocument>);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getUserById(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createUser(user: CreateUserDto): Promise<User>;
    deleteUserById(customer: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateUserById(id: string, body: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
