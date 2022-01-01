import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>PositivePercentage: {positivePercentage}</li>
            </ul>
        );
    }
}
export default Statistics;
