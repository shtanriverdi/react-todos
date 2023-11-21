import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import PropTypes from 'prop-types';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <CircleIcon style={{ width: 17 }} color="success" />,
  },
  2: {
    icon: <CircleIcon style={{ width: 17 }} color="warning" />,
  },
  3: {
    icon: <CircleIcon style={{ width: 17 }} color="error" />,
  }
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RatingSection({ priority, onRatingChange, isDisabled }) {
  return (
    <StyledRating
      name="highlight-selected-only"
      onChange={(value) => onRatingChange(value)}
      value={priority}
      max={3}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
      disabled={isDisabled}
    />
  );
}
