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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../users/users.module");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const auth_service_1 = require("./services/auth/auth.service");
const passport_1 = require("@nestjs/passport");
const localStrategy_1 = require("../utils/strategies/localStrategy");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../utils/strategies/jwt.strategy");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../typeorm/user.entity");
const core_1 = require("@nestjs/core");
const roles_guards_1 = require("../utils/guards/roles.guards");
let AuthModule = class AuthModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, localStrategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, {
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard
            }],
        imports: [users_module_1.UsersModule, passport_1.PassportModule, jwt_1.JwtModule.register({
                secret: 'sec',
                signOptions: { expiresIn: '300s' }
            }),
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.Users])],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map