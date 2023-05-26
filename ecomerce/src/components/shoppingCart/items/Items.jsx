function Item({ nome, valor, quantidade, imagem, id, removeItem }) {
    return (
        <>
            <p> Nome: {nome}</p>
            <p>Valor: R$ {valor}</p>
            <p>Quantidade: {quantidade}</p>
            <button onClick={() => removeItem(id)}>Remover</button>
        </ >
    )
}
export default Item 