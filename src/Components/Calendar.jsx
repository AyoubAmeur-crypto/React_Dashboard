import React from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import '@schedule-x/theme-default/dist/index.css' // Import the dark theme CSS
import './calendar.css'
{/* npm install @schedule-x/drag-and-drop
 npm install @schedule-x/event-modal */}
function Calendar() {
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    isDark :true,
  
    events: [
    {
    id: 1,
    title: 'Q1 Strategy Meeting',
    description: 'Discuss Q1 goals and strategies',
    location: 'Office Boardroom',
    start: '2025-01-05 09:00',
    end: '2025-01-05 11:00',
    calendarId: 'business',
  },
  {
    id: 2,
    title: 'Client Presentation',
    description: 'Present new product line to Client X',
    location: 'Client X Office',
    start: '2025-01-10 14:00',
    end: '2025-01-10 16:00',
    calendarId: 'business',
  },
  {
    id: 3,
    title: 'Travel to Conference',
    description: 'Flight to Annual Business Conference',
    location: 'Airport',
    start: '2025-01-15 06:00',
    end: '2025-01-15 08:00',
    calendarId: 'travel',
  },
  {
    id: 4,
    title: 'Annual Business Conference',
    description: 'Keynote speech and networking',
    location: 'Convention Center',
    start: '2025-01-16 09:00',
    end: '2025-01-18 17:00',
    calendarId: 'business',
  },
  {
    id: 5,
    title: 'Team Building Retreat',
    description: 'Team activities and planning',
    location: 'Mountain Resort',
    start: '2025-02-01 08:00',
    end: '2025-02-03 18:00',
    calendarId: 'business',
  },
  {
    id: 6,
    title: 'Quarterly Review',
    description: 'Review Q1 performance and metrics',
    location: 'Office',
    start: '2025-03-10 10:00',
    end: '2025-03-10 12:00',
    calendarId: 'business',
  },
  {
    id: 7,
    title: 'Product Launch',
    description: 'Launch of new product line',
    location: 'Event Hall',
    start: '2025-04-05 18:00',
    end: '2025-04-05 21:00',
    calendarId: 'business',
  },
  {
    id: 8,
    title: 'Vacation',
    description: 'Family vacation',
    location: 'Beach Resort',
    start: '2025-05-01',
    end: '2025-05-07',
    calendarId: 'personal',
  },
  {
    id: 9,
    title: 'Industry Seminar',
    description: 'Attend industry trends seminar',
    location: 'City Convention Center',
    start: '2025-06-12 09:00',
    end: '2025-06-12 16:00',
    calendarId: 'business',
  },
  {
    id: 10,
    title: 'Mid-Year Review',
    description: 'Review mid-year goals and progress',
    location: 'Office',
    start: '2025-07-01 10:00',
    end: '2025-07-01 12:00',
    calendarId: 'business',
  },
  {
    id: 11,
    title: 'Client Dinner',
    description: 'Dinner with key clients',
    location: 'Fine Dining Restaurant',
    start: '2025-08-15 19:00',
    end: '2025-08-15 22:00',
    calendarId: 'business',
  },
  {
    id: 12,
    title: 'Training Workshop',
    description: 'Leadership training workshop',
    location: 'Training Center',
    start: '2025-09-10 09:00',
    end: '2025-09-12 17:00',
    calendarId: 'business',
  },
  {
    id: 13,
    title: 'Q4 Planning Meeting',
    description: 'Plan Q4 objectives and strategies',
    location: 'Office',
    start: '2025-10-01 09:00',
    end: '2025-10-01 11:00',
    calendarId: 'business',
  },
  {
    id: 14,
    title: 'Holiday Party',
    description: 'Company holiday party',
    location: 'Event Hall',
    start: '2025-12-15 18:00',
    end: '2025-12-15 22:00',
    calendarId: 'business',
  },
  {
    id: 15,
    title: 'Year-End Review',
    description: 'Review annual performance and goals',
    location: 'Office',
    start: '2025-12-30 10:00',
    end: '2025-12-30 12:00',
    calendarId: 'business',
  },
    ],
    plugins: [createDragAndDropPlugin(), createEventModalPlugin()],
    selectedDate: '2025-01-01'
  })



  return (
    <ScheduleXCalendar calendarApp={calendar} />
  )
}

export default Calendar