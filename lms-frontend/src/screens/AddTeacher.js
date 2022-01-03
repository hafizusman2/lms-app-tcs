import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const postData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/admin/addteacher", {
        // name: name,
        // designation: designation,
        name,
        designation,
      })
      .then(function (response) {
        // const res = response.parse;
        console.log(response);
        if (response) {
          alert("teacher added");
        }
      });
  };
  return (
    <div>
      <h2 style={{ color: "gray" }}>Add Teacher</h2>
      <form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            // autoComplete="fname"
            name="name"
            required
            fullWidth
            id="name"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Designation"
            variant="outlined"
            name="designation"
            required
            fullWidth
            id="designation"
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
        </Box>
        <Button onClick={postData} type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddTeacher;
