import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
  import { ProjectEntity } from "./ProjectEntity";

@Entity("language")
export class LanguageEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly languageId!: string;

  @Column({ type: "text"})
  languageName!: string;

  @ManyToOne(() => ProjectEntity, language => language.languages)
    project: ProjectEntity;
}
