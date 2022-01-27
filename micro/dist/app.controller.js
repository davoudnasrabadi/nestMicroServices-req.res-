"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
const create_user_dto_1 = require("./Dto/create-user-dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.logger = new common_1.Logger('AppController');
    }
    getUsers(data, context) {
        return this.appService.getUserById(data.id);
    }
    getUser(data, context) {
        return this.appService.getUsers();
    }
    async addUser(user, context) {
        try {
            await this.appService.createUser(user);
        }
        catch (err) {
            return err.message;
        }
    }
    async updateUser(user, context) {
        try {
            console.log(user.id);
            console.log(user.data);
            await this.appService.updateUserById(user.id, user.data);
        }
        catch (err) {
            return err.message;
        }
    }
    async deleteUser(customer, context) {
        console.log(customer);
        await this.appService.deleteUserById(customer);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get-user'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.NatsContext]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, microservices_1.MessagePattern)('get-users'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.NatsContext]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUser", null);
__decorate([
    (0, microservices_1.EventPattern)('add-user'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, microservices_1.NatsContext]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addUser", null);
__decorate([
    (0, microservices_1.EventPattern)('update-user'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.NatsContext]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, microservices_1.EventPattern)('delete-user'),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.NatsContext]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteUser", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map