export default function ProductItem({item, addToBasket}) {
    
    return (
        <div>
            {item.name}
            <button onClinic={() => setBasket()}>+</button>
        </div>
    )
}