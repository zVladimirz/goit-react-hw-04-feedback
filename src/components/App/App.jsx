import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import SectionWrapper from 'components/SectionWrapper';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   incrementFeedback = e => {
//     this.setState(prevState => ({
//       [e.target.innerText]: prevState[e.target.innerText] + 1,
//     }));
//   };
//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }
//   countPositiveFeedbackPercentage() {
//     return Math.round(this.state.good / (this.countTotalFeedback() / 100));
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Wrapper>
//         <SectionWrapper title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.incrementFeedback}
//           />
//         </SectionWrapper>

//         <SectionWrapper title="Statistics">
//           {bad || good || neutral ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback"/>
//           )}
//         </SectionWrapper>
//       </Wrapper>
//     );
//   }
// }

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

function App() {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);
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

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositiveFeedbackPercentage(
      Math.round(good / ((good + neutral + bad) / 100))
    );
  }, [good, neutral, bad]);

  const incrementFeedback = e => {
    eval('handleAdd' + capitalize(e.target.innerText) + '()');
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
