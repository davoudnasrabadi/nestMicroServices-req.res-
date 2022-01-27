import { Controller, Get, Post, Logger, Param, Body, Delete, Put, ValidationPipe } from '@nestjs/common';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from './Dtos/create-user-dto'
import { DeleteEventDto } from './Dtos/delete.event.dto';
import { GetEventDto } from './Dtos/get.event.dto';
import { UpdateUserDto } from './Dtos/update-user-dto';
@Controller()
export class AppController {
  logger = new Logger('AppController');

  @Client({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  })
  client: ClientProxy;

 
  @Get('users')
  getCustomers(): Observable<any> {
    this.logger.log('client#send -> topic: "get-users"');
    return this.client.send('get-users', {});
  }

  @Get('users/:id')
  async getCustomersById(@Param('id') id: string): Promise<any> {
    this.logger.debug(`client#send -> topic: "get-users", id: ${id}`);
    return this.client.send('get-user', id);
  }

  @Post('users')
  addCustomer(@Body(new ValidationPipe()) user: CreateUserDto) {
    this.logger.debug(`#client#emit -> topic: "add-user"`);
    this.client.emit('add-user',user);
  }

 
  @Delete('users/:id')
  async deleteUserById(@Param('id') id: string): Promise<any> {
    this.logger.debug(`client#send -> topic: "delete-user", id: ${id}`);
    return this.client.emit('delete-user', id);
  }

  @Put('/users/:id')
  async updateById(@Param('id') id:string, @Body() user:any){
    this.logger.debug(`client#send -> topic: "get-users", id: ${id}`);
    return this.client.emit('update-user', { id:id,data:user });
  }
}
