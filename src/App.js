import { useState } from 'react';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import ProductList from './components/ProductList';
import {
  RocketIcon,
  BarChartIcon,
  BellIcon,
  GearIcon,
} from '@radix-ui/react-icons';
import productData from './productData.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProductID, setSelectedProductID] = useState(null);
  const [products, setProducts] = useState(productData);

  return (
    <div className="container max-w-2xl m-auto h-screen flex flex-col justify-between">
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          {selectedProductID ? (
            <ProductPage
              product={products.find(
                (product) => product.id === selectedProductID
              )}
              setSelectedProductID={setSelectedProductID}
            />
          ) : (
            <ProductList
              setSelectedProductID={setSelectedProductID}
              products={products}
            />
          )}
          <footer className="w-full max-w-2xl flex justify-between border-t border-slate-800 bottom-0 p-4 pb-6 pt-3">
            <RocketIcon className="w-6 h-6 hover:cursor-pointer text-contrast" />
            <BarChartIcon className="w-6 h-6 hover:cursor-pointer" />
            <BellIcon className="w-6 h-6 hover:cursor-pointer" />
            <GearIcon className="w-6 h-6 hover:cursor-pointer" />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
