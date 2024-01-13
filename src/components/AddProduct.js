import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [nom, setNom] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!nom) {
      alert('Please insert a product');
      return;
    }

    onAdd({ nom, image, description, prix });
    setNom('');
    setImage('');
    setDescription('');
    setPrix('');
  };

  return (
    <div className="container">
      <div className="box form-box">
        <header className="header">Ajouter un produit</header>
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
          {/* <Button text='Enregistrer' color='#DBA745' onClick={onSubmit} />
                    <Button text='Annuler' color='#8E3829' onClick={onCancel} /> */}
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
