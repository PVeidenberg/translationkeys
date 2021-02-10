import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";
  import { fieldLength } from "../constants";

@Entity("translation")
export class TranslationEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "varchar", length: fieldLength.long })
  translationValue!: string;
}
