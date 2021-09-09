import { DataCard } from "./DataCard";

// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

export const CardGrid = ({ data }) => {
  return (
    <ul>
      {data.map((cardData) => (
        <li key={cardData.date}>
          {" "}
          <DataCard cardData={cardData} />
        </li>
      ))}
    </ul>
  );
};
