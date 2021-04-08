import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne
} from "typeorm";
import { LanguageEntity } from "./LanguageEntity";
import { TranslationkeyEntity } from "./TranslationkeyEntity";

@Entity("translation")
export class TranslationEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "text"})
  translationValue!: string;

  @ManyToOne(() => LanguageEntity, translation => translation.id)
  language: LanguageEntity;

  @ManyToOne(() => TranslationkeyEntity, translation => translation.id)
  translationkey: TranslationkeyEntity;
}
