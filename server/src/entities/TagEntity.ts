import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
  import { fieldLength } from "../constants";
  import { ProjectEntity } from "./ProjectEntity";

@Entity("tag")
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "varchar", length: fieldLength.name })
  tagName!: string;

  @ManyToOne(() => ProjectEntity, project => project.tags)
    project: ProjectEntity;
}
