import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Rating from './RatingSection';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import { getRandomColor } from './Colors.js';

export default function AddTodo({ onAddItem }) {
    const [item, setItem] = useState({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        done: false,
        priority: 1,
        backgroundColor: getRandomColor()
    });

    const handleSubmit = () => {
        if (item.title !== "") {
            onAddItem(item);
            setItem({
                id: crypto.randomUUID(),
                title: '',
                description: '',
                done: false,
                priority: 1,
                backgroundColor: getRandomColor()
            });
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setItem((prevItem) => {
            return { ...prevItem, [name]: value };
        });

    }

    const onRatingChange = (event) => {
        const value = event.target.value;
        setItem((prevItem) => {
            const newItem = { ...prevItem };
            newItem.priority = parseInt(value);
            return newItem;
        });
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField name="title" onChange={handleChange} value={item.title} style={{ marginBottom: '10px' }} id="outlined-basic" label="Title" variant="outlined" />
            <TextField
                name="description"
                onChange={handleChange}
                value={item.description}
                style={{ marginBottom: '20px' }}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline={true}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography>
                        Priority:
                    </Typography>
                    <Rating priority={item.priority} onRatingChange={onRatingChange} isDisabled={false} />
                </Box>
                <Button onClick={handleSubmit} color='success' component="label" variant="contained" endIcon={<AddCircleOutline />}>
                    Create
                </Button>
            </Box>
        </Box >
    );
}