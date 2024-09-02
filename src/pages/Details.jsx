import { Link } from "react-router-dom";
import Button from "../components/Button";
import Row from "../components/Row";
import Status from "../components/Status";
import styles from "./Details.module.css";
import Arrow from "../components/Arrow";
import InvoiceDetails from "../components/InvoiceDetails";
import Modal from "../components/Modal";
import BillingForm from "../components/BillingForm";
import { useState } from "react";

function Details({ onModalToggle, isModalOpen }) {
  return (
    <div className={`${styles.details} container`}>
      <Link to="/">
        <Arrow direction="left" /> Go back
      </Link>

      <Row>
        <div>
          <span>Status </span>
          <Status status="penDinG" />
        </div>

        <div className={styles.buttonsWrap}>
          <Button
            handleClick={onModalToggle}
            text="Edit"
            colorClass="btnNeutral"
          />
          <Button text="Delete" colorClass="btnRed" />
          <Button text="Mark as Paid" colorClass="btnBlue" />
        </div>
      </Row>
      <InvoiceDetails />

      {isModalOpen && (
        <Modal>
          <BillingForm />
        </Modal>
      )}
    </div>
  );
}

export default Details;
