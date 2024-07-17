import React from "react";
import styles from "./details.module.css";
import DetailsComponent from "../../components/Details";
import { useAppSelector } from "../../hooks/ReduxHooks";

const Details: React.FC = () => {
  const themeIsDark = useAppSelector((state) => state.dashboard.themeIsDark);

  return (
    <div className={styles["details-container"]} style={{ borderColor: themeIsDark ? '#495057' : '', }}>
        <DetailsComponent />
    </div>
  );
};

export default Details;
