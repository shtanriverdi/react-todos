import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { DeleteOutline } from '@mui/icons-material';
import Rating from './RatingSection';

export default function TodoItem({ item, onDelete, onToggle }) {
    const labelId = item.id;
    const listItemStyle = {
        bgcolor: item.backgroundColor,
        borderRadius: 5,
        mb: 2
    };
    const textStrikeThroughStyle = { textDecoration: item.done ? 'line-through' : 'none' };
    return (
        <ListItem
            sx={listItemStyle}
            key={item.id}
            secondaryAction={
                <IconButton
                    onClick={() => onDelete(item.id)}
                    edge="end"
                    aria-label="comments"
                >
                    <DeleteOutline />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox
                        onChange={() => onToggle(item.id)}
                        edge="start"
                        checked={item.done}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>

                <Typography style={textStrikeThroughStyle} id={labelId} sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    {item.title}
                    <ListItemText id={labelId} primary={item.description} />
                    <Rating priority={item.priority} isDisabled={true} />
                </Typography>
            </ListItemButton>
        </ListItem>
    );
}
