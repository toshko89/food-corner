import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from "react-router-dom";
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import { Modal, Button, Text } from "@nextui-org/react";
import { LoadingButton } from '@mui/lab';
import OwnerGuard from '../../guards/OwnerGuard.js';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddProductModal from './AddProductModal.js';
import { useState } from 'react';
import { deleteRestaurantById } from '../../services/restaurantService.js';

export default function RestaurantMenuNavIcons({ isOwner, restaurant }) {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const handler = () => setVisible(true);
  const handlerDeleteModal = () => setDeleteModal(true);
  const closeHandlerDeleteModal = () => {
    setDeleteModal(false);
  };
  function handleClick() {
    setLoading(true);
  }

  async function deleteRestaurant(restaurantId) {
    try {
      const res = await deleteRestaurantById(restaurantId);
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>


      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        <OwnerGuard restaurant={restaurant}>
          {isOwner &&
            <><IconButton component={Link} to={`/restaurants/${restaurant._id}/edit`} variant="contained" aria-label="edit" size="large">
              <ModeEditOutlineTwoToneIcon fontSize="large" />
            </IconButton>
              <IconButton aria-label="add-menu" size="large" onClick={handler} >
                <LunchDiningRoundedIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={handlerDeleteModal} aria-label="delete" size="large">
                <DeleteForeverRoundedIcon fontSize="large" />
              </IconButton>
            </>}
        </OwnerGuard>
        <IconButton aria-label="favorites" color="error" size="large">
          <FavoriteBorderRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="comments" color="primary" size="large">
          <MapsUgcRoundedIcon fontSize="large" />
        </IconButton>
      </ButtonGroup>
      <OwnerGuard restaurant={restaurant}>
        {isOwner && <AddProductModal setVisible={setVisible} visible={visible} />}
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={deleteModal}
          onClose={closeHandlerDeleteModal}
        >
          <Modal.Header>
            <Text b id="modal-title" size={18}>
              Are you sure you want to delete this restaurant ({restaurant.name})?
            </Text>
          </Modal.Header>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandlerDeleteModal}>
              Close
            </Button>
            <LoadingButton
              onClick={() => { deleteRestaurant(restaurant._id); handleClick(); }}
              loading={loading}
              variant="contained"
            >
              Delete
            </LoadingButton>
          </Modal.Footer>
        </Modal>
      </OwnerGuard>
    </>
  )
}