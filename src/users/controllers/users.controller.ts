import { Controller, Post, SetMetadata } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Role } from 'src/typeorm/roles.enum';
import { RolesGuard } from 'src/utils/guards/roles.guards';
import { Roles } from 'src/utils/roles.decorator';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
    constructor( private userService:UserService){}
    
    
    @Post()
    // @UseGuards(RolesGuard)
    // @Roles(Role.CORDINATOR)

    getall(){

        return this.userService.getall()        
    }
    
}
