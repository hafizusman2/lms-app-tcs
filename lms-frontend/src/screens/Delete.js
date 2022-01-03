import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const Delete = () => {
  const [cid, setcid] = useState("");
  const [sid, setsid] = useState("");

  const deleteData = (e) => {
    e.preventDefault();

    axios
      .delete("http://localhost:3000/teacher/marks", {
        // cid: name,
        // designation: designation,
        cid,
        sid,
      })
      .then(function (response) {
        // const res = response.parse;
        console.log(response);
        if (response) {
          alert("marks deleted");
        }
      });
  };
  return (
    <div>
      <h2 style={{ color: "gray" }}>Delete Marks</h2>
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
            label="CID"
            variant="outlined"
            // autoComplete="fname"
            name="cid"
            required
            fullWidth
            id="cid"
            autoFocus
            value={cid}
            onChange={(e) => {
              setcid(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="SID"
            variant="outlined"
            name="sid"
            required
            fullWidth
            id="sid"
            value={sid}
            onChange={(e) => {
              setsid(e.target.value);
            }}
          />
        </Box>
        <Button onClick={deleteData} type="submit" variant="contained">
          Delete Marks
        </Button>
      </form>
    </div>
  );
};

export default Delete;
