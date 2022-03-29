import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Modal, Button, Text } from "@nextui-org/react";
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

export default function MenuCard({ product, deleteProductHandler }) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  function handleClick() {
    setLoading(true);
  }
  return (
    <>
      <Grid item xs={2} sm={4} md={4} >
        <Card sx={{ maxWidth: 350 }}>
          <CardHeader
            action={
              <IconButton color='success' aria-label="settings">
                <ShoppingCartIcon fontSize="large" />
              </IconButton>
            }
            title={product.name}
            subheader={`${product.price} $`}
          />
          <CardMedia
            component="img"
            height="194"
            image={product.img.secure_url}
            alt="Paella dish"
          />
          <CardContent>
            <Typography fontSize='1.3rem' variant="body1" color="text.secondary">
              {product.ingredients.join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`(${product.weight}g)`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <ConstructionRoundedIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={handler} aria-label="share">
              <DeleteForeverRoundedIcon fontSize="large" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid >

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            Are you sure you want to delete this recipe?
          </Text>
        </Modal.Header>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <LoadingButton
            onClick={() => { deleteProductHandler(product._id); handleClick(); }}
            loading={loading}
            variant="contained"
          >
            Confirm
          </LoadingButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

