import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    ManyToMany,
    JoinTable,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ProjectEntity } from "./ProjectEntity";
import { TagEntity } from "./TagEntity";
  
@Entity("translationkey")
export class TranslationkeyEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column({ type: "text" })
    translationkeyName!: string;

    @ManyToOne(() => ProjectEntity, translationkey => translationkey.translationkeys)
        project: ProjectEntity;

    @ManyToMany(() => TagEntity, { cascade: true, onDelete: "CASCADE" })
    @JoinTable()
    tag: TagEntity[];
}
