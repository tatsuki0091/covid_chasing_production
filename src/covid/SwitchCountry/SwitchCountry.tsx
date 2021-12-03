import React from "react";
import { makeStyles } from "@material-ui/core";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyle = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    maxWidth: 320,
  },
}));

const SwitchCountry = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const countries = [
    "japan",
    "china",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ];
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(fetchAsyncGetDaily(e.target.value));
        }}
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
