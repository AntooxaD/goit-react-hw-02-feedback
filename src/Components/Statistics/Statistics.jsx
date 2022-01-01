import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Statistics.module.css';
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
            <ul className={style.statisticsList}>
                <li className={style.statisticItem}>Good: {good}</li>
                <li className={style.statisticItem}>Neutral: {neutral}</li>
                <li className={style.statisticItem}>Bad: {bad}</li>
                <li className={style.statisticItem}>Total: {total}</li>
                <li className={style.statisticItem}>
                    PositivePercentage: {positivePercentage}
                </li>
            </ul>
        );
    }
}
export default Statistics;
