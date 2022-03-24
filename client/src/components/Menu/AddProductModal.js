import { Modal, Button, Text, Input, Checkbox, Row, Separator } from "@nextui-org/react";
import { useState } from "react";

export default function AddProductModal({ closeHandler, visible }) {

  const [recipe, setRecipe] = useState({ name: '', ingredients: '', weight: '', price: '', category: '' });
  const [recipePicture, setPicture] = useState([]);

  //TODO да направя валидациите 

  function handleFileChange(e) {
    const file = e.target.files[0];
    setPicture(file);
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
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe name"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
        <Input aria-label="modal-ingredients"
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
          value={recipe.ingredients}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Ingredients separated by ','"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
        <Input aria-label="modal-weight"
          type="number"
          onChange={(e) => setRecipe({ ...recipe, weight: e.target.value })}
          value={recipe.weight}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Weight in grams"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
        <Input aria-label="modal-price"
          type="number"
          onChange={(e) => setRecipe({ ...recipe, price: e.target.value })}
          value={recipe.price}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Price"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
        <Input aria-label="modal-category"
          onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
          value={recipe.category}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Category"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
        <Input aria-label="modal-file"
          onChange={setPicture}
          type="file"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe picture"
        />
        <Row>
          <Text color="red" size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer aria-label="modal-footer">
        <Button aria-label="modal-sign-btn" disabled={true} auto onClick={closeHandler}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
