import { Injectable } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import {ExtractJwt, Strategy} from 'passport-jwt'
import { AuthService } from 'src/auth/services/auth/auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    
    constructor(private readonly authService:AuthService){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ingoreExpiration: false,
            secretOrKey: process.env.SECRET_KEY,
        });
    }
    async validate(payload:any){
        const user = await this.authService.getById(payload.sub)
        if (user.role===3) {
            return{
                id:payload.sub,
                username:payload.username,
                role: 'cordinator'
                
            }}
           else if (user.role===2) {
                return{
                    id:payload.sub,
                    username:payload.username,
                    role:'controller'
                } 
            }
            else return{
                id:payload.sub,
                username:payload.username,
                role:'admin'
            }
        
        }
}
