import styles from '../../styles/Week.module.css';

function WeekInfo(props) {
    return (
      <div>
        <label className={styles.weekDayInfo}>
            {props.weekTemp}°C
        </label>
      </div>
    );
  }

export { WeekInfo };
