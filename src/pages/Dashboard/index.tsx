import React from "react";
import styles from "./dashboard.module.css";

import Search from "../../components/Dashboard/Search/index";
import Result from "../../components/Dashboard/Result/index";
import { Toaster } from 'react-hot-toast';

const Dashboard: React.FC = () => {
  return (
    <div className={styles["dashboard-container"]} >
      <div className={styles["content-container"]}>
          <div className={styles["search-container"]}> <Search /></div>
          <div className={styles["result-container"]}> <Result /></div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Dashboard;
