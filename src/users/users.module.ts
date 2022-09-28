import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/users.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/utils/guards/roles.guards';

@Module({
  providers: [UserService],
  exports:[UserService],
  controllers: [UserController]
})
export class UsersModule {}
