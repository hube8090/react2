export default function BasketItem({item}){
     return <div> {item.name}</div>
}

return (
    <div className='App'>
      <ProductList/>
      <h2>Корзина</h2>
      <div>{basket.map((produc,index) => <BasketItem item= {product} key={index}/>)}</div>
      {
        return <div>{product.name}</div>  
      }
      )}</div>
    </div>
  );
}