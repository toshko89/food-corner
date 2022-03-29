import IconButton from '@mui/material/IconButton';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddProductModal from './AddProductModal.js';
import { useState } from 'react';

export default function RestaurantMenuNavIcons({isOwner}) {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
 
  return (
    <>
      {isOwner && <AddProductModal setVisible={setVisible} visible={visible} />}
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
        {isOwner && <><IconButton aria-label="edit" size="large">
          <ModeEditOutlineTwoToneIcon fontSize="large" />
        </IconButton>
          <IconButton aria-label="add-menu" size="large" onClick={handler} >
            <LunchDiningRoundedIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="data" size="large">
            <ConstructionRoundedIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteForeverRoundedIcon fontSize="large" />
          </IconButton></>}
        <IconButton aria-label="favorites" color="error" size="large">
          <FavoriteBorderRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="comments" color="primary" size="large">
          <MapsUgcRoundedIcon fontSize="large" />
        </IconButton>
      </ButtonGroup>
    </>
  )
}