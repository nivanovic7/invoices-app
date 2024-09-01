import Button from "./Button";
import styles from "./ItemList.module.css";
import TextInput from "./TextInput";

function ItemList() {
  return (
    <>
      <div className={styles.itemList}>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span className="hidden"></span>
        <TextInput name="x" />
        <TextInput name="q" />
        <TextInput name="t" />
        <span>156</span>
        <span>
          <svg width="25px" height="25px" viewBox="0 0 24 24">
            <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
          </svg>
        </span>
      </div>

      <Button colorClass="btnSecondary" text="+ Add new item" />
    </>
  );
}

export default ItemList;
