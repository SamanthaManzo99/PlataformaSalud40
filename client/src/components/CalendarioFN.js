import * as React from 'react'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'

function CalendarioFN() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='calendar-1'>
        <DatePicker className='date-picker'/>
        </div>
    </LocalizationProvider>
  )
}

export default CalendarioFN