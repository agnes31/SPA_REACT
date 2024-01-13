import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Toast from './components/Toast';

import './App.css';

const generateUpdateFormKey = () => Date.now().toString(36);

const fetchProducts = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false); // par défaut on ne montre pas le formulaire
  const [showToast, setShowToast] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts('http://localhost:5001/produits');
      setProducts(productsFromServer);
    }
    getProducts();
  }, []);

  const [updateFormKey, setUpdateFormKey] = useState(generateUpdateFormKey());

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5001/produits/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = async (productToAdd) => {
    window.scrollTo(0, document.body.scrollHeight);
    const res = await fetch('http://localhost:5001/produits', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(productToAdd)
    });
    if (res.ok) {
      const lastId = products?.length > 0 ? products[products.length - 1].id : 0;
      const id = lastId + 1;
      const newProduct = { id, ...productToAdd };
      setProducts([...products, newProduct]);
      setShowToast(true);
    }
  };

  const handleUpdateProduct = (product) => {
    window.scrollTo(0, 0);
    setUpdateFormKey(generateUpdateFormKey());
    setSelectedProduct(product);
  };

  const updateProduct = async (id, updatedProduct) => {
    const res = await fetch(`http://localhost:5001/produits/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    if (res.ok) {
      setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
      setSelectedProduct(null);
    }
  };

  return (
    <BrowserRouter>
      <div className="font-sans min-h-screen pt-3 beige">
        <Navigation />
        {showAddProduct ? (
          <div className="font-sans pt-3 beige">
            <AddProduct onAdd={addProduct} />
          </div>
        ) : null}
        {selectedProduct ? (
          <div className="font-sans pt-3 beige">
            <UpdateProduct
              key={updateFormKey}
              product={selectedProduct}
              onUpdate={updateProduct}
              onCancel={() => setSelectedProduct(null)}
            />
          </div>
        ) : null}
        {/* {isCatalogueRoute && showAddProduct ? <AddProduct onAdd={addProduct} /> : null} */}
        <div className="bg-orange-500 pt-10 rounded-lg relative h-full">
          <Routes>
            <Route
              path="/catalogue"
              element={
                <>
                  <Catalogue
                    products={products}
                    showAddProduct={showAddProduct}
                    toggleForm={() => setShowAddProduct(!showAddProduct)}
                    onAdd={addProduct}
                    onDeleteCatalogue={deleteProduct}
                    onUpdateCatalogue={handleUpdateProduct}
                  />
                  {showToast ? (
                    <Toast
                      message="Produit ajouté au catalogue !"
                      type="success"
                      onClose={() => setShowToast(false)}
                    />
                  ) : null}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <div className="text-center text-2xl mb-4 text-black-200">
                    Bienvenue sur notre site ! Découvrez notre gamme de produits santé.
                  </div>
                  <Carousel />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
