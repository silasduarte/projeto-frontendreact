import { Button, Image, ItensCarrrinho, Remover } from "./itemsStyle";

function Item({ nome, valor, quantidade, imagem, id, removeItem }) {
  return (
    <>
      <Remover>
        <ItensCarrrinho>
          <Image src={imagem}></Image>
          <p> Nome: {nome}</p>
          <p>Valor: R$ {valor}</p>
          <p>Quantidade: {quantidade}</p>
        </ItensCarrrinho>
        <Button onClick={() => removeItem(id)}>Remover</Button>
      </Remover>
    </>
  );
}
export default Item;
