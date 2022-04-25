import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Layout from "../components/layout"
import Seo from "../components/seo"
import confetti from "canvas-confetti"

const IndexPage = () => {

  function celebrate() {
    var count = 200;
    var defaults = {
      origin: {
        y: 0.7
      }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55
    });
    fire(0.2, {spread: 60});
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }

  useEffect(() => {
    celebrate()
  });

  return (<Layout>
    <Seo title="Genuine Claim"/>
    <Grid container="container" spacing={0} direction="column" alignItems="center" justifyContent="center" style={{
        minHeight: '70vh'
      }}>
      <Grid item="item" xs={3}>
        <h1 style={{
            textAlign: 'center'
          }}>Genuine Claim 🎉</h1>
        <h3 style={{
            textAlign: 'center'
          }}>Our model has predicted that the claim is genuine</h3>
      </Grid>
    </Grid>
  </Layout>)
}

export default IndexPage
