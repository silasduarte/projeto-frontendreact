import {
  Button,
  CardBox,
  CardTexBox,
  ImagBox,
  Imagem,
} from "./productListStyle";

function ProductList({ productList, addAoCarrinho }) {
  return (
    <>
      <CardBox>
        <ImagBox>
          <Imagem src={productList.imageUrl} />
        </ImagBox>
        <CardTexBox>
          <p>{productList.name}</p>
          <p>R$ {productList.value}</p>
          <Button onClick={() => addAoCarrinho(productList)}>
            Adicionar item
          </Button>
        </CardTexBox>
      </CardBox>
    </>
  );
}
export default ProductList;
