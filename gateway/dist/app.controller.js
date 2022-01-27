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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const create_user_dto_1 = require("./Dtos/create-user-dto");
let AppController = class AppController {
    constructor() {
        this.logger = new common_1.Logger('AppController');
    }
    getCustomers() {
        this.logger.log('client#send -> topic: "get-users"');
        return this.client.send('get-users', {});
    }
    async getCustomersById(id) {
        this.logger.debug(`client#send -> topic: "get-users", id: ${id}`);
        return this.client.send('get-user', id);
    }
    addCustomer(user) {
        this.logger.debug(`#client#emit -> topic: "add-user"`);
        this.client.emit('add-user', user);
    }
    async deleteUserById(id) {
        this.logger.debug(`client#send -> topic: "delete-user", id: ${id}`);
        return this.client.emit('delete-user', id);
    }
    async updateById(id, user) {
        this.logger.debug(`client#send -> topic: "get-users", id: ${id}`);
        return this.client.emit('update-user', { id: id, data: user });
    }
};
__decorate([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.NATS,
        options: {
            url: 'nats://localhost:4222',
        },
    }),
    __metadata("design:type", typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object)
], AppController.prototype, "client", void 0);
__decorate([
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _b : Object)
], AppController.prototype, "getCustomers", null);
__decorate([
    (0, common_1.Get)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AppController.prototype, "getCustomersById", null);
__decorate([
    (0, common_1.Post)('users'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addCustomer", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AppController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Put)('/users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateById", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map