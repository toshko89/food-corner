import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import { useState } from "react";

export default function AddProductModal({ setVisible, visible }) {

  const closeHandler = () => {
    setVisible(false);
    setRecipe({
      name: '', ingredients: '',
      weight: '', price: '', category: ''
    });
    setFile([]);
    setError(null);
  };
  const [recipe, setRecipe] = useState({
    name: '', ingredients: '',
    weight: '', price: '', category: ''
  });
  const [file, setFile] = useState([]);
  const [error, setError] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  function submitProduct() {
    if (recipe.name.trim() === '' || recipe.ingredients.trim() === '' || recipe.weight.trim() === ''
      || recipe.price.trim() === '' || recipe.category.trim() === '') {
      setError('All fields are required');
      return;
    }

    if (!file) {
      setError('Please add product photo');
      return;
    }

    const data = new FormData();
    data.append('product_photo', file, file.name);
    data.append('product_name', recipe.name);
    data.append('product_ingredients', recipe.ingredients);
    data.append('product_weight', recipe.weight);
    data.append('product_price', recipe.price);
    data.append('product_category', recipe.category)

    console.log(data.get('product_name'));
  }

  return (
    <Modal aria-label="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header aria-label="modal-header">
        <Text b id="modal-title" size={20}>
          Add recipe
        </Text>
      </Modal.Header>
      <Modal.Body aria-label="modal-body">
        <Input aria-label="modal-name"
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          value={recipe.name}
          onBlur={() => setError(null)}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe name"
        />
        <Input aria-label="modal-ingredients"
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          value={recipe.ingredients}
          onBlur={() => setError(null)}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Ingredients separated by ','"
        />
        <Input aria-label="modal-weight"
          type="number"
          onChange={(e) => setRecipe({ ...recipe, weight: e.target.value })}
          onBlur={() => setError(null)}
          value={recipe.weight}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Weight in grams"
        />
        <Input aria-label="modal-price"
          type="number"
          onChange={(e) => setRecipe({ ...recipe, price: e.target.value })}
          onBlur={() => setError(null)}
          value={recipe.price}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Price"
        />
        <Input aria-label="modal-category"
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
          onBlur={() => setError(null)}
          value={recipe.category}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Category"
        />
        <Input aria-label="modal-file"
          onChange={handleFileChange}
          onBlur={() => setError(null)}
          type="file"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe picture"
        />
        {error && <Row><Text color="red" size={14}>{error}</Text></Row>}
      </Modal.Body>
      <Modal.Footer aria-label="modal-footer">
        <Button aria-label="modal-sign-btn" disabled={error !== null} auto onClick={submitProduct}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
