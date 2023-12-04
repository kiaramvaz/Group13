import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as MUILink} from '@mui/material';

const taskz = {
'2023-12-06':
    [
      { id: 1, title: 'Replace Sand for Lola, Bella, and Oliver', time: '10:30 AM' },
      { id: 2, title: 'Fertilize Palm', time: '2:30 PM' },
    ],
'2023-12-07':
    [
      { id: 1, title: 'Take Oliver to the vet', time: '1:00 PM' },
      { id: 2, title: 'Fertilize Rose', time: '2:30 PM' },
    ],
'2023-12-08': [
                {id: 1, title: 'Pick up Oliver at the vet', time: '11:00 AM'},
              ],
'2023-12-09': [
                    {id: 1, title: 'Walk Charlie, Daisy, and Milo', time: '7:00 AM'},
                    { id: 2, title: 'Feed Bella', time: '10:00 AM' },
                    { id: 3, title: 'Water Lavender', time: '12:15 PM' },
                  ],
'2023-12-11': [
                    {id: 1, title: 'Bathe Charlie', time: '6:00 PM'},
                    { id: 2, title: 'Bathe Daisy', time: '7:00 PM' },
                    { id: 3, title: 'Bathe Milo', time: '8:00 PM' },
                  ],
};


export default function CalendarWithBackToDashboard() {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

const displayTasks = () => {
  if (!selectedDate || !taskz[selectedDate.toISOString().split('T')[0]]) {
    return <div>No tasks for the day.</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div>
        <h2>Tasks for {selectedDate.toISOString().split('T')[0]} </h2>
        <ul>
          {taskz[selectedDate.toISOString().split('T')[0]].map((task) => (
            <li key={task.id}>
              <strong>{task.time}</strong>: {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
          <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', overflow: 'hidden', bgcolor: '#dbead2' }}>
              <AppBar position="fixed">
                  <Toolbar sx={{ height: '100%', bgcolor: "#327155"  }}>
                      <MUILink component={RouterLink} to="/Dashboard">
                      <IconButton edge="start" color="white" aria-label="back">
                          <ArrowBackIcon />
                      </IconButton>
                      </MUILink>
                      <Typography align= "left" variant="h6" component="div" sx={{ flexGrow: 1,  }}>
                          Dashboard
                      </Typography>
                  </Toolbar>
              </AppBar>
        <Toolbar /> {}
        <div style={{ padding: '80px 20px 20px 20px' }}> {}
          <DateCalendar
            onChange={(newDate) => handleDateSelect(newDate)}
            renderDay={(date, _value, DayComponentProps) => (
              <button {...DayComponentProps} onClick={() => handleDateSelect(date)}>
                {DayComponentProps.children}
              </button>
            )}
            style={{ width: '1000px', height: '1000px' }}
          />
          {displayTasks()}
        </div>
        </Container>
      </div>
    </LocalizationProvider>
  );
}