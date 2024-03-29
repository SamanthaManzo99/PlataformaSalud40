import * as React from 'react'
import dayjs from 'dayjs'
import Badge from '@mui/material/Badge'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {PickersDay} from '@mui/x-date-pickers/PickersDay'
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar'
import {DayCalendarSkeleton} from '@mui/x-date-pickers/DayCalendarSkeleton'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function getRandomNumber(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date,{signal}){
  return new Promise((resolve, reject) =>{
    const timeout = setTimeout(() =>{
      const daysInMonth = date.daysInMonth()
      const daysToHighlight = [1,2,3].map(() => getRandomNumber(1, daysInMonth))

      resolve({daysToHighlight})
    }, 500)

    signal.onabort = () =>{
      clearTimeout(timeout)
      reject(new DOMException('aborted', 'AbortError'))
    }
  })
}

const initialValue = dayjs('2023-11-22')

function ServerDay(props){
  const{highlightedDays = [], day, outsideCurrentMonth, ...other} = props;

  const isSelected = 
  !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge 
    key={props.day.toString()}
    overlap='circular'
    badgeContent={isSelected ? '🩺' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day}/>
    </Badge>
  )
}
export default function CalendarC() {

  const requestAbortController = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [highlightedDays, sethighlighteDays] = useState([1,2,15])

  const fetchHighlighteDays = (date) =>{
    const controller = new AbortController()
    fakeFetch(date, {
      signal: controller.signal
    })
    .then(({daysToHighlight}) =>{
      sethighlighteDays(daysToHighlight)
      setIsLoading(false)
    })
    .catch((error) =>{
      if(error.name !== 'AbortError'){
        throw error
      }
    })
    requestAbortController.current = controller
  }

  useEffect(() =>{
    fetchHighlighteDays(initialValue)
    return () => requestAbortController.current?.abort()
  },[])

  const handleMonthChange = (date) =>{
    if (requestAbortController.current){
      requestAbortController.current.abort()
    }

    setIsLoading(true)
    sethighlighteDays([])
    fetchHighlighteDays(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='cal-a'>
      <DateCalendar 
      defaultValue={initialValue}
      loading={isLoading}
      onMonthChange={handleMonthChange}
      renderLoading={() => <DayCalendarSkeleton/>}
      slots={{
        day: ServerDay,
      }}
      slotProps={{
        day:{
          highlightedDays,
        }
      }}/>
      </div>
    </LocalizationProvider>
  )
}


