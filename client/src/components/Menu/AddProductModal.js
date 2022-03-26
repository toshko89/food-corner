import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addProduct } from "../../services/productService.js";
import stringCount from "../../utils/minStringCount.js";

export default function AddProductModal({ setVisible, visible }) {

  const closeHandler = () => {
    setVisible(false);
    setRecipe({
      name: '', ingredients: '',
      weight: '', price: '', category: ''
    });
    setFile([]);
    setError(false);
  };
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    name: '', ingredients: '',
    weight: '', price: '', category: ''
  });
  const [file, setFile] = useState([]);
  const [error, setError] = useState(false);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  async function submitProduct() {
    if (recipe.name.trim() === '' || recipe.ingredients.trim() === '' || recipe.weight.trim() === ''
      || recipe.price.trim() === '' || recipe.category.trim() === '') {
      setError('All fields are required');
      return;
    }

    if (!stringCount(recipe.ingredients)) {
      setError('At least 3 ingredients');
      return;
    }

    if (!file) {
      setError('Please add product photo');
      return;
    }

    const data = new FormData();
    data.append('file', file, file.name);
    data.append('name', recipe.name);
    data.append('ingredients', recipe.ingredients);
    data.append('weight', recipe.weight);
    data.append('price', recipe.price);
    data.append('category', recipe.category)

    let res = await addProduct(id, data)
    console.log(res);
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
          onBlur={() => setError(false)}
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
          onBlur={() => setError(false)}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="At least 3 ingredients separated by ','"
        />
        <Input aria-label="modal-weight"
          type="number"
          onChange={(e) => setRecipe({ ...recipe, weight: e.target.value })}
          onBlur={() => setError(false)}
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
          onBlur={() => setError(false)}
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
          onBlur={() => setError(false)}
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
          onBlur={() => setError(false)}
          type="file"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe picture"
        />
        {error && <Text color="red" size={14}>{error}</Text>}
      </Modal.Body>
      <Modal.Footer aria-label="modal-footer">
        <Button aria-label="modal-sign-btn" disabled={error !== false} auto onClick={submitProduct}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
