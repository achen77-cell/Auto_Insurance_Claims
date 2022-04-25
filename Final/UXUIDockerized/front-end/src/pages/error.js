import React from "react";
import Grid from "@mui/material/Grid";
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

  return (<Layout>
    <Seo title="Error"/>
    <Grid container="container" spacing={0} direction="column" alignItems="center" justifyContent="center" style={{
        minHeight: '70vh'
      }}>
      <Grid item="item" xs={3}>
        <h1 style={{textAlign: 'center'}}>There seems to be an error</h1>
        <h3 style={{textAlign: 'center'}}>Try double-checking the inputs and submitting again</h3>
      </Grid>
    </Grid>
  </Layout>)
}

export default IndexPage
