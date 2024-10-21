import React from "react";
import styles from "../styles/ItemCard.module.css";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";
//or
import { useValue } from "../itemContext";

function ItemCard({ id, name, price }) {
  // const value = useContext(itemContext);
  //const totalValue = useContext(totalContext);
  // const { item, setItem, total, setTotal } = useValue();
  //or
  const { handleAdd, handleRemove } = useValue();
  // const { total, setTotal,  } = totalValue; //destructure

  // const handleAdd = () => {
  //   setTotal(total + price);
  //   setItem(item + 1);
  // };

  // /*const handleRemove = () => {
  //   setTotal(total - price);
  // };*/
  // const handleRemove = () => {
  //   if (total <= 0) {
  //     return;
  //   }
  //   setTotal((prevState) => prevState - price);

  //   setItem(item - 1);
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;