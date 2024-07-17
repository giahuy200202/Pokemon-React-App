import React from "react";
import styles from "./dashboard.module.css";

import Search from "../../components/Dashboard/Search/index";
import Result from "../../components/Dashboard/Result/index";

const Dashboard: React.FC = () => {
  return (
    <div className={styles["dashboard-container"]} >
      <div className={styles["content-container"]}>
        <div className={styles["search-container"]}> <Search /></div>
        <div className={styles["result-container"]}> <Result /></div>
      </div>
    </div>
  );
};

export default Dashboard;
