import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CocktailItemInputForm from "./CocktailItemInputForm";

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
          {props.cocktail.instructions}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CocktailItemInputForm
          id={props.cocktail.id}
          cocktail={props.cocktail}
        />
      </CardActions>
    </Card>
  );
}
