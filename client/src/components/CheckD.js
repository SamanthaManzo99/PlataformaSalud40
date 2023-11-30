import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";

function CheckD() {
  return (
    <div className="check">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topseg}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="Seleccionar" />}
      />
    </div>
  );
}

const topseg = [
  { label: "Doctor 1", specialty:"Cardiología" },
  { label: "Doctor 2", specialty:"Pediatría" },
  { label: "Doctor 3", specialty:"Nauroligía" },
  { label: "Doctor 4", specialty:"Oncología" },
  { label: "Doctor 5", specialty:"Cardiología" },
  { label: "Doctor 6", specialty:"Oftamología" },
  { label: "Doctor 7", specialty:"Ginecología" },
  { label: "Doctor 8", specialty:"Odontología" },
  { label: "Doctor 9", specialty:"Cardiología" },
  { label: "Doctor 10", specialty:"Cardiología" },
];

export default CheckD;
