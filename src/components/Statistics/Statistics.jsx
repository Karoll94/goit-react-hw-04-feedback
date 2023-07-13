import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({good,bad,neutral, total, positiveFeedback}) => {
    
    return(
        <div className={style.statisticsContainer}>
           <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total}</p>
            <p>positive Feedback: {positiveFeedback}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number
}
