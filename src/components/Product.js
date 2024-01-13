import React from 'react';
import Button from './Button';

function Produit({ product, onDelete, onUpdate }) {
  // const handleUpdate = () => {
  //     const updatedProduct = { ...product, name: '' }; // Remplacez ceci par les vraies nouvelles données du produit
  //     onUpdate(product.id, updatedProduct);
  // };

  return (
    <div className="px-10 pb-20">
      <h3 className="text-center font-bold pb-7">{product.nom}</h3>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto pb-7 text-center rounded-md transform hover:scale-110"
      />
      <p>{product.description}</p>
      <p className="w-full h-auto font-bold  pb-7 text-center mt-3">{product.prix}CAD</p>
      <div className="text-center">
        {/* <Button text={props.showAdd ? 'Close' : 'Add'} color={props.showAdd ? 'btn-red' : 'btn-blue'} onClick={props.toggleForm} /> */}
        <Button
          text="Modifier"
          color="bg-blue-500"
          className="border border-gray-500 mr-4 mb-4 rounded-md text-center px-4 py-2 transform hover:scale-110"
          onClick={() => onUpdate(product)}>
          Modifier
        </Button>
        <Button
          text="Supprimer"
          color="bg-red-500"
          className="border border-gray-500 mr-4 mb-4 rounded-md text-center px-4 py-2 transform hover:scale-110"
          onClick={() => onDelete(product.id)}>
          Supprimer
        </Button>
      </div>
    </div>
  );
}

export default Produit;
