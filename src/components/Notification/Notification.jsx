import PropTypes from 'prop-types';
import style from './Notification.module.css';


export const Notification = ({message}) =>{
    return(
        <div className={style.notificationContainer}>
            <h3 className={style.message}>{message}</h3>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string
}