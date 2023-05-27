import Item from "../items/Items";
import { CartBox } from "./cartStyle";

function Cart({ cart, amount, setCart, setAmount }) {
  function removeItem(id) {
    cart.map((produto) => {
      if (produto.id === id && produto.quantidade >= 1) {
        produto.quantidade = produto.quantidade - 1;
        setCart([...cart]);
        setAmount(amount - produto.value);
      }
      if (produto.quantidade === 0) {
        const novoCarrinho = cart.filter(
          (produtos) => produtos.quantidade !== 0
        );
        setCart(novoCarrinho);
      }
    });
  }
  return (
    <>
      <CartBox>
        <p>Carrinho</p>
        {cart.map((product) => {
          return (
            <Item
              key={product.id}
              nome={product.name}
              valor={(product.value * product.quantidade)
                .toFixed(2)
                .replace(".", ",")}
              quantidade={product.quantidade}
              imagem={product.imageUrl}
              id={product.id}
              removeItem={removeItem}
            />
          );
        })}
        <p>Valor total: R$ {amount.toFixed(2).replace(".", ",")}</p>
      </CartBox>
    </>
  );
}
export default Cart;
