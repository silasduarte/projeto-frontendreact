import Filter from "./components/filters/Filter";
import Home from "./components/productCard/home/Home";
import Cart from "./components/shoppingCart/cart/Cart";
import GlobalStyles from "./GlobalStyles";
import { AppCaixa } from "./appStyle";
import { productList } from "./assents/productsList";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [filterList, setFilterList] = useState([...productList]);
  const [listEstado, setListEstado] = useState([...productList]);
  const [starList, setStarList] = useState([...productList]);

  useEffect(() => {
    setListEstado(
      starList
        .filter((produto) => {
          return minFilter ? produto.value >= minFilter : produto;
        })
        .filter((produto) => {
          return maxFilter ? produto.value <= maxFilter : produto;
        })
        .filter((produto) => {
          return searchFilter
            ? produto.name.toLowerCase().includes(searchFilter.toLowerCase())
            : produto;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);
  return (
    <>
      <GlobalStyles />
      <AppCaixa>
        <Filter
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <Home
          productList={filterList}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          listEstado={listEstado}
          setListEstado={setListEstado}
          starList={starList}
          setStarList={setStarList}
        />
        <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
      </AppCaixa>
    </>
  );
}

export default App;
