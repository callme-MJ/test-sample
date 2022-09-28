import { SetMetadata } from "@nestjs/common";
import { Role } from "src/typeorm/roles.enum";

export const Roles = (...role:number[]) =>SetMetadata('roles', role)