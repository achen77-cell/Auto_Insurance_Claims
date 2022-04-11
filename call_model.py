#!/usr/bin/env python
# coding: utf-8

import json
import pandas as pd
def get_model_predictions(input_series):
    
    '''
    Input to AutoML:
    type: Series
    example: {'MonthOfAccident': 'Feb',
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
     'NumberOfSuppliments': '',
     'AddressChange_Claim': 'no change',
     'NumberOfCars': '1 vehicle',
     'Year': 1994,
     'BasePolicy': 'All Perils'}
     Output from AUTOML:
     type: Int
     example: 0/1     
'''
    
    return 1
def get_result(input_json):
    
    '''        
    Input:
    type: dictionary/json
    example:  {'MonthOfAccident': 'Feb',
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
     'NumberOfSuppliments': '',
     'AddressChange_Claim': 'no change',
     'NumberOfCars': '1 vehicle',
     'Year': 1994,
     'BasePolicy': 'All Perils'}
    Output:
    type: dictionary
    example: {"result":"fraudulent"/"genuine"/"error", "status": "success"/"failure"}

    '''
    failure= False
    status=''
    result=''    
    output_str=dict()
    input_series = pd.Series(input_json.values(),index=input_json.keys())    
    try:
        output= get_model_predictions(input_series)
        if output ==0:
            result="Genuine"
        else:
            result="Fraud"
    except:
        failure= True  
        result="Error"
    if failure:
        status="failure"
    else:
        status="success"
        
    output_str["status"]=status
    output_str["result"]= result

    
    return output_str


input_str= {'MonthOfAccident': 'Feb',
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
 'NumberOfSuppliments': '',
 'AddressChange_Claim': 'no change',
 'NumberOfCars': '1 vehicle',
 'Year': 1994,
 'BasePolicy': 'All Perils'}
input_json = json.dumps(input_str)
loaded_r = json.loads(input_json)
get_result(loaded_r)



