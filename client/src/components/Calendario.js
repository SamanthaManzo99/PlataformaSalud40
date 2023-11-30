import * as React from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'


function Calendario() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='calendar'>
        <DatePicker/>
        </div>
    </LocalizationProvider>
  )
}

export default Calendario