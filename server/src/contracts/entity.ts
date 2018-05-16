import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'

type Status = 'New' | 'Processed' | 'Not usable' | null

@Entity()
export default class Contract extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('int', {nullable: true})
    userId: number

    @IsString()
    @Column('text', {nullable: true})
    contractImage: string

    @IsString()
    @Column('text', {nullable: true})
    contractName: string

    @IsString()
    @Column('text', {nullable: true})
    contractType: string

    @IsString()
    @Column('text', {nullable: true})
    contractProvider: string

    @IsString()
    @Column('text', {nullable: true})
    uploadStatus: Status
   

}