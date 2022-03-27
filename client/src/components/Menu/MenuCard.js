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


export default function MenuCard({ product }) {
  console.log(product);
  return (
    <Grid item xs={2} sm={4} md={4} >
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={product.img.secure_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <ConstructionRoundedIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteForeverRoundedIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid >
  );
}

