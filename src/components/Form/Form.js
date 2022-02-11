import styles from "./Form.module.scss";

import Button from "../Button/Button";

function Form(props) {
  return (
    <form className={`${styles["form"]}`}>
      <label className={`${styles["form__label"]}`}>Username</label>
      <input className={`${styles["form__input"]}`} type="text" />
      <label className={`${styles["form__label"]}`}>Age (Years)</label>
      <input className={`${styles["form__input"]}`} type="text" />

      <Button />
    </form>
  );
}

export default Form;
