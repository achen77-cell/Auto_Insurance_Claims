import React from "react";
import Grid from "@mui/material/Grid";
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  return (<Layout>
    <Seo title="Fraudulent Claim"/>
    <Grid container="container" spacing={0} direction="column" alignItems="center" justifyContent="center" style={{
        minHeight: '70vh'
      }}>
      <Grid item="item" xs={3}>
        <h1 style={{textAlign: 'center'}}>Fraudulent Claim 🕵️‍♀️</h1>
        <h3 style={{textAlign: 'center'}}>Our model has predicted that the claim is fraudulent</h3>
      </Grid>
    </Grid>
  </Layout>)
}

export default IndexPage
