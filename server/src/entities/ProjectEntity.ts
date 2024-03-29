import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
  import { fieldLength } from "../constants";
  import { LanguageEntity } from "./LanguageEntity";
  import { TagEntity } from "./TagEntity";
  import { TranslationkeyEntity } from "./TranslationkeyEntity";

@Entity("project")
export class ProjectEntity extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column({ type: "varchar", length: fieldLength.name })
    projectName!: string;

    @OneToMany(() => LanguageEntity, language => language.project)
    languages: LanguageEntity[];

    @OneToMany(() => TagEntity, tag => tag.project)
    tags: TagEntity[];

    @OneToMany(() => TranslationkeyEntity, translationkey => translationkey.project)
    translationkeys: TranslationkeyEntity[];
}
