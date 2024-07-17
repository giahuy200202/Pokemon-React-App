import React from "react";
import styles from "./details.module.css";
import DetailsComponent from "../../components/Details";

const Details: React.FC = () => {
  return (
    <div className={styles["details-container"]} >
        <DetailsComponent />
    </div>
  );
};

export default Details;
