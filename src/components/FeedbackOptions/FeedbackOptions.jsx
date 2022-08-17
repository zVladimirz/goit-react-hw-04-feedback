import PropTypes from 'prop-types';
import { StyledButton } from 'components/FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => {
        return (
          <StyledButton key={item} type="button" onClick={onLeaveFeedback}>
            {item}
          </StyledButton>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
