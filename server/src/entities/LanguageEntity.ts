import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./ProjectEntity";
import { TranslationEntity } from "./TranslationEntity";

@Entity("language")
export class LanguageEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "text" })
  projectId: string;

  @Column({ type: "text" })
  languageName!: string;

  @ManyToOne(() => ProjectEntity, (language) => language.languages, { cascade: true, onDelete: "CASCADE" })
  project: ProjectEntity;

  @OneToMany(() => TranslationEntity, (translation) => translation.language)
  translations: TranslationEntity[];
}
