import { DataCard } from "./DataCard";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

export const CardGrid = ({ data }) => {
  return (
    <List>
      {data.map((cardData) => (
        <ListItem key={cardData.date}>
          <DataCard cardData={cardData} />
        </ListItem>
      ))}
    </List>
  );
};
