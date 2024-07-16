import React from "react";
import styles from "./dashboard.module.css";

import Search from "../../components/Dashboard/Search/index";
import Result from "../../components/Dashboard/Result/index";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { useEffect } from "react";
import axios from "axios";
import { dashboardActions } from "../../store/dashboard"
import { Toaster } from 'react-hot-toast';

import Navbar from "@components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <div className={styles["dashboard-container"]} >
      <Navbar />
      <div className={styles["content-container"]}>
          <div className={styles["search-container"]}> <Search /></div>
          <div className={styles["result-container"]}> <Result /></div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Dashboard;
