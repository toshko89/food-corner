
import { Modal, Button, Text, Input, Row } from "@nextui-org/react";

export default function AddProductModal({ handler, closeHandler, visible }) {

  return (
    <Modal aria-label="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header aria-label="modal-header">
        <Text b id="modal-title" size={18}>
          Add recipe
        </Text>
      </Modal.Header>
      <Modal.Body aria-label="modal-body">
        <Input aria-label="modal-name"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe name"
        />
        <Input aria-label="modal-ingredients"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Ingredients separated by ','"
        />
        <Input aria-label="modal-weight"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Weight in grams"
        />
        <Input aria-label="modal-price"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Price"
        />
        <Input aria-label="modal-category"
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Category"
        />
        <Input aria-label="modal-file"
          type={'file'}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Recipe picture"
        />
      </Modal.Body>
      <Modal.Footer aria-label="modal-footer">
        <Button aria-label="modal-sign-btn" disabled={true} auto onClick={closeHandler}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
