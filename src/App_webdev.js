import React, { useState } from 'react';
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

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false); // par défaut on ne montre pas le formulaire
  const [showToast, setShowToast] = useState(false);
  const [products, setProducts] = useState([
    {
      // useState permet de gérer l'état d'une variable
      id: 1,
      nom: 'Soin du visage hydratant',
      image:
        'https://images.unsplash.com/photo-1548610762-7c6afe24c261?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Un soin du visage hydratant pour tous les types de peau.',
      prix: 50.0
    },
    {
      id: 3,
      nom: 'Massage relaxant',
      image:
        'https://images.unsplash.com/photo-1581514439794-f9777f7c22eb?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Un massage relaxant pour soulager le stress et la tension.',
      prix: 70.0
    },
    {
      id: 2,
      nom: 'Manucure classique',
      image:
        'https://images.unsplash.com/photo-1655450934654-c0f8bebcaced?q=80&w=2366&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Une manucure classique pour des ongles soignés et élégants.',
      prix: 30.0
    },

    {
      id: 4,
      nom: 'Crème hydratante',
      image:
        'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Une crème hydratante pour tous les types de peau.',
      prix: 25.0
    },
    {
      id: 5,
      nom: 'Rouge à lèvres',
      image:
        'https://images.unsplash.com/photo-1599733589378-235234c3f052?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Rouge à lèvres longue tenue dans une teinte rouge vif.',
      prix: 15.0
    },
    {
      id: 6,
      nom: 'Shampooing nourrissant',
      image:
        'https://images.unsplash.com/photo-1650543679723-de88854178c4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Shampooing nourrissant pour cheveux secs et abîmés.',
      prix: 10.0
    }
  ]);
  const [updateFormKey, setUpdateFormKey] = useState(generateUpdateFormKey());

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addProduct = (productToAdd) => {
    window.scrollTo(0, document.body.scrollHeight);
    const lastId = products.length > 0 ? products[products.length - 1].id : 0;
    const id = lastId + 1;
    const newProduct = { id, ...productToAdd };
    setProducts([...products, newProduct]);
    setShowToast(true);
  };

  const handleUpdateProduct = (product) => {
    window.scrollTo(0, 0);
    setUpdateFormKey(generateUpdateFormKey());
    setSelectedProduct(product);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
    setSelectedProduct(null);
  };

  return (
    <BrowserRouter basename="/ecommerce">
      <div className="font-sans min-h-screen pt-3 beige">
        <Navigation />
        {showAddProduct ? (
          <div className="font-sans min-h-screen pt-3 beige">
            <AddProduct onAdd={addProduct} />
          </div>
        ) : null}
        {selectedProduct ? (
          <div className="font-sans min-h-screen pt-3 beige">
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
