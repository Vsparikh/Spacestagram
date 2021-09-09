import { AppBar, Typography, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.title}>
          Spacestagram
        </Typography>
        <Typography variant="subtitle2" color="inherit">
          Brought to you by NASA's Astronomy Photo of the Day(APOD) API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
