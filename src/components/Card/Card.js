import styles from "./Card.module.scss";

function Card(props) {
  const classes = `${styles.container}${
    props.classes ? ` ${props.classes}` : ""
  }`;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
