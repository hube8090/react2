import ProductItem from "./ProductItem";

const ProductList = ({addToBasket}) => {

    const products = [
        {
            id: 1,
            name: apple
        },
        {
            id: 2,
            name: pear
        },
    ]
    return (
        <div>
            <h1> Список товаров </h1>
            {products.map(product => <ProductItem 
            item={product} 
            key={product.id}
            />
            )}
        </div>
    )
}

export default ProductList;