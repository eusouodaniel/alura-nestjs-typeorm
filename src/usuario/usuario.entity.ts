import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ length: 100 })
  nome: string;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 100 })
  senha: string;
}
