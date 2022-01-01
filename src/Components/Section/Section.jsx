import PropTypes from 'prop-types';
import { Component } from 'react';

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
            <div>
                <h2>{title}</h2>
                {children}
            </div>
        );
    }
}
export default Section;