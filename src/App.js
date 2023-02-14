import './App.css';
import Products from './Components/ProductComponents/Products';
import Categories from './Components/CategoriesComponents/Categories';
import Cart from './Components/CartComponents/Cart';
import Discount from './Components/DiscountComponents/Discount';
import Header from './Components/HeaderComponents/Header';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Header/>
      </div>
        <div className='Components'>
          <div className='Categories'>
            <Categories/>
          </div>
          <div className='DiscountProducts'>
            <Discount/>
            <Products/>
          </div>
          <div className='Cart'>
            <Cart/>
          </div>
        </div>
    </div>
  );
}

export default App;
