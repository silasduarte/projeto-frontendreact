import ProductList from "../productList/ProductList";
import { HomeBox, Select, Option } from "./homeStyle";
import { ProductBox } from "./homeStyle";
import { CardsBox } from "./homeStyle";
import { useEffect, useState } from "react";

function Home({
  productList,
  amount,
  setAmount,
  cart,
  setCart,
  listEstado,
  setListEstado,
  starList,
  setStarList,
}) {
  const [ordination, setOrdination] = useState("");
  function handSelect(event) {
    setOrdination(event.target.value);
  }
  function addCart(product) {
    const newProduct = cart.find((produto) => product.id === produto.id);
    if (newProduct === undefined) {
      product = { ...product, quantidade: 1 };
      setCart([...cart, product]);

      const valorTotal = amount + product.value;
      setAmount(valorTotal);
    } else {
      const novoCarrinho = cart.map((produto) => {
        if (produto.id === newProduct.id) {
          const valorTotal = amount + product.value;
          setAmount(valorTotal);
          return { ...newProduct, quantidade: produto.quantidade + 1 };
        } else {
          return produto;
        }
      });
      setCart(novoCarrinho);
    }
  }
  useEffect(() => {
    listEstado.sort((a, b) => {
      if (ordination === "Crescente") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (ordination === "Decrescente") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });
    starList.sort((a, b) => {
      if (ordination === "Crescente") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (ordination === "Decrescente") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });
    setStarList([...starList]);
    setListEstado([...listEstado]);
  }, [ordination]);

  return (
    <>
      <HomeBox>
        <ProductBox>
          <span>Quantidade de produtos:{productList.length}</span>
          <span>
            Ordernação:
            <Select value={ordination} onChange={handSelect}>
              <Option>Ordernar</Option>
              <Option value="Crescente">Crescente</Option>
              <Option value="Decrescente">Decrescente</Option>
            </Select>
          </span>
        </ProductBox>
        <CardsBox>
          {/* map = ira verificar tudo que tem dentro do array, junto com return ira retornar o que esta dentro do array */}
          {listEstado.map((product) => {
            return (
              <ProductList
                productList={product}
                key={product.id}
                addAoCarrinho={addCart}
              />
            );
          })}
        </CardsBox>
      </HomeBox>
    </>
  );
}
export default Home;
