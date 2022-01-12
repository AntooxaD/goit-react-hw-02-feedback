import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
    return (
        <div className={style.article}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
export default Section;
