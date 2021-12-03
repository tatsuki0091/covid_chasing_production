import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import styles from "./DashBoard.module.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectDaily, fetchAsyncGetDaily } from "../covidSlice";
import Cards from "../Cards/Cards";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Charts from "../Charts/Charts";
import PieChart from "../PieChart/PieChart";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));
const DashBoard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);
  console.log(daily);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashboard
          </Typography>
          <Typography variant="body1">
            {new Date(daily[daily.length - 1].Date).toDateString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Charts />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashBoard;
