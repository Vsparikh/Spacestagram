import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useReducer } from "react";
import { grey, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 600,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    maxHeight: "50vh",
  },
}));

export const DataCard = ({ cardData }) => {
  const classes = useStyles();
  console.log(cardData)
  const imgSrc = cardData.hdurl ? cardData.hdurl : cardData.url;
  const [like, toggleLike] = useReducer((like) => !like, false);

  return (
    <Card className={classes.card}>
      <CardHeader title={cardData.title} subheader={cardData.date} />
      <CardMedia className={classes.media} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cardData.explanation}
        </Typography>
      </CardContent>
      <IconButton aria-label="like this content" onClick={toggleLike}>
        <FavoriteIcon style={{ color: like ? red[900] : grey[900] }} />
      </IconButton>
    </Card>
  );
};
