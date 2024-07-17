import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./layout.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { ReactComponent as Sun } from '../assets/svg/sun.svg';
import { ReactComponent as Moon } from '../assets/svg/moon.svg';
import { dashboardActions } from "../store/dashboard";

const BaseLayout: React.FC = () => {
  const themeIsDark = useAppSelector((state) => state.dashboard.themeIsDark);
  const dispatch = useAppDispatch();
  
  const changeThemeHandler = () => {
    dispatch(dashboardActions.updateTheme(!themeIsDark));
  }
  return (
    <div className={styles["base-layout-container"]} style={{ background: themeIsDark ? '#212529' : '', color: themeIsDark ? '#adb5bd' : ''}}>
      <Navbar />
      <Outlet />
      <div onClick={changeThemeHandler}className={styles["change-theme-container"]}>
        {!themeIsDark ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};

export default BaseLayout;
