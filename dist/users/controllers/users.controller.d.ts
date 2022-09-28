import { UserService } from '../services/user/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getall(): string;
}
