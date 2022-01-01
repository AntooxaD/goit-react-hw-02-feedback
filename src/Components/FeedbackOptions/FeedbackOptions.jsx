import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={style.feedbackList}>
                {options.map(option => (
                    <li className={style.feedbackItem} key={option}>
                        <button
                            className={style.feedbackButton}
                            onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default FeedbackOptions;
