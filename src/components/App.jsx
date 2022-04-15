import React, { Component } from "react";
import FeedbackOptions from 'components/feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/feedback/Statistics/Statistics';
import Section from 'components/feedback/Section/Section';
import Notification from 'components/feedback/Notification';
import { Container } from 'components/App.styled';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  // handleChange = evt => {
  //   this.setState({ [evt.currentTarget.name]: evt.currentTarget.value })
  // };

  onHandleIncrement = (options) => {
    this.setState(prevState => {
      return { [options]: prevState[options] + 1 }
    });
  }

  // handleIncrementGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleIncrementBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    return  Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

    countPositiveFeedbackPercentage = () => {
      return Math.round(100 / (this.countTotalFeedback() / this.state.good))
    };

  render() {
      const { good, neutral, bad } = this.state;
      const label = Object.keys(this.state);

    return (
    <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            onLeaveFeedback={this.onHandleIncrement}
            options={label} />
            
        </Section>
        
        <Section title='Statistics'>

          {this.countTotalFeedback() > 0 ? 
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage() } /> :
            <Notification title='There is no feedback' />} 
          
        </Section>
        
    </Container>
  );
  }
  
};

export default App;