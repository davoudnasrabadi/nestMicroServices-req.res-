import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user-dto';
import { UpdateUserDto} from './Dto/update-user-dto';
import { User, UserDocument } from './User/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AppService {
  
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}

  async getUsers(){
    return await this.model.find().exec();
  }

  async getUserById(id:string){
    return await this.model.findById(id).exec();
  }

  async createUser(user:CreateUserDto):Promise<User>{
    console.log(user);
    return await new this.model(user).save();
  }

  async deleteUserById(customer:string){
    return await this.model.findByIdAndDelete(customer).exec();
  }

  async updateUserById(id:string,body:any){
    console.log(id);
    console.log("  ",body)
    return await this.model.findByIdAndUpdate(id, body).exec();
  }
}
