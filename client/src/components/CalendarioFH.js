import * as React from 'react'
import {DemoContainer} from '@mui/x-date-pickers/internals/demo'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'

function CalendarioFH() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <div className='calendar'>
          <DateTimePicker />
          </div>
        </DemoContainer>
    </LocalizationProvider>
  )
}

export default CalendarioFH