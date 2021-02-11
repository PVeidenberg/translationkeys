import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

  import { ProjectEntity } from "./ProjectEntity";

@Entity("tag")
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "text" })
  tagName!: string;

  @ManyToOne(() => ProjectEntity, project => project.tags)
    project: ProjectEntity;
}
