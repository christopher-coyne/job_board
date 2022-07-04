import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import {
  AppBar,
  Toolbar,
  Container,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Jobs from "../../components/Jobs/Jobs";

const JobBoard = () => {
  const categories = ["abc", "def", "ghi"];
  const [age, setAge] = useState("");

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography>DevJobs</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ "margin-top": "50px" }}>
        <TextField id="searchAll" label="Search For Jobs" variant="outlined" />
        <TextField
          id="location"
          label="Location"
          variant="outlined"
        ></TextField>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={() => {
              console.log("hello");
            }}
            label="Age"
            sx={{ width: "100px" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Jobs />
    </>
  );
};

export default JobBoard;
