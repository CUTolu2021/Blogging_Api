import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    content: string;

    @Column({type: 'varchar'})
    category: string;

    @Column({array: true, type: 'varchar'})
    tags: string[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
