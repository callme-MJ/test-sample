import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
    private readonly users = [];
    

    async findOne(username: string) {
        return this.users.find(user => user.username === username);
    }
    
 getall(){
    return 'this is all this.users';
 }
}
