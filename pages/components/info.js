import styles from '../../styles/Info.module.css';

function CurrentInfo(props) {
  return (
    <div>
      <label className={styles.currentFont}>{props.current}</label>
    </div>
  );
}

export { CurrentInfo };
