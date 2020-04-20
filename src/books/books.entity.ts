import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity('books')
export class Books {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column() title: string;

  @Column() description: string;

  @Column() author: string;
}