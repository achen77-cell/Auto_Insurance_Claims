import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import Layout from "../components/layout"
import Seo from "../components/seo"
import {navigate} from "gatsby"

function callAPI(claimData) {
  fetch('http://localhost:4000/ClaimPredict/', {
    method: "POST",
    body: JSON.stringify(claimData),
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(function(json) {
      if (json.result == "Genuine") {
        console.log(json)
        navigate("/genuine")
      } else if (json.result == "Fraudulent") {
        console.log(json)
        navigate("/fraudulent")
      } else {
        navigate("/error")
      }
    })
    .catch(err => console.log(err))
  }

const Form = () => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(formValues)
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (<form onSubmit={handleSubmit}>
    <Grid container="container" alignItems="flex-start" justify="center" direction="column">

      <h4>Enter data below to predict if a claim is fraudulent</h4>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month of Accident</FormLabel>
          <RadioGroup name="MonthOfAccident" value={formValues.MonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month of Accident</FormLabel>
          <RadioGroup name="WeekOfMonthOfAccident" value={formValues.WeekOfMonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week of Accident</FormLabel>
          <RadioGroup name="DayOfWeekOfAccident" value={formValues.DayOfWeekOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Make</FormLabel>
          <RadioGroup name="Make" value={formValues.Make} onChange={handleInputChange} row="row">
            <FormControlLabel key="Acura" value="Acura" control={<Radio size = "small" />} label="Acura"/>
            <FormControlLabel key="BMW" value="BMW" control={<Radio size = "small" />} label="BMW"/>
            <FormControlLabel key="Chevrolet" value="Chevrolet" control={<Radio size = "small" />} label="Chevrolet"/>
            <FormControlLabel key="Dodge" value="Dodge" control={<Radio size = "small" />} label="Dodge"/>
            <FormControlLabel key="Ferrari" value="Ferrari" control={<Radio size = "small" />} label="Ferrari"/>
            <FormControlLabel key="Ford" value="Ford" control={<Radio size = "small" />} label="Ford"/>
            <FormControlLabel key="Honda" value="Honda" control={<Radio size = "small" />} label="Honda"/>
            <FormControlLabel key="Jaguar" value="Jaguar" control={<Radio size = "small" />} label="Jaguar"/>
            <FormControlLabel key="Lexus" value="Lexus" control={<Radio size = "small" />} label="Lexus"/>
            <FormControlLabel key="Mazda" value="Mazda" control={<Radio size = "small" />} label="Mazda"/>
            <FormControlLabel key="Mercedes" value="Mercedes" control={<Radio size = "small" />} label="Mercedes"/>
            <FormControlLabel key="Mercury" value="Mercury" control={<Radio size = "small" />} label="Mercury"/>
            <FormControlLabel key="Nisson" value="Nisson" control={<Radio size = "small" />} label="Nisson"/>
            <FormControlLabel key="Pontiac" value="Pontiac" control={<Radio size = "small" />} label="Pontiac"/>
            <FormControlLabel key="Porche" value="Porche" control={<Radio size = "small" />} label="Porche"/>
            <FormControlLabel key="Saab" value="Saab" control={<Radio size = "small" />} label="Saab"/>
            <FormControlLabel key="Saturn" value="Saturn" control={<Radio size = "small" />} label="Saturn"/>
            <FormControlLabel key="Toyota" value="Toyota" control={<Radio size = "small" />} label="Toyota"/>
            <FormControlLabel key="VW" value="VW" control={<Radio size = "small" />} label="VW"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Accident Area</FormLabel>
          <RadioGroup name="AccidentArea" value={formValues.AccidentArea} onChange={handleInputChange} row="row">
            <FormControlLabel key="Rural" value="Rural" control={<Radio size = "small" />} label="Rural"/>
            <FormControlLabel key="Urban" value="Urban" control={<Radio size = "small" />} label="Urban"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week Claimed</FormLabel>
          <RadioGroup name="DayOfWeekClaimed" value={formValues.DayOfWeekClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month Claimed</FormLabel>
          <RadioGroup name="MonthClaimed" value={formValues.MonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month Claimed</FormLabel>
          <RadioGroup name="WeekOfMonthClaimed" value={formValues.WeekOfMonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <RadioGroup name="Sex" value={formValues.Sex} onChange={handleInputChange} row="row">
            <FormControlLabel key="Male" value="Male" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Female" value="Female" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Policy Holder</FormLabel>
          <TextField id="AgeOfPolicyHolder-input" name="AgeOfPolicyHolder" type="number" value={formValues.AgeOfPolicyHolder} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fault</FormLabel>
          <RadioGroup name="Fault" value={formValues.Fault} onChange={handleInputChange} row="row">
            <FormControlLabel key="Policy Holder" value="Policy Holder" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Third Party" value="Third Party" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Type</FormLabel>
          <RadioGroup name="PolicyType" value={formValues.PolicyType} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan - All Perils" value="Sedan - All Perils" control={<Radio size = "small" />} label="Sedan - All Perils"/>
            <FormControlLabel key="Sedan - Liability" value="Sedan - Liability" control={<Radio size = "small" />} label="Sedan - Liability"/>
            <FormControlLabel key="Sedan - Collision" value="Sedan - Collision" control={<Radio size = "small" />} label="Sedan - Collision"/>
            <FormControlLabel key="Sport - All Perils" value="Sport - All Perils" control={<Radio size = "small" />} label="Sport - All Perils"/>
            <FormControlLabel key="Sport - Liability" value="Sport - Liability" control={<Radio size = "small" />} label="Sport - Liability"/>
            <FormControlLabel key="Sport - Collision" value="Sport - Collision" control={<Radio size = "small" />} label="Sport - Collision"/>
            <FormControlLabel key="Utility - All Perils" value="Utility - All Perils" control={<Radio size = "small" />} label="Utility - All Perils"/>
            <FormControlLabel key="Utility - Liability" value="Utility - Liability" control={<Radio size = "small" />} label="Utility - Liability"/>
            <FormControlLabel key="Utility - Collision" value="Utility - Collision" control={<Radio size = "small" />} label="Utility - Collision"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>VehicleCategory</FormLabel>
          <RadioGroup name="VehicleCategory" value={formValues.VehicleCategory} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan" value="Sedan" control={<Radio size = "small" />} label="Sedan"/>
            <FormControlLabel key="Sport" value="Sport" control={<Radio size = "small" />} label="Sport"/>
            <FormControlLabel key="Utility" value="Utility" control={<Radio size = "small" />} label="Utility"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Vehicle Price Range</FormLabel>
          <RadioGroup name="VehiclePriceRange" value={formValues.VehiclePriceRange} onChange={handleInputChange} row="row">
            <FormControlLabel key="less than 20000" value="less than 20000" control={<Radio size = "small" />} label="less than 20000"/>
            <FormControlLabel key="20000 to 29000" value="20000 to 29000" control={<Radio size = "small" />} label="20000 to 29000"/>
            <FormControlLabel key="30000 to 39000" value="30000 to 39000" control={<Radio size = "small" />} label="30000 to 39000"/>
            <FormControlLabel key="40000 to 59000" value="40000 to 59000" control={<Radio size = "small" />} label="40000 to 59000"/>
            <FormControlLabel key="60000 to 69000" value="60000 to 69000" control={<Radio size = "small" />} label="60000 to 69000"/>
            <FormControlLabel key="more than 69000" value="more than 69000" control={<Radio size = "small" />} label="more than 69000"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fraud Found Previously</FormLabel>
          <RadioGroup name="FraudFound_P" value={formValues.FraudFound_P} onChange={handleInputChange} row="row">
            <FormControlLabel key="0" value="0" control={<Radio size = "small" />} label="0"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Number</FormLabel>
          <TextField id="PolicyNumber-input" name="PolicyNumber" type="number" value={formValues.PolicyNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Rep Number</FormLabel>
          <TextField id="RepNumber-input" name="RepNumber" type="number" value={formValues.RepNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Deductible</FormLabel>
          <RadioGroup name="Deductible" value={formValues.Deductible} onChange={handleInputChange} row="row">
            <FormControlLabel key="300" value="300" control={<Radio size = "small" />} label="300"/>
            <FormControlLabel key="400" value="400" control={<Radio size = "small" />} label="400"/>
            <FormControlLabel key="500" value="500" control={<Radio size = "small" />} label="500"/>
            <FormControlLabel key="700" value="700" control={<Radio size = "small" />} label="700"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>DriverRating</FormLabel>
          <RadioGroup name="DriverRating" value={formValues.DriverRating} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Accident</FormLabel>
          <RadioGroup name="Days_Policy_Accident" value={formValues.Days_Policy_Accident} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Claim</FormLabel>
          <RadioGroup name="Days_Policy_Claim" value={formValues.Days_Policy_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Past Number of Claims</FormLabel>
          <RadioGroup name="PastNumberOfClaims" value={formValues.PastNumberOfClaims} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2 to 4" value="2 to 4" control={<Radio size = "small" />} label="2 to 4"/>
            <FormControlLabel key="more than 4" value="more than 4" control={<Radio size = "small" />} label="more than 4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Vehicle</FormLabel>
          <RadioGroup name="AgeOfVehicle" value={formValues.AgeOfVehicle} onChange={handleInputChange} row="row">
            <FormControlLabel key="New" value="New" control={<Radio size = "small" />} label="New"/>
            <FormControlLabel key="2 years" value="2 years" control={<Radio size = "small" />} label="2 years"/>
            <FormControlLabel key="3 years" value="3 years" control={<Radio size = "small" />} label="3 years"/>
            <FormControlLabel key="4 years" value="4 years" control={<Radio size = "small" />} label="4 years"/>
            <FormControlLabel key="5 years" value="5 years" control={<Radio size = "small" />} label="5 years"/>
            <FormControlLabel key="6 years" value="6 years" control={<Radio size = "small" />} label="6 years"/>
            <FormControlLabel key="7 years" value="7 years" control={<Radio size = "small" />} label="7 years"/>
            <FormControlLabel key="More than 7" value="More than 7" control={<Radio size = "small" />} label="More than 7"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age Range of Policy Holder</FormLabel>
          <RadioGroup name="AgeRangeOfPolicyHolder" value={formValues.AgeRangeOfPolicyHolder} onChange={handleInputChange} row="row">
            <FormControlLabel key="16 to 17" value="16 to 17" control={<Radio size = "small" />} label="16 to 17"/>
            <FormControlLabel key="18 to 20" value="18 to 20" control={<Radio size = "small" />} label="18 to 20"/>
            <FormControlLabel key="21 to 25" value="21 to 25" control={<Radio size = "small" />} label="21 to 25"/>
            <FormControlLabel key="26 to 30" value="26 to 30" control={<Radio size = "small" />} label="26 to 30"/>
            <FormControlLabel key="31 to 35" value="31 to 35" control={<Radio size = "small" />} label="31 to 35"/>
            <FormControlLabel key="36 to 40" value="36 to 40" control={<Radio size = "small" />} label="36 to 40"/>
            <FormControlLabel key="41 to 50" value="41 to 50" control={<Radio size = "small" />} label="41 to 50"/>
            <FormControlLabel key="51 to 65" value="51 to 65" control={<Radio size = "small" />} label="51 to 65"/>
            <FormControlLabel key="over 65" value="over 65" control={<Radio size = "small" />} label="over 65"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Police Report Filed</FormLabel>
          <RadioGroup name="PoliceReportFiled" value={formValues.PoliceReportFiled} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Witness Present</FormLabel>
          <RadioGroup name="WitnessPresent" value={formValues.WitnessPresent} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Supplements</FormLabel>
          <RadioGroup name="NumberOfSuppliments" value={formValues.NumberOfSuppliments} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 2" value="1 to 2" control={<Radio size = "small" />} label="1 to 2"/>
            <FormControlLabel key="3 to 5" value="3 to 5" control={<Radio size = "small" />} label="3 to 5"/>
            <FormControlLabel key="more than 5" value="more than 5" control={<Radio size = "small" />} label="more than 5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Address Change Claim</FormLabel>
          <RadioGroup name="AddressChange_Claim" value={formValues.AddressChange_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="no change" value="no change" control={<Radio size = "small" />} label="no change"/>
            <FormControlLabel key="under 6 months" value="under 6 months" control={<Radio size = "small" />} label="under 6 months"/>
            <FormControlLabel key="1 year" value="1 year" control={<Radio size = "small" />} label="1 year"/>
            <FormControlLabel key="2 to 3 years" value="2 to 3 years" control={<Radio size = "small" />} label="2 to 3 years"/>
            <FormControlLabel key="4 to 8 years" value="4 to 8 years" control={<Radio size = "small" />} label="4 to 8 years"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Cars</FormLabel>
          <RadioGroup name="NumberOfCars" value={formValues.NumberOfCars} onChange={handleInputChange} row="row">
            <FormControlLabel key="1 vehicle" value="1 vehicle" control={<Radio size = "small" />} label="1 vehicle"/>
            <FormControlLabel key="2 vehicles" value="2 vehicles" control={<Radio size = "small" />} label="2 vehicles"/>
            <FormControlLabel key="3 to 4" value="3 to 4" control={<Radio size = "small" />} label="3 to 4"/>
            <FormControlLabel key="5 to 8" value="5 to 8" control={<Radio size = "small" />} label="5 to 8"/>
            <FormControlLabel key="more than 8" value="more than 8" control={<Radio size = "small" />} label="more than 8"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <RadioGroup name="Year" value={formValues.Year} onChange={handleInputChange} row="row">
            <FormControlLabel key="1994" value="1994" control={<Radio size = "small" />} label="1994"/>
            <FormControlLabel key="1995" value="1995" control={<Radio size = "small" />} label="1995"/>
            <FormControlLabel key="1996" value="1996" control={<Radio size = "small" />} label="1996"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Base Policy</FormLabel>
          <RadioGroup name="BasePolicy" value={formValues.BasePolicy} onChange={handleInputChange} row="row">
            <FormControlLabel key="All Perils" value="All Perils" control={<Radio size = "small" />} label="All Perils"/>
            <FormControlLabel key="Collision" value="Collision" control={<Radio size = "small" />} label="Collision"/>
            <FormControlLabel key="Liability" value="Liability" control={<Radio size = "small" />} label="Liability"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Button variant="contained" color="primary" type="submit" style={{
          margin: '20px'
        }}>
        Get Prediction Result
      </Button>

    </Grid>
  </form>);
};

const GenuineForm = () => {
  const [formValues, setFormValues] = useState({
    "MonthOfAccident": "Feb",
    "WeekOfMonthOfAccident": 3,
    "DayOfWeekOfAccident": "Monday",
    "Make": "Toyota",
    "AccidentArea": "Rural",
    "DayOfWeekClaimed": "Tuesday",
    "MonthClaimed": "Feb",
    "WeekOfMonthClaimed": 3,
    "Sex": "Male",
    "MaritalStatus": "Married",
    "AgeOfPolicyHolder": 32,
    "Fault": "Third Party",
    "PolicyType": "Sedan - All Perils",
    "VehicleCategory": "Sedan",
    "VehiclePriceRange": "less than 20000",
    "FraudFound_P": 0,
    "PolicyNumber": 3715,
    "RepNumber": 10,
    "Deductible": 400,
    "DriverRating": 2,
    "Days_Policy_Accident": "more than 30",
    "Days_Policy_Claim": "more than 30",
    "PastNumberOfClaims": "2 to 4",
    "AgeOfVehicle": "6 years",
    "AgeRangeOfPolicyHolder": "31 to 35",
    "PoliceReportFiled": "No",
    "WitnessPresent": "No",
    "AgentType": "External",
    "NumberOfSuppliments": "1 to 2",
    "AddressChange_Claim": "no change",
    "NumberOfCars": "1 vehicle",
    "Year": 1994,
    "BasePolicy": "All Perils"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(formValues)
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (<form onSubmit={handleSubmit}>
    <Grid container="container" alignItems="flex-start" justify="center" direction="column">

      <h4>Enter data below to predict if a claim is fraudulent</h4>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month of Accident</FormLabel>
          <RadioGroup name="MonthOfAccident" value={formValues.MonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month of Accident</FormLabel>
          <RadioGroup name="WeekOfMonthOfAccident" value={formValues.WeekOfMonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week of Accident</FormLabel>
          <RadioGroup name="DayOfWeekOfAccident" value={formValues.DayOfWeekOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Make</FormLabel>
          <RadioGroup name="Make" value={formValues.Make} onChange={handleInputChange} row="row">
            <FormControlLabel key="Acura" value="Acura" control={<Radio size = "small" />} label="Acura"/>
            <FormControlLabel key="BMW" value="BMW" control={<Radio size = "small" />} label="BMW"/>
            <FormControlLabel key="Chevrolet" value="Chevrolet" control={<Radio size = "small" />} label="Chevrolet"/>
            <FormControlLabel key="Dodge" value="Dodge" control={<Radio size = "small" />} label="Dodge"/>
            <FormControlLabel key="Ferrari" value="Ferrari" control={<Radio size = "small" />} label="Ferrari"/>
            <FormControlLabel key="Ford" value="Ford" control={<Radio size = "small" />} label="Ford"/>
            <FormControlLabel key="Honda" value="Honda" control={<Radio size = "small" />} label="Honda"/>
            <FormControlLabel key="Jaguar" value="Jaguar" control={<Radio size = "small" />} label="Jaguar"/>
            <FormControlLabel key="Lexus" value="Lexus" control={<Radio size = "small" />} label="Lexus"/>
            <FormControlLabel key="Mazda" value="Mazda" control={<Radio size = "small" />} label="Mazda"/>
            <FormControlLabel key="Mercedes" value="Mercedes" control={<Radio size = "small" />} label="Mercedes"/>
            <FormControlLabel key="Mercury" value="Mercury" control={<Radio size = "small" />} label="Mercury"/>
            <FormControlLabel key="Nisson" value="Nisson" control={<Radio size = "small" />} label="Nisson"/>
            <FormControlLabel key="Pontiac" value="Pontiac" control={<Radio size = "small" />} label="Pontiac"/>
            <FormControlLabel key="Porche" value="Porche" control={<Radio size = "small" />} label="Porche"/>
            <FormControlLabel key="Saab" value="Saab" control={<Radio size = "small" />} label="Saab"/>
            <FormControlLabel key="Saturn" value="Saturn" control={<Radio size = "small" />} label="Saturn"/>
            <FormControlLabel key="Toyota" value="Toyota" control={<Radio size = "small" />} label="Toyota"/>
            <FormControlLabel key="VW" value="VW" control={<Radio size = "small" />} label="VW"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Accident Area</FormLabel>
          <RadioGroup name="AccidentArea" value={formValues.AccidentArea} onChange={handleInputChange} row="row">
            <FormControlLabel key="Rural" value="Rural" control={<Radio size = "small" />} label="Rural"/>
            <FormControlLabel key="Urban" value="Urban" control={<Radio size = "small" />} label="Urban"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week Claimed</FormLabel>
          <RadioGroup name="DayOfWeekClaimed" value={formValues.DayOfWeekClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month Claimed</FormLabel>
          <RadioGroup name="MonthClaimed" value={formValues.MonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month Claimed</FormLabel>
          <RadioGroup name="WeekOfMonthClaimed" value={formValues.WeekOfMonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <RadioGroup name="Sex" value={formValues.Sex} onChange={handleInputChange} row="row">
            <FormControlLabel key="Male" value="Male" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Female" value="Female" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Policy Holder</FormLabel>
          <TextField id="AgeOfPolicyHolder-input" name="AgeOfPolicyHolder" type="number" value={formValues.AgeOfPolicyHolder} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fault</FormLabel>
          <RadioGroup name="Fault" value={formValues.Fault} onChange={handleInputChange} row="row">
            <FormControlLabel key="Policy Holder" value="Policy Holder" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Third Party" value="Third Party" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Type</FormLabel>
          <RadioGroup name="PolicyType" value={formValues.PolicyType} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan - All Perils" value="Sedan - All Perils" control={<Radio size = "small" />} label="Sedan - All Perils"/>
            <FormControlLabel key="Sedan - Liability" value="Sedan - Liability" control={<Radio size = "small" />} label="Sedan - Liability"/>
            <FormControlLabel key="Sedan - Collision" value="Sedan - Collision" control={<Radio size = "small" />} label="Sedan - Collision"/>
            <FormControlLabel key="Sport - All Perils" value="Sport - All Perils" control={<Radio size = "small" />} label="Sport - All Perils"/>
            <FormControlLabel key="Sport - Liability" value="Sport - Liability" control={<Radio size = "small" />} label="Sport - Liability"/>
            <FormControlLabel key="Sport - Collision" value="Sport - Collision" control={<Radio size = "small" />} label="Sport - Collision"/>
            <FormControlLabel key="Utility - All Perils" value="Utility - All Perils" control={<Radio size = "small" />} label="Utility - All Perils"/>
            <FormControlLabel key="Utility - Liability" value="Utility - Liability" control={<Radio size = "small" />} label="Utility - Liability"/>
            <FormControlLabel key="Utility - Collision" value="Utility - Collision" control={<Radio size = "small" />} label="Utility - Collision"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>VehicleCategory</FormLabel>
          <RadioGroup name="VehicleCategory" value={formValues.VehicleCategory} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan" value="Sedan" control={<Radio size = "small" />} label="Sedan"/>
            <FormControlLabel key="Sport" value="Sport" control={<Radio size = "small" />} label="Sport"/>
            <FormControlLabel key="Utility" value="Utility" control={<Radio size = "small" />} label="Utility"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Vehicle Price Range</FormLabel>
          <RadioGroup name="VehiclePriceRange" value={formValues.VehiclePriceRange} onChange={handleInputChange} row="row">
            <FormControlLabel key="less than 20000" value="less than 20000" control={<Radio size = "small" />} label="less than 20000"/>
            <FormControlLabel key="20000 to 29000" value="20000 to 29000" control={<Radio size = "small" />} label="20000 to 29000"/>
            <FormControlLabel key="30000 to 39000" value="30000 to 39000" control={<Radio size = "small" />} label="30000 to 39000"/>
            <FormControlLabel key="40000 to 59000" value="40000 to 59000" control={<Radio size = "small" />} label="40000 to 59000"/>
            <FormControlLabel key="60000 to 69000" value="60000 to 69000" control={<Radio size = "small" />} label="60000 to 69000"/>
            <FormControlLabel key="more than 69000" value="more than 69000" control={<Radio size = "small" />} label="more than 69000"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fraud Found Previously</FormLabel>
          <RadioGroup name="FraudFound_P" value={formValues.FraudFound_P} onChange={handleInputChange} row="row">
            <FormControlLabel key="0" value="0" control={<Radio size = "small" />} label="0"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Number</FormLabel>
          <TextField id="PolicyNumber-input" name="PolicyNumber" type="number" value={formValues.PolicyNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Rep Number</FormLabel>
          <TextField id="RepNumber-input" name="RepNumber" type="number" value={formValues.RepNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Deductible</FormLabel>
          <RadioGroup name="Deductible" value={formValues.Deductible} onChange={handleInputChange} row="row">
            <FormControlLabel key="300" value="300" control={<Radio size = "small" />} label="300"/>
            <FormControlLabel key="400" value="400" control={<Radio size = "small" />} label="400"/>
            <FormControlLabel key="500" value="500" control={<Radio size = "small" />} label="500"/>
            <FormControlLabel key="700" value="700" control={<Radio size = "small" />} label="700"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>DriverRating</FormLabel>
          <RadioGroup name="DriverRating" value={formValues.DriverRating} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Accident</FormLabel>
          <RadioGroup name="Days_Policy_Accident" value={formValues.Days_Policy_Accident} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Claim</FormLabel>
          <RadioGroup name="Days_Policy_Claim" value={formValues.Days_Policy_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Past Number of Claims</FormLabel>
          <RadioGroup name="PastNumberOfClaims" value={formValues.PastNumberOfClaims} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2 to 4" value="2 to 4" control={<Radio size = "small" />} label="2 to 4"/>
            <FormControlLabel key="more than 4" value="more than 4" control={<Radio size = "small" />} label="more than 4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Vehicle</FormLabel>
          <RadioGroup name="AgeOfVehicle" value={formValues.AgeOfVehicle} onChange={handleInputChange} row="row">
            <FormControlLabel key="New" value="New" control={<Radio size = "small" />} label="New"/>
            <FormControlLabel key="2 years" value="2 years" control={<Radio size = "small" />} label="2 years"/>
            <FormControlLabel key="3 years" value="3 years" control={<Radio size = "small" />} label="3 years"/>
            <FormControlLabel key="4 years" value="4 years" control={<Radio size = "small" />} label="4 years"/>
            <FormControlLabel key="5 years" value="5 years" control={<Radio size = "small" />} label="5 years"/>
            <FormControlLabel key="6 years" value="6 years" control={<Radio size = "small" />} label="6 years"/>
            <FormControlLabel key="7 years" value="7 years" control={<Radio size = "small" />} label="7 years"/>
            <FormControlLabel key="More than 7" value="More than 7" control={<Radio size = "small" />} label="More than 7"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age Range of Policy Holder</FormLabel>
          <RadioGroup name="AgeRangeOfPolicyHolder" value={formValues.AgeRangeOfPolicyHolder} onChange={handleInputChange} row="row">
            <FormControlLabel key="16 to 17" value="16 to 17" control={<Radio size = "small" />} label="16 to 17"/>
            <FormControlLabel key="18 to 20" value="18 to 20" control={<Radio size = "small" />} label="18 to 20"/>
            <FormControlLabel key="21 to 25" value="21 to 25" control={<Radio size = "small" />} label="21 to 25"/>
            <FormControlLabel key="26 to 30" value="26 to 30" control={<Radio size = "small" />} label="26 to 30"/>
            <FormControlLabel key="31 to 35" value="31 to 35" control={<Radio size = "small" />} label="31 to 35"/>
            <FormControlLabel key="36 to 40" value="36 to 40" control={<Radio size = "small" />} label="36 to 40"/>
            <FormControlLabel key="41 to 50" value="41 to 50" control={<Radio size = "small" />} label="41 to 50"/>
            <FormControlLabel key="51 to 65" value="51 to 65" control={<Radio size = "small" />} label="51 to 65"/>
            <FormControlLabel key="over 65" value="over 65" control={<Radio size = "small" />} label="over 65"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Police Report Filed</FormLabel>
          <RadioGroup name="PoliceReportFiled" value={formValues.PoliceReportFiled} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Witness Present</FormLabel>
          <RadioGroup name="WitnessPresent" value={formValues.WitnessPresent} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Supplements</FormLabel>
          <RadioGroup name="NumberOfSuppliments" value={formValues.NumberOfSuppliments} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 2" value="1 to 2" control={<Radio size = "small" />} label="1 to 2"/>
            <FormControlLabel key="3 to 5" value="3 to 5" control={<Radio size = "small" />} label="3 to 5"/>
            <FormControlLabel key="more than 5" value="more than 5" control={<Radio size = "small" />} label="more than 5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Address Change Claim</FormLabel>
          <RadioGroup name="AddressChange_Claim" value={formValues.AddressChange_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="no change" value="no change" control={<Radio size = "small" />} label="no change"/>
            <FormControlLabel key="under 6 months" value="under 6 months" control={<Radio size = "small" />} label="under 6 months"/>
            <FormControlLabel key="1 year" value="1 year" control={<Radio size = "small" />} label="1 year"/>
            <FormControlLabel key="2 to 3 years" value="2 to 3 years" control={<Radio size = "small" />} label="2 to 3 years"/>
            <FormControlLabel key="4 to 8 years" value="4 to 8 years" control={<Radio size = "small" />} label="4 to 8 years"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Cars</FormLabel>
          <RadioGroup name="NumberOfCars" value={formValues.NumberOfCars} onChange={handleInputChange} row="row">
            <FormControlLabel key="1 vehicle" value="1 vehicle" control={<Radio size = "small" />} label="1 vehicle"/>
            <FormControlLabel key="2 vehicles" value="2 vehicles" control={<Radio size = "small" />} label="2 vehicles"/>
            <FormControlLabel key="3 to 4" value="3 to 4" control={<Radio size = "small" />} label="3 to 4"/>
            <FormControlLabel key="5 to 8" value="5 to 8" control={<Radio size = "small" />} label="5 to 8"/>
            <FormControlLabel key="more than 8" value="more than 8" control={<Radio size = "small" />} label="more than 8"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <RadioGroup name="Year" value={formValues.Year} onChange={handleInputChange} row="row">
            <FormControlLabel key="1994" value="1994" control={<Radio size = "small" />} label="1994"/>
            <FormControlLabel key="1995" value="1995" control={<Radio size = "small" />} label="1995"/>
            <FormControlLabel key="1996" value="1996" control={<Radio size = "small" />} label="1996"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Base Policy</FormLabel>
          <RadioGroup name="BasePolicy" value={formValues.BasePolicy} onChange={handleInputChange} row="row">
            <FormControlLabel key="All Perils" value="All Perils" control={<Radio size = "small" />} label="All Perils"/>
            <FormControlLabel key="Collision" value="Collision" control={<Radio size = "small" />} label="Collision"/>
            <FormControlLabel key="Liability" value="Liability" control={<Radio size = "small" />} label="Liability"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Button variant="contained" color="primary" type="submit" style={{
          margin: '20px'
        }}>
        Get Prediction Result
      </Button>

    </Grid>
  </form>);
};

const FraudulentForm = () => {
  const [formValues, setFormValues] = useState({
    "MonthOfAccident": "Dec",
    "WeekOfMonthOfAccident": 3,
    "DayOfWeekOfAccident": "Monday",
    "Make": "Toyota",
    "AccidentArea": "Rural",
    "DayOfWeekClaimed": "Tuesday",
    "MonthClaimed": "Feb",
    "WeekOfMonthClaimed": 3,
    "Sex": "Male",
    "MaritalStatus": "Married",
    "AgeOfPolicyHolder": 32,
    "Fault": "Third Party",
    "PolicyType": "Sedan - All Perils",
    "VehicleCategory": "Sedan",
    "VehiclePriceRange": "less than 20000",
    "FraudFound_P": 0,
    "PolicyNumber": 3715,
    "RepNumber": 10,
    "Deductible": 400,
    "DriverRating": 2,
    "Days_Policy_Accident": "more than 30",
    "Days_Policy_Claim": "more than 30",
    "PastNumberOfClaims": "2 to 4",
    "AgeOfVehicle": "6 years",
    "AgeRangeOfPolicyHolder": "31 to 35",
    "PoliceReportFiled": "No",
    "WitnessPresent": "No",
    "AgentType": "External",
    "NumberOfSuppliments": "1 to 2",
    "AddressChange_Claim": "no change",
    "NumberOfCars": "1 vehicle",
    "Year": 1994,
    "BasePolicy": "All Perils"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI(formValues)
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (<form onSubmit={handleSubmit}>
    <Grid container="container" alignItems="flex-start" justify="center" direction="column">

      <h4>Enter data below to predict if a claim is fraudulent</h4>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month of Accident</FormLabel>
          <RadioGroup name="MonthOfAccident" value={formValues.MonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month of Accident</FormLabel>
          <RadioGroup name="WeekOfMonthOfAccident" value={formValues.WeekOfMonthOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week of Accident</FormLabel>
          <RadioGroup name="DayOfWeekOfAccident" value={formValues.DayOfWeekOfAccident} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Make</FormLabel>
          <RadioGroup name="Make" value={formValues.Make} onChange={handleInputChange} row="row">
            <FormControlLabel key="Acura" value="Acura" control={<Radio size = "small" />} label="Acura"/>
            <FormControlLabel key="BMW" value="BMW" control={<Radio size = "small" />} label="BMW"/>
            <FormControlLabel key="Chevrolet" value="Chevrolet" control={<Radio size = "small" />} label="Chevrolet"/>
            <FormControlLabel key="Dodge" value="Dodge" control={<Radio size = "small" />} label="Dodge"/>
            <FormControlLabel key="Ferrari" value="Ferrari" control={<Radio size = "small" />} label="Ferrari"/>
            <FormControlLabel key="Ford" value="Ford" control={<Radio size = "small" />} label="Ford"/>
            <FormControlLabel key="Honda" value="Honda" control={<Radio size = "small" />} label="Honda"/>
            <FormControlLabel key="Jaguar" value="Jaguar" control={<Radio size = "small" />} label="Jaguar"/>
            <FormControlLabel key="Lexus" value="Lexus" control={<Radio size = "small" />} label="Lexus"/>
            <FormControlLabel key="Mazda" value="Mazda" control={<Radio size = "small" />} label="Mazda"/>
            <FormControlLabel key="Mercedes" value="Mercedes" control={<Radio size = "small" />} label="Mercedes"/>
            <FormControlLabel key="Mercury" value="Mercury" control={<Radio size = "small" />} label="Mercury"/>
            <FormControlLabel key="Nisson" value="Nisson" control={<Radio size = "small" />} label="Nisson"/>
            <FormControlLabel key="Pontiac" value="Pontiac" control={<Radio size = "small" />} label="Pontiac"/>
            <FormControlLabel key="Porche" value="Porche" control={<Radio size = "small" />} label="Porche"/>
            <FormControlLabel key="Saab" value="Saab" control={<Radio size = "small" />} label="Saab"/>
            <FormControlLabel key="Saturn" value="Saturn" control={<Radio size = "small" />} label="Saturn"/>
            <FormControlLabel key="Toyota" value="Toyota" control={<Radio size = "small" />} label="Toyota"/>
            <FormControlLabel key="VW" value="VW" control={<Radio size = "small" />} label="VW"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Accident Area</FormLabel>
          <RadioGroup name="AccidentArea" value={formValues.AccidentArea} onChange={handleInputChange} row="row">
            <FormControlLabel key="Rural" value="Rural" control={<Radio size = "small" />} label="Rural"/>
            <FormControlLabel key="Urban" value="Urban" control={<Radio size = "small" />} label="Urban"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Day of Week Claimed</FormLabel>
          <RadioGroup name="DayOfWeekClaimed" value={formValues.DayOfWeekClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Monday" value="Monday" control={<Radio size = "small" />} label="Monday"/>
            <FormControlLabel key="Tuesday" value="Tuesday" control={<Radio size = "small" />} label="Tuesday"/>
            <FormControlLabel key="Wednesday" value="Wednesday" control={<Radio size = "small" />} label="Wednesday"/>
            <FormControlLabel key="Thursday" value="Thursday" control={<Radio size = "small" />} label="Thursday"/>
            <FormControlLabel key="Friday" value="Friday" control={<Radio size = "small" />} label="Friday"/>
            <FormControlLabel key="Saturday" value="Saturday" control={<Radio size = "small" />} label="Saturday"/>
            <FormControlLabel key="Sunday" value="Sunday" control={<Radio size = "small" />} label="Sunday"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Month Claimed</FormLabel>
          <RadioGroup name="MonthClaimed" value={formValues.MonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="Jan" value="Jan" control={<Radio size = "small" />} label="Jan"/>
            <FormControlLabel key="Feb" value="Feb" control={<Radio size = "small" />} label="Feb"/>
            <FormControlLabel key="Mar" value="Mar" control={<Radio size = "small" />} label="Mar"/>
            <FormControlLabel key="Apr" value="Apr" control={<Radio size = "small" />} label="Apr"/>
            <FormControlLabel key="May" value="May" control={<Radio size = "small" />} label="May"/>
            <FormControlLabel key="Jun" value="Jun" control={<Radio size = "small" />} label="Jun"/>
            <FormControlLabel key="Jul" value="Jul" control={<Radio size = "small" />} label="Jul"/>
            <FormControlLabel key="Aug" value="Aug" control={<Radio size = "small" />} label="Aug"/>
            <FormControlLabel key="Sep" value="Sep" control={<Radio size = "small" />} label="Sep"/>
            <FormControlLabel key="Oct" value="Oct" control={<Radio size = "small" />} label="Oct"/>
            <FormControlLabel key="Nov" value="Nov" control={<Radio size = "small" />} label="Nov"/>
            <FormControlLabel key="Dec" value="Dec" control={<Radio size = "small" />} label="Dec"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Week of Month Claimed</FormLabel>
          <RadioGroup name="WeekOfMonthClaimed" value={formValues.WeekOfMonthClaimed} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
            <FormControlLabel key="5" value='5' control={<Radio size = "small" />} label="5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Sex</FormLabel>
          <RadioGroup name="Sex" value={formValues.Sex} onChange={handleInputChange} row="row">
            <FormControlLabel key="Male" value="Male" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Female" value="Female" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Policy Holder</FormLabel>
          <TextField id="AgeOfPolicyHolder-input" name="AgeOfPolicyHolder" type="number" value={formValues.AgeOfPolicyHolder} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fault</FormLabel>
          <RadioGroup name="Fault" value={formValues.Fault} onChange={handleInputChange} row="row">
            <FormControlLabel key="Policy Holder" value="Policy Holder" control={<Radio size = "small" />} label="Male"/>
            <FormControlLabel key="Third Party" value="Third Party" control={<Radio size = "small" />} label="Female"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Type</FormLabel>
          <RadioGroup name="PolicyType" value={formValues.PolicyType} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan - All Perils" value="Sedan - All Perils" control={<Radio size = "small" />} label="Sedan - All Perils"/>
            <FormControlLabel key="Sedan - Liability" value="Sedan - Liability" control={<Radio size = "small" />} label="Sedan - Liability"/>
            <FormControlLabel key="Sedan - Collision" value="Sedan - Collision" control={<Radio size = "small" />} label="Sedan - Collision"/>
            <FormControlLabel key="Sport - All Perils" value="Sport - All Perils" control={<Radio size = "small" />} label="Sport - All Perils"/>
            <FormControlLabel key="Sport - Liability" value="Sport - Liability" control={<Radio size = "small" />} label="Sport - Liability"/>
            <FormControlLabel key="Sport - Collision" value="Sport - Collision" control={<Radio size = "small" />} label="Sport - Collision"/>
            <FormControlLabel key="Utility - All Perils" value="Utility - All Perils" control={<Radio size = "small" />} label="Utility - All Perils"/>
            <FormControlLabel key="Utility - Liability" value="Utility - Liability" control={<Radio size = "small" />} label="Utility - Liability"/>
            <FormControlLabel key="Utility - Collision" value="Utility - Collision" control={<Radio size = "small" />} label="Utility - Collision"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>VehicleCategory</FormLabel>
          <RadioGroup name="VehicleCategory" value={formValues.VehicleCategory} onChange={handleInputChange} row="row">
            <FormControlLabel key="Sedan" value="Sedan" control={<Radio size = "small" />} label="Sedan"/>
            <FormControlLabel key="Sport" value="Sport" control={<Radio size = "small" />} label="Sport"/>
            <FormControlLabel key="Utility" value="Utility" control={<Radio size = "small" />} label="Utility"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Vehicle Price Range</FormLabel>
          <RadioGroup name="VehiclePriceRange" value={formValues.VehiclePriceRange} onChange={handleInputChange} row="row">
            <FormControlLabel key="less than 20000" value="less than 20000" control={<Radio size = "small" />} label="less than 20000"/>
            <FormControlLabel key="20000 to 29000" value="20000 to 29000" control={<Radio size = "small" />} label="20000 to 29000"/>
            <FormControlLabel key="30000 to 39000" value="30000 to 39000" control={<Radio size = "small" />} label="30000 to 39000"/>
            <FormControlLabel key="40000 to 59000" value="40000 to 59000" control={<Radio size = "small" />} label="40000 to 59000"/>
            <FormControlLabel key="60000 to 69000" value="60000 to 69000" control={<Radio size = "small" />} label="60000 to 69000"/>
            <FormControlLabel key="more than 69000" value="more than 69000" control={<Radio size = "small" />} label="more than 69000"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Fraud Found Previously</FormLabel>
          <RadioGroup name="FraudFound_P" value={formValues.FraudFound_P} onChange={handleInputChange} row="row">
            <FormControlLabel key="0" value="0" control={<Radio size = "small" />} label="0"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Policy Number</FormLabel>
          <TextField id="PolicyNumber-input" name="PolicyNumber" type="number" value={formValues.PolicyNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Rep Number</FormLabel>
          <TextField id="RepNumber-input" name="RepNumber" type="number" value={formValues.RepNumber} onChange={handleInputChange}/>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Deductible</FormLabel>
          <RadioGroup name="Deductible" value={formValues.Deductible} onChange={handleInputChange} row="row">
            <FormControlLabel key="300" value="300" control={<Radio size = "small" />} label="300"/>
            <FormControlLabel key="400" value="400" control={<Radio size = "small" />} label="400"/>
            <FormControlLabel key="500" value="500" control={<Radio size = "small" />} label="500"/>
            <FormControlLabel key="700" value="700" control={<Radio size = "small" />} label="700"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>DriverRating</FormLabel>
          <RadioGroup name="DriverRating" value={formValues.DriverRating} onChange={handleInputChange} row="row">
            <FormControlLabel key="1" value='1' control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2" value='2' control={<Radio size = "small" />} label="2"/>
            <FormControlLabel key="3" value='3' control={<Radio size = "small" />} label="3"/>
            <FormControlLabel key="4" value='4' control={<Radio size = "small" />} label="4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Accident</FormLabel>
          <RadioGroup name="Days_Policy_Accident" value={formValues.Days_Policy_Accident} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Days Policy Claim</FormLabel>
          <RadioGroup name="Days_Policy_Claim" value={formValues.Days_Policy_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 7" value="1 to 7" control={<Radio size = "small" />} label="1 to 7"/>
            <FormControlLabel key="8 to 15" value="8 to 15" control={<Radio size = "small" />} label="8 to 15"/>
            <FormControlLabel key="15 to 30" value="15 to 30" control={<Radio size = "small" />} label="15 to 30"/>
            <FormControlLabel key="more than 30" value="more than 30" control={<Radio size = "small" />} label="more than 30"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Past Number of Claims</FormLabel>
          <RadioGroup name="PastNumberOfClaims" value={formValues.PastNumberOfClaims} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1" value="1" control={<Radio size = "small" />} label="1"/>
            <FormControlLabel key="2 to 4" value="2 to 4" control={<Radio size = "small" />} label="2 to 4"/>
            <FormControlLabel key="more than 4" value="more than 4" control={<Radio size = "small" />} label="more than 4"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age of Vehicle</FormLabel>
          <RadioGroup name="AgeOfVehicle" value={formValues.AgeOfVehicle} onChange={handleInputChange} row="row">
            <FormControlLabel key="New" value="New" control={<Radio size = "small" />} label="New"/>
            <FormControlLabel key="2 years" value="2 years" control={<Radio size = "small" />} label="2 years"/>
            <FormControlLabel key="3 years" value="3 years" control={<Radio size = "small" />} label="3 years"/>
            <FormControlLabel key="4 years" value="4 years" control={<Radio size = "small" />} label="4 years"/>
            <FormControlLabel key="5 years" value="5 years" control={<Radio size = "small" />} label="5 years"/>
            <FormControlLabel key="6 years" value="6 years" control={<Radio size = "small" />} label="6 years"/>
            <FormControlLabel key="7 years" value="7 years" control={<Radio size = "small" />} label="7 years"/>
            <FormControlLabel key="More than 7" value="More than 7" control={<Radio size = "small" />} label="More than 7"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Age Range of Policy Holder</FormLabel>
          <RadioGroup name="AgeRangeOfPolicyHolder" value={formValues.AgeRangeOfPolicyHolder} onChange={handleInputChange} row="row">
            <FormControlLabel key="16 to 17" value="16 to 17" control={<Radio size = "small" />} label="16 to 17"/>
            <FormControlLabel key="18 to 20" value="18 to 20" control={<Radio size = "small" />} label="18 to 20"/>
            <FormControlLabel key="21 to 25" value="21 to 25" control={<Radio size = "small" />} label="21 to 25"/>
            <FormControlLabel key="26 to 30" value="26 to 30" control={<Radio size = "small" />} label="26 to 30"/>
            <FormControlLabel key="31 to 35" value="31 to 35" control={<Radio size = "small" />} label="31 to 35"/>
            <FormControlLabel key="36 to 40" value="36 to 40" control={<Radio size = "small" />} label="36 to 40"/>
            <FormControlLabel key="41 to 50" value="41 to 50" control={<Radio size = "small" />} label="41 to 50"/>
            <FormControlLabel key="51 to 65" value="51 to 65" control={<Radio size = "small" />} label="51 to 65"/>
            <FormControlLabel key="over 65" value="over 65" control={<Radio size = "small" />} label="over 65"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Police Report Filed</FormLabel>
          <RadioGroup name="PoliceReportFiled" value={formValues.PoliceReportFiled} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Witness Present</FormLabel>
          <RadioGroup name="WitnessPresent" value={formValues.WitnessPresent} onChange={handleInputChange} row="row">
            <FormControlLabel key="Yes" value="Yes" control={<Radio size = "small" />} label="Yes"/>
            <FormControlLabel key="No" value="No" control={<Radio size = "small" />} label="No"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Supplements</FormLabel>
          <RadioGroup name="NumberOfSuppliments" value={formValues.NumberOfSuppliments} onChange={handleInputChange} row="row">
            <FormControlLabel key="None" value="" control={<Radio size = "small" />} label="None"/>
            <FormControlLabel key="1 to 2" value="1 to 2" control={<Radio size = "small" />} label="1 to 2"/>
            <FormControlLabel key="3 to 5" value="3 to 5" control={<Radio size = "small" />} label="3 to 5"/>
            <FormControlLabel key="more than 5" value="more than 5" control={<Radio size = "small" />} label="more than 5"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Address Change Claim</FormLabel>
          <RadioGroup name="AddressChange_Claim" value={formValues.AddressChange_Claim} onChange={handleInputChange} row="row">
            <FormControlLabel key="no change" value="no change" control={<Radio size = "small" />} label="no change"/>
            <FormControlLabel key="under 6 months" value="under 6 months" control={<Radio size = "small" />} label="under 6 months"/>
            <FormControlLabel key="1 year" value="1 year" control={<Radio size = "small" />} label="1 year"/>
            <FormControlLabel key="2 to 3 years" value="2 to 3 years" control={<Radio size = "small" />} label="2 to 3 years"/>
            <FormControlLabel key="4 to 8 years" value="4 to 8 years" control={<Radio size = "small" />} label="4 to 8 years"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Number of Cars</FormLabel>
          <RadioGroup name="NumberOfCars" value={formValues.NumberOfCars} onChange={handleInputChange} row="row">
            <FormControlLabel key="1 vehicle" value="1 vehicle" control={<Radio size = "small" />} label="1 vehicle"/>
            <FormControlLabel key="2 vehicles" value="2 vehicles" control={<Radio size = "small" />} label="2 vehicles"/>
            <FormControlLabel key="3 to 4" value="3 to 4" control={<Radio size = "small" />} label="3 to 4"/>
            <FormControlLabel key="5 to 8" value="5 to 8" control={<Radio size = "small" />} label="5 to 8"/>
            <FormControlLabel key="more than 8" value="more than 8" control={<Radio size = "small" />} label="more than 8"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Year</FormLabel>
          <RadioGroup name="Year" value={formValues.Year} onChange={handleInputChange} row="row">
            <FormControlLabel key="1994" value="1994" control={<Radio size = "small" />} label="1994"/>
            <FormControlLabel key="1995" value="1995" control={<Radio size = "small" />} label="1995"/>
            <FormControlLabel key="1996" value="1996" control={<Radio size = "small" />} label="1996"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item="item" style={{
          paddingBottom: '20px'
        }}>
        <FormControl>
          <FormLabel>Base Policy</FormLabel>
          <RadioGroup name="BasePolicy" value={formValues.BasePolicy} onChange={handleInputChange} row="row">
            <FormControlLabel key="All Perils" value="All Perils" control={<Radio size = "small" />} label="All Perils"/>
            <FormControlLabel key="Collision" value="Collision" control={<Radio size = "small" />} label="Collision"/>
            <FormControlLabel key="Liability" value="Liability" control={<Radio size = "small" />} label="Liability"/>
          </RadioGroup>
        </FormControl>
      </Grid>

      <Button variant="contained" color="primary" type="submit" style={{
          margin: '20px'
        }}>
        Get Prediction Result
      </Button>

    </Grid>
  </form>);
};

const IndexPage = () => {
  const [preset, setPreset] = useState('');
  const [presetData, setPresetData] = useState({});
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  let no_preset = {}

  let genuine_preset = {
    'MonthOfAccident': 'Feb',
    'WeekOfMonthOfAccident': 3,
    'DayOfWeekOfAccident': 'Monday',
    'Make': 'Toyota',
    'AccidentArea': 'Rural',
    'DayOfWeekClaimed': 'Tuesday',
    'MonthClaimed': 'Feb',
    'WeekOfMonthClaimed': 3,
    'Sex': 'Male',
    'MaritalStatus': 'Married',
    'AgeOfPolicyHolder': 32.0,
    'Fault': 'Third Party',
    'PolicyType': 'Sedan - All Perils',
    'VehicleCategory': 'Sedan',
    'VehiclePriceRange': 'less than 20000',
    'FraudFound_P': 0,
    'PolicyNumber': 3715,
    'RepNumber': 10,
    'Deductible': 400,
    'DriverRating': 2,
    'Days_Policy_Accident': 'more than 30',
    'Days_Policy_Claim': 'more than 30',
    'PastNumberOfClaims': '2 to 4',
    'AgeOfVehicle': '6 years',
    'AgeRangeOfPolicyHolder': '31 to 35',
    'PoliceReportFiled': 'No',
    'WitnessPresent': 'No',
    'AgentType': 'External',
    'NumberOfSuppliments': null,
    'AddressChange_Claim': 'no change',
    'NumberOfCars': '1 vehicle',
    'Year': 1994,
    'BasePolicy': 'All Perils'
  }

  // fraudulent_preset =

  const handlePresetChange = (event) => {
    setPreset(event.target.value);
  }

  if (preset == 'Genuine') {
    return (<Layout>
      <Seo title="Home"/>
      <h1>Auto Insurance Fraud Detection 🚗</h1>
      <h4>Select a preset to autofill the form (optional)</h4>

      <Grid item="item">
        <FormControl style={{
            marginBottom: '40px'
          }} sx={{
            m: 1,
            minWidth: 200
          }}>
          <FormLabel>Autofill with Preset</FormLabel>
          <Select name="Autofill" value={preset} onChange={handlePresetChange}>
            <MenuItem value=''>No Preset</MenuItem>
            <MenuItem value="Genuine">✅ Genuine Claim</MenuItem>
            <MenuItem value="Fraudulent">🔍 Fraudelent Claim</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <GenuineForm/>

    </Layout>)
  } else if (preset == 'Fraudulent') {
    return (<Layout>
      <Seo title="Home"/>
      <h1>Auto Insurance Fraud Detection 🚗</h1>
      <h4>Select a preset to autofill the form (optional)</h4>

      <Grid item="item">
        <FormControl style={{
            marginBottom: '40px'
          }} sx={{
            m: 1,
            minWidth: 200
          }}>
          <FormLabel>Autofill with Preset</FormLabel>
          <Select name="Autofill" value={preset} onChange={handlePresetChange}>
            <MenuItem value=''>No Preset</MenuItem>
            <MenuItem value="Genuine">✅ Genuine Claim</MenuItem>
            <MenuItem value="Fraudulent">🔍 Fraudelent Claim</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <FraudulentForm/>

    </Layout>)
  } else {
    return (<Layout>
      <Seo title="Home"/>
      <h1>Auto Insurance Fraud Detection 🚗</h1>
      <h4>Select a preset to autofill the form (optional)</h4>

      <Grid item="item">
        <FormControl style={{
            marginBottom: '40px'
          }} sx={{
            m: 1,
            minWidth: 200
          }}>
          <FormLabel>Autofill with Preset</FormLabel>
          <Select name="Autofill" value={preset} onChange={handlePresetChange}>
            <MenuItem value=''>No Preset</MenuItem>
            <MenuItem value="Genuine">✅ Genuine Claim</MenuItem>
            <MenuItem value="Fraudulent">🔍 Fraudelent Claim</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Form/>

    </Layout>)
  }
}

export default IndexPage
