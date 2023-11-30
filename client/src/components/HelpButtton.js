import React from 'react'
import "../pages/Styles.css";
import {Help} from '@mui/icons-material'
import { Button } from '@mui/material';

function HelpButtton() {
  return (
    <Button className='help'>
        <Help/>
    </Button>
  )
}

export default HelpButtton