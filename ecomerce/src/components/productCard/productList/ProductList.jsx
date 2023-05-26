import { CardBox, CardTexBox, Imagem } from "./productListStyle"

function ProductList({ productList, addAoCarrinho }) {

    return (
        <>
            <CardBox>
                <Imagem src={productList.imageUrl} />
                <CardTexBox>
                    <p>{productList.name}</p>
                    <p>R$ {productList.value}</p>
                    <button onClick={() => addAoCarrinho(productList)}>Adicionar item</button>
                </CardTexBox>
            </CardBox>
        </>
    )
}
export default ProductList 