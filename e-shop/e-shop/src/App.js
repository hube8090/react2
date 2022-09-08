// import logo from './logo.svg';
import './App.css';
import ProductList from './component/Product/ProductList';

function App() {
  const [basket, setBasket]= useState([])

  const addToBasket = (product) => {
    setBasket([...basket, product])
  }

  return (
    <div className='App'>
      <ProductList/>
      <h2>Корзина</h2>
      <div>{basket.map((produc,index) => <BasketItem item= {product} key={index}/>)}</div>
    </div>
  );
}

export default App;
