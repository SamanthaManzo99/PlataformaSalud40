import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";

function CheckM() {
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
  { label: "Consulta Médica" },
  { label: "Exámen de Laboratorio" },
  { label: "Radiografía" },
  { label: "Tomografía Computarizada (TC)" },
  { label: "Resonancia Magnética (RM)" },
  { label: "Endoscopia" },
  { label: "Cirugía" },
  { label: "Parto" },
  { label: "Cesárea" },
  { label: "Diálisis" },
  { label: "Quimioterapia" },
  { label: "Radioterapia" },
  { label: "Terapia Física" },
  { label: "Rehabilitación" },
  { label: "Hemodiálisis" },
  { label: "Colonoscopia" },
  { label: "Gastroscopia" },
  { label: "Transfusiones de Sangre" },
  { label: "Terapia Respiratoria" },
  { label: "Procidimiento Dental" },
];

export default CheckM;