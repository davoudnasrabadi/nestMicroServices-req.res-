import { Controller, Logger } from '@nestjs/common';
import {
  MessagePattern,
  EventPattern,
  Payload,
  Ctx,
  NatsContext,
} from '@nestjs/microservices';
import {AppService} from './app.service';
import { CreateUserDto } from './Dto/create-user-dto';
import { UpdateUserDto} from './Dto/update-user-dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  logger = new Logger('AppController');

  
  @MessagePattern('get-user')
  getUsers(@Payload() data: any, @Ctx() context: NatsContext) {
    
    return this.appService.getUserById(data.id);
  }
  
  @MessagePattern('get-users')
  getUser(@Payload() data: any, @Ctx() context: NatsContext) {
    return this.appService.getUsers();
  }
  
  @EventPattern('add-user')
  async addUser(@Payload() user: CreateUserDto, @Ctx() context: NatsContext) {
      try{
         
         await this.appService.createUser(user);
      }
      catch(err){
         return err.message;
      }
  }

  @EventPattern('update-user')
  async updateUser(@Payload() user: any, @Ctx() context: NatsContext) {
      try{
        console.log(user.id);
        console.log(user.data);
         await this.appService.updateUserById(user.id,user.data);
      }
      catch(err){
         return err.message;
      }
  }



  @EventPattern('delete-user')
  async deleteUser(@Payload() customer, @Ctx() context: NatsContext) {
    console.log(customer);
    await this.appService.deleteUserById(customer)
  }

}
