import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    JoinTable,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ProjectEntity } from "./ProjectEntity";
import { fieldLength } from "../constants";
import { generateRandomString } from "../services/generateRandomString";
import { getKeyedHash } from "../services/getKeyedHash";
// import { config } from "../config";
import { TypeormSessionStore } from "../../lib/typeorm-express-session/index";


/*export enum UserRole {
    REGULAR = "REGULAR",
    ADMIN = "ADMIN",
    DEVELOPER = "DEVELOPER",
    TRANSLATOR = "TRANSLATOR"
}*/

export interface RegisterUserInfo {
    name: string;
    email: string;
    password: string;
   // roles: UserRole[];
  }


@Entity("user")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column({ type: "text" })
    name!: string;

    @Column({ type: "text" })
    email!: string;
    
    @Column({ type: "text"})
    password!: string;

   /* @Column({ type: "text", unique: true, nullable: true })
    validateEmailToken!: string | null;
  
    @Column({ type: "date", nullable: true })
    validateEmailExpiryDate!: Date | null;*/

    @Column({ type: "text", nullable: true })
    passwordSalt!: string | null;

    @Column({ type: "text", nullable: true })
    passwordHash!: string | null;

    // @Column({
    //     type: "set",
    //     enum: UserRole,
    //     default: [UserRole.REGULAR],
    //   })
    //   roles!: UserRole[];

    @ManyToMany(() => ProjectEntity, { cascade: true, onDelete: "CASCADE" })
    @JoinTable()
    project: ProjectEntity[];

    static async register(info: RegisterUserInfo): Promise<UserEntity> {
        const passwordSalt = generateRandomString(fieldLength.hash);
        const passwordHash = getKeyedHash(info.password, passwordSalt);
    
        const user = await UserEntity.create({
            email: info.email,
            name: info.name,
            password: info.password,
            passwordSalt,
            passwordHash,
            // ...UserEntity.generateValidateEmailToken(),
          }).save();
    
        return user;
    }

    // static generateValidateEmailToken() {
    //     // generate 36 long random string
    //     const validateEmailToken = generateRandomString(fieldLength.uuid);

    //     // create expiry date in the future
    //     const validateEmailExpiryDate = new Date(Date.now() + config.rules.validateEmailValidForSeconds * 1000);

    //     return {
    //         validateEmailToken,
    //         validateEmailExpiryDate,
    //     };
    // }

    async destroyAllSessions() {
        return TypeormSessionStore.destroyUserSession(this.id);
      }
}
