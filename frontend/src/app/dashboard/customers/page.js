'use client'

import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import CustomerCard from "../CustomerCard";

import apiURL from "../../../../APIurl";
const baseURL = apiURL + "/customer/";

export default function CustomerTable() {
  const [customers, getCustomers] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      getCustomers(response.data);
    });
  }, []);

  return (
    <div className="container max-w-6xl px-10 my-20">
      <Grid container spacing={2}>
        {customers &&
          customers.map((customer) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={customer}>
              <CustomerCard content={customer} />
            </Grid>
          ))}
        {!customers && (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <CircularProgress color="success" />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
