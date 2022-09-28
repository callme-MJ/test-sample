import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<Users>, jwtService: JwtService);
    findOne(username: string): Promise<Users>;
    getById(id: number): Promise<Users>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
