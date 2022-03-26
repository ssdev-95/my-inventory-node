import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    category: string

		@Column()
		quantity: number

    @Column()
    expiration: string

		@Column()
		owner_id: string

}
