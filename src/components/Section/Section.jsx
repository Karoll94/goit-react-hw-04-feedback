import PropTypes from 'prop-types';
import style from './Section.module.css';

export const Section = ({title}) => {
    return (
        <section  className= {style.sectionComponent}>
            <h1 className= {style.title}>{title}</h1>
            </section>
    )
}

Section.propTypes = {
    title: PropTypes.string
}