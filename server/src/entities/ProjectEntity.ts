import { BaseEntity, Column, Entity, OneToMany, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { LanguageEntity } from "./LanguageEntity";
import { TagEntity } from "./TagEntity";
import { TranslationkeyEntity } from "./TranslationkeyEntity";
import { UserEntity } from "./UserEntity";

@Entity("project")
export class ProjectEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "text" })
  projectName!: string;

  @OneToMany(() => LanguageEntity, (language) => language.project)
  languages: LanguageEntity[];

  @OneToMany(() => TagEntity, (tag) => tag.project)
  tags: TagEntity[];

  @OneToMany(() => TranslationkeyEntity, (translationkey) => translationkey.project)
  translationkeys: TranslationkeyEntity[];

  @ManyToMany(() => UserEntity, (user) => user.projects)
  users: UserEntity[];
}
