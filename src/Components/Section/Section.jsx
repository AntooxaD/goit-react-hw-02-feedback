import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Section.module.css';

class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]).isRequired,
    };
    render() {
        const { title, children } = this.props;
        return (
            <div className={style.article}>
                <h2 className={style.title}>{title}</h2>
                {children}
            </div>
        );
    }
}
export default Section;
