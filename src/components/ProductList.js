import dominLogo from '../images/dominLogo.png';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import ProductCard from './ProductCard';
import { useState, useEffect, useMemo } from 'react';

export default function ProductList({ setSelectedProductID, products }) {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const productTypes = useMemo(
    () => [...new Set(products.map((product) => product.type))],
    [products]
  );
  const productLocations = useMemo(
    () => [...new Set(products.map((product) => product.location))],
    [products]
  );

  useEffect(() => {
    let result = products;
    if (typeFilter && typeFilter !== 'Product Type') {
      result = result.filter((product) => product.type === typeFilter);
    }
    if (locationFilter && locationFilter !== 'Location') {
      result = result.filter((product) => product.location === locationFilter);
    }
    if (searchTerm) {
      result = result.filter((product) =>
        product.serialNumber.includes(searchTerm)
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, locationFilter, typeFilter, products]);

  return (
    <>
      <header className="w-full max-w-2xl flex flex-col">
        <div className="flex items-center justify-between  p-4">
          <div className="flex space-x-3">
            <img src={dominLogo} alt="Domin logo" className="w-8 h-8" />
            <p className="text-content font-medium text-xl">ASCEND</p>
          </div>
          <span className="text-black font-medium border-2 border-black text-center rounded-full w-8 h-8 text-2xl leading-[1.4rem] inline-block cursor-pointer">
            +
          </span>
        </div>
        <div className="flex bg-content/30 rounded-md items-center mx-4">
          <MagnifyingGlassIcon className="w-8 h-8 ml-1 text-black-800" />
          <input
            type="text"
            className="p-1 bg-transparent w-full text-content text-lg"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mx-4 pt-3">
          <select
            className="bg-main/30 rounded-md p-1 text-content"
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option>Product Type</option>
            {productTypes &&
              productTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
          <select
            className="bg-main/30 rounded-md p-1 text-content"
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option className="p-2">Location</option>
            {productLocations &&
              productLocations.map((location) => (
                <option key={location}>{location}</option>
              ))}
          </select>
        </div>
      </header>
      <div className="flex flex-col p-4 mt-2 space-y-2 h-full overflow-y-auto">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <ProductCard
                {...product}
                key={product.id}
                onClick={() => setSelectedProductID(product.id)}
              />
            ))
          : products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                onClick={() => setSelectedProductID(product.id)}
                {...product}
              />
            ))}
      </div>
    </>
  );
}
