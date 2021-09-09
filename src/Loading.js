import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Loading: {
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    "& > * + *": {
      marginLeft: theme.spacing(3),
    },
  },
}));

export const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
    >
    
    <Grid item xs={6}>
        <Typography variant="h1" color="primary" align="center">
          Loading
        </Typography>
    </Grid>
      <Grid item xs={3}>
        <div className={classes.Loading}>
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress />
        </div>
      </Grid>
      
    </Grid>
  );
};
