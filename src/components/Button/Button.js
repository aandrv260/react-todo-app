import styles from "./Button.module.scss";

function Button(props) {
  return <button className={`${styles.button}`} type="submit" />;
}

export default Button;
