import {useState} from 'react'
import {TextareaAutosize} from '@mui/material'

function InputM() {

    const [value, setValue] = useState("")

    function handleChange(event){
        setValue(event.target.value)
    }

  return (
    <TextareaAutosize
        maxRows={4}
        value={value}
        onChange={handleChange}
        onKeyPress={(event) =>{
            //prettier-ignore
            if(event.target.value.length >= 20 && event.key === "Enter"){
                event.preventDefault();
                setValue((value) => value + "\n");
            }
        }}
        style={{width:'300px',height:'50px', backgroundColor:'#cdcdd4', overflowY:'auto', resize:'none'}}
    />
  )
}

export default InputM