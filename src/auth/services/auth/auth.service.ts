import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>, private jwtService: JwtService) { }

    //find user from db
    findOne(username: string): Promise<Users> {
        return this.usersRepository.findOneBy({ username });
    }

    getById(id: number): Promise<Users> {
        const user = this.usersRepository.findOneBy({ id })
        console.log(user);
        return user;

    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.findOne(username)
        if (user && user.password === password) {
            const { password, ...rest } = user;
            return rest;
        }
        return null;
    }


    async login(user: any) {
        const payload = { name: user.username, sub: user.id, role: user.role }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }


}

