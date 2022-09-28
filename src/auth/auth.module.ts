import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../utils/strategies/localStrategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../utils/strategies/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Users } from 'src/typeorm/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/utils/guards/roles.guards';
@Module({
  providers: [AuthService,LocalStrategy,JwtStrategy, {
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
  imports:[UsersModule,PassportModule,JwtModule.register({
    secret:'sec',
    signOptions:{ expiresIn:'300s'}
  }),
  UsersModule,
TypeOrmModule.forFeature([Users])],
  controllers: [AuthController],
  exports:[AuthService]

})
export class AuthModule {
  constructor (private dataSource:DataSource){}
}
