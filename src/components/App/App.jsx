import { useState } from 'react';
import { Wrapper } from './App.styled';
import SectionWrapper from 'components/SectionWrapper';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

function App() {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round(
    good / ((good + neutral + bad) / 100)
  );
  const feedbackList = { good, neutral, bad };

  const handleAddGood = () => {
    addGood(state => state + 1);
  };
  const handleAddNeutral = () => {
    addNeutral(state => state + 1);
  };
  const handleAddBad = () => {
    addBad(state => state + 1);
  };

  const incrementFeedback = e => {
    if (e.target.innerText === 'good') {
      handleAddGood();
    }
    if (e.target.innerText === 'neutral') {
      handleAddNeutral();
    }
    if (e.target.innerText === 'bad') {
      handleAddBad();
    }
  };

  return (
    <Wrapper>
      <SectionWrapper title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackList)}
          onLeaveFeedback={incrementFeedback}
        />
      </SectionWrapper>

      <SectionWrapper title="Statistics">
        {bad || good || neutral ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionWrapper>
    </Wrapper>
  );
}

export default App;
