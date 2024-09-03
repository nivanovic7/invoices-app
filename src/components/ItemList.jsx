import { FieldArray, useFormikContext } from "formik";
import Button from "./Button";
import styles from "./ItemList.module.css";
import TextInput from "./TextInput";
import { Fragment } from "react";

function ItemList() {
  const { values } = useFormikContext();

  return (
    <>
      <div className={styles.itemList}>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span className="hidden"></span>
        <FieldArray name="items">
          {({ push, remove }) => {
            return (
              <>
                {values.items?.map((item, index) => (
                  <Fragment key={index}>
                    <TextInput name={`items.${index}.itemName`} />
                    <TextInput type="number" name={`items.${index}.quantity`} />
                    <TextInput type="number" name={`items.${index}.price`} />
                    <span className={styles.total}>
                      {item.quantity && item.price
                        ? item.quantity * item.price
                        : ""}
                    </span>
                    <span
                      className={styles.delete}
                      onClick={() => remove(index)}
                    >
                      <svg width="25px" height="25px" viewBox="0 0 24 24">
                        <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                      </svg>
                    </span>
                  </Fragment>
                ))}
                <Button
                  handleClick={() =>
                    push({ itemName: "", quantity: "", price: "" })
                  }
                  colorClass="btnSecondary"
                  text="+ Add new item"
                />
              </>
            );
          }}
        </FieldArray>
      </div>
    </>
  );
}

export default ItemList;
