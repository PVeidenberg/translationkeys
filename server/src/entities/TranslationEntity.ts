import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { LanguageEntity } from "./LanguageEntity";
import { TranslationkeyEntity } from "./TranslationkeyEntity";

@Entity("translation")
export class TranslationEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column({ type: "text" })
  languageId: string;

  @Column({ type: "text" })
  translationkeyId: string;

  @Column({ type: "text" })
  translationValue!: string;

  @ManyToOne(() => LanguageEntity, (translation) => translation.id, { cascade: true, onDelete: "CASCADE" })
  language: LanguageEntity;

  @ManyToOne(() => TranslationkeyEntity, (translation) => translation.id, { cascade: true, onDelete: "CASCADE" })
  translationkey: TranslationkeyEntity;
}
