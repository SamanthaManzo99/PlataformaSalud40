import * as React from 'react'
import {TextField, Autocomplete} from '@mui/material'

function CheckE() {
  return (
    <div className="check-1">
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
  { label: "Medicina Interna" },
  { label: "Pediatría" },
  { label: "Ginecología" },
  { label: "Cardiología" },
  { label: "Neurología" },
  { label: "Onclogía" },
  { label: "Ortopedia" },
  { label: "Oftamología" },
  { label: "Odontología" },
  { label: "Medicina de Emergencia" },
  { label: "Medicina de Cuidados Paliativos" },
];



export default CheckE
