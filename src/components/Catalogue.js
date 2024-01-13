import React from 'react';
import Product from './Product';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Catalogue({ products, showAddProduct, toggleForm, onDeleteCatalogue, onUpdateCatalogue }) {
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center pb-10">Produits de Beauté</h2>
      </div>
      <div className="flex items-center justify-center mb-10">
        <Button
          text={
            showAddProduct ? (
              <>
                <FontAwesomeIcon icon={faPlus} /> Close
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlus} /> Ajouter un produit
              </>
            )
          }
          color={showAddProduct ? 'bg-red-500' : 'bg-blue-500'}
          onClick={toggleForm}
          className="border border-gray-500 mb-4 rounded-md text-center px-4 py-2 transform hover:scale-110"
        />
      </div>
      <section className="">
        {/* Contenu catalogue */}
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          {products?.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <Product
                  key={product.id}
                  product={product}
                  onDelete={onDeleteCatalogue}
                  onUpdate={onUpdateCatalogue}
                />
                {/* {isCatalogueRoute && showAddProduct ? <AddProduct onAdd={addProduct} /> : null} */}
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 font-bold col-span-3">
              Empty list
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Catalogue;
