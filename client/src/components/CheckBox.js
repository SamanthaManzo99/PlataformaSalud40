import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";

function CheckBox() {
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
  { label: "Seguro Popular" },
  { label: "Instituto Mexicano del Seguro Social (IMMS)" },
  {
    label:
      "Instituto de Seguridad y Servicios Sociales de Trabajadores del Estado (ISSTE)",
  },
  { label: "AXA Seguros" },
  { label: "Gastos Médicos Mayores de GNP" },
  { label: "Seguros Monterrey New York Life" },
  { label: "MetLife México" },
  { label: "Seguros Atlas" },
  { label: "Seguros Banorte" },
  { label: "Seguros Inbursa" },
  { label: "Seguros SURA" },
];

export default CheckBox;
