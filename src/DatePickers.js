import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const DatePickers = ({
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) => {
  const IsValidEndDate = (date) => {
    return date <= startDate;
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="start-date-picker"
          label="Start Date "
          format="MM/dd/yyyy"
          value={startDate}
          disableFuture="true"
          onChange={onStartDateChange}
          KeyboardButtonProps={{
            "aria-label": "change start date",
          }}
        />
      </Grid>

      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="end-date-picker"
          label="End Date "
          format="MM/dd/yyyy"
          value={endDate}
          onChange={onEndDateChange}
          disableFuture="true"
          shouldDisableDate={IsValidEndDate}
          KeyboardButtonProps={{
            "aria-label": "change end date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
