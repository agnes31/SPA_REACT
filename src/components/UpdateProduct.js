import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate, onCancel }) => {
  const [nom, setNom] = useState(product.nom);
  const [image, setImage] = useState(product.image);
  const [description, setDescription] = useState(product.description);
  const [prix, setPrix] = useState(product.prix);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(product.id, { id: product.id, nom, image, description, prix });
  };

  return (
    <div className="container">
      <div className="box form-box">
        <header className="header">Modifier un produit</header>
        <form className="add-fom" onSubmit={onSubmit}>
          <div className="field input">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Add Name"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="field input">
            <label>Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              placeholder="Add Image"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          <div className="field input">
            <label>Description</label>
            <textarea
              //  rows="10"
              id="description"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="field input">
            <label>Prix CAD</label>
            <input
              type="number"
              placeholder="Add Price"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
          </div>
          <input type="submit" className="boutton" value="Save Produit" />
          <input type="button" className="boutton" value="Cancel" onClick={onCancel} />
        </form>
      </div>
    </div>
  );
};
export default UpdateProduct;
