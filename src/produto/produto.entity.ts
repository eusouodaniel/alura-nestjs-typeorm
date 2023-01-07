import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

class CaracteristicaProduto {
  nome: string;
  descricao: string;
}

class ImagemProduto {
  url: string;
  descricao: string;
}

@Entity()
export class ProdutoEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ length: 100 })
  usuarioId: string;
  @Column({ length: 100 })
  nome: string;
  @Column()
  valor: number;
  @Column()
  quantidade: number;
  @Column({ length: 100 })
  descricao: string;
  @Column({ length: 100 })
  categoria: string;
  @Column()
  caracteristicas: CaracteristicaProduto[];
  @Column()
  imagens: ImagemProduto[];
}
