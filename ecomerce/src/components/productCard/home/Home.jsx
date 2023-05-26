import ProductList from "../productList/ProductList"
import { HomeBox } from "./homeStyle"
import { ProductBox } from "./homeStyle"
import { CardsBox } from "./homeStyle"
import { useState } from 'react'

function Home({
    productList,
    amount,
    setAmount,
    cart,
    setCart,
}) {
    const [ordination, setOrdination] = useState("");

    function handSelect(event) {
        setOrdination(event.target.value)

    }
    function addCart(product) {
        const newProduct = cart.find(
            (produto) => product.id === produto.id
        )
        if (newProduct === undefined) {
            product = { ...product, quantidade: 1 }
            setCart([...cart, product])

            const valorTotal = amount + product.value
            setAmount(valorTotal)
        } else {
            const novoCarrinho = cart.map((produto) => {
                if (produto.id === newProduct.id) {
                    const valorTotal = amount + product.value
                    setAmount(valorTotal)
                    return { ...newProduct, quantidade: produto.quantidade + 1 }
                } else {
                    return produto
                }
            })
            setCart(novoCarrinho)
        }
    }
    console.log("Valor total", amount)
    return (
        <>
            <HomeBox>
                <ProductBox>
                    <span>Quantidade de produtos:{productList.length}</span>
                    <span>Ordernação:
                        <select value={ordination} onChange={handSelect}>
                            <option value=""></option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </span>
                </ProductBox>
                <CardsBox>
                    {/* map = ira verificar tudo que tem dentro do array, junto com return ira retornar o que esta dentro do array */}
                    {productList.map((product) => {
                        return <ProductList
                            productList={product}
                            key={product.id}
                            addAoCarrinho={addCart} />
                    })}
                </CardsBox>
            </HomeBox>
        </>
    )
}
export default Home