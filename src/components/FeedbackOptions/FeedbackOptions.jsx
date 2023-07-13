import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions= ({options,onLeaveFeedback}) =>{
    return(
        <div className={style.options}>
            <button className= {style.button} onClick={options}>{onLeaveFeedback}</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.func,
    onLeaveFeedback: PropTypes.string
}