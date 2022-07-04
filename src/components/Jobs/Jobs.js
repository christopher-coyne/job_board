import React from "react";
import jobs from "../../jobs.js";
import JobCard from "./components/JobCard";
import Typography from "@mui/material/Typography";
import {
  AppBar,
  Toolbar,
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import Box from "@mui/material/Box";

const Jobs = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "green" }}>ABCDEFG</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px solid red",
        }}
      >
        <Typography>Number of Jobs: {jobs.length}</Typography>
        <Typography>Input Here:</Typography>
      </Box>
      <Container>
        {jobs.map((job) => (
          <JobCard title={job.title} />
        ))}
      </Container>
    </>
  );
};

export default Jobs;
