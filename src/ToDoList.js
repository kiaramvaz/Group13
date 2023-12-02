import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import UndoIcon from '@mui/icons-material/Undo';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Dashboard from "./Dashboard.js";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const defaultTheme = createTheme();

// Sample tasks for the day
const initialTasks = [
    { id: 0, type: 'pet', task: 'Feed the Dog' },
    { id: 1, type: 'pet', task: 'Take the Dog for a Walk' },
    { id: 2, type: 'plant', task: 'Water the Flowers' },
    { id: 3, type: 'pet', task: 'Feed the Cat' },
    { id: 4, type: 'plant', task: 'Water the Potted Plants' },
    { id: 5, type: 'pet', task: 'Play with the Parrot' },
];

export default function TodayToDoList() {
    const [completedTasks, setCompletedTasks] = React.useState([]);
    const [undoStack, setUndoStack] = React.useState([]);
    const [tasks, setTasks] = React.useState(initialTasks);
    const [newTask, setNewTask] = React.useState('');
    const [taskType, setTaskType] = React.useState('');

    const handleCheckboxChange = (id) => {
        setCompletedTasks((prev) => [...prev, id]);
        setUndoStack((prev) => [...prev, id]);
    };

    const handleUndo = () => {
        if (undoStack.length > 0) {
            const lastCompletedTask = undoStack.pop();
            setCompletedTasks((prev) => prev.filter((taskId) => taskId !== lastCompletedTask));
            setUndoStack([...undoStack]);
        }
    };

    const handleMarkCompleted = () => {
        // Implement any logic you need before tasks disappear
        setTasks((prevTasks) => prevTasks.filter((task) => !completedTasks.includes(task.id)));
        setUndoStack([]);
        setCompletedTasks([]);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '' && taskType !== '') {
            const newTaskObj = {
                id: tasks.length,
                type: taskType,
                task: newTask.trim(),
            };
            setTasks((prevTasks) => [...prevTasks, newTaskObj]);
            setNewTask('');
            setTaskType('');
        }
    };

    const getIconByType = (type) => {
        switch (type) {
            case 'pet':
                return <PetsIcon fontSize="small" />;
            case 'plant':
                return <LocalFloristIcon fontSize="small" />;
            default:
                return null;
        }
    };

    const filteredTasks = tasks.filter((task) => !completedTasks.includes(task.id));

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xl" sx={{ padding: 0, margin: 'auto', height: '100vh', alignItems: 'center', bgcolor: '#dbead2' }}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar sx={{ height: '100%', bgcolor: "#327155"  }}>
                        <MUILink component={RouterLink} to="/Dashboard">
                            <IconButton edge="start" color="inherit" aria-label="back">
                                <ArrowBackIcon />
                            </IconButton>
                        </MUILink>
                        <Typography align= "left" variant="h6" component="div" sx={{ flexGrow: 1,  }}>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#327155', marginTop: 8 }}>
                        <PetsIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Today's To-Do List
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {filteredTasks.map((task) => (
                                <Grid item xs={12} key={task.id}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                marginRight: 1,
                                                color: 'inherit',
                                            }}
                                        >
                                            {getIconByType(task.type)}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                marginRight: 1,
                                                color: 'inherit',
                                            }}
                                        >
                                            {task.task}
                                        </Typography>
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon />}
                                            checkedIcon={<CheckCircleIcon />}
                                            onChange={() => handleCheckboxChange(task.id)}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton onClick={handleUndo} disabled={undoStack.length === 0}>
                                <UndoIcon />
                            </IconButton>
                            <Button
                                variant="contained"
                                onClick={handleMarkCompleted}
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    bgcolor: '#327155',
                                    '&:hover': {
                                        bgcolor: '#fff4e9',
                                        color: '#327155',
                                    },
                                }}
                            >
                                Mark Selected as Completed
                            </Button>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <TextField
                                        select
                                        fullWidth
                                        label="Type"
                                        value={taskType}
                                        onChange={(e) => setTaskType(e.target.value)}
                                        required
                                        sx={{ marginBottom: 2 }}
                                    >
                                        <MenuItem value="pet">Pet</MenuItem>
                                        <MenuItem value="plant">Plant</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Task"
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        required
                                        autoComplete="off"
                                        sx={{ marginBottom: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        onClick={handleAddTask}
                                        sx={{
                                            bgcolor: '#327155',
                                            '&:hover': {
                                                bgcolor: '#fff4e9',
                                                color: '#327155',
                                            },
                                        }}
                                    >
                                        <AddIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
