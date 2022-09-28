import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { Role } from 'src/typeorm/roles.enum';
import { JwtAuthGuard } from 'src/utils/guards/jwt.auth.guard';
import { LocalAuthGuard } from 'src/utils/guards/local-auth.guards';
import { RolesGuard } from 'src/utils/guards/roles.guards';
import { Roles } from 'src/utils/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard, )
  @Post('login')
  login(@Request() req): any {
    const user = this.authService.login(req.user)
    return user;
  };

  @UseGuards(JwtAuthGuard,RolesGuard)
  @Get('dashboard')
  @Roles(Role.CORDINATOR)
  getResponse(@Request() req): any {
    return req.user;
  }


}