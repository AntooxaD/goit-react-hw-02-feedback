import { Component } from 'react';
import './App.css';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Notification from './Components/Notification/Notification';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    }
    setValue = key => {
        this.setState(state => ({ [key]: state[key] + 1 }));
    };
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        return (
            <div className="App">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.setValue}
                    />
                </Section>
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={percentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
