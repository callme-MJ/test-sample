import { AuthService } from 'src/auth/services/auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): any;
    getResponse(req: any): any;
}
