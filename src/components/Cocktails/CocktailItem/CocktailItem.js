import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CocktailItemInputForm from './CocktailItemInputForm'

export default function CocktailItem(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.cocktail.name}
        subheader={props.cocktail.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.cocktail.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          description
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton onClick={handleExpandClick} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <CocktailItemInputForm id={props.cocktail.id} addToCart={()=>{}}/>
      </CardActions>
    </Card>
  );
}
