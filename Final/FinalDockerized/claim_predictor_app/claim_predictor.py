
import pandas as pd
import json
import requests
# import ../AutoML/Databricks/Azure

def create_tf_serving_json(data):
    return {'inputs': {name: data[name].tolist() for name in data.keys()} if isinstance(data, dict) else data.tolist()}


def score_model(model_uri, databricks_token, data):
    headers = {
            "Authorization": f"Bearer {databricks_token}",
            "Content-Type": "application/json",
  }
    data_json = data.to_dict(orient='records') if isinstance(data, pd.DataFrame) else create_tf_serving_json(data)
    response = requests.request(method='POST', headers=headers, url=model_uri, json=data_json)
    if response.status_code != 200:
        raise Exception(f"Request failed with status {response.status_code}, {response.text}")
    return response.json()


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
    failure = False
    status = ''
    result = ''
    output_str = dict()

    input_df = pd.DataFrame(input_json, index=[0])
    try:
        output = score_model("https://adb-4970145013088722.2.azuredatabricks.net/model/best_model/Production/invocations",
                "dapid22337b7a50862ef1aedb2d2b9d9449b-2", input_df)

        if output[0] == '0':
            result = "Genuine"
        else:
            result = "Fraud"
    except Exception as e:
        print(e)
        failure = True
        result = "Error"
    if failure:
        status = "failure"
    else:
        status = "success"

    output_str["status"] = status
    output_str["result"] = result

    return output_str


#test using dummy data
# input_str = {'MonthOfAccident': 'Feb',
#              'WeekOfMonthOfAccident': 3,
#              'DayOfWeekOfAccident': 'Monday',
#              'Make': 'Toyota',
#              'AccidentArea': 'Rural',
#              'DayOfWeekClaimed': 'Tuesday',
#              'MonthClaimed': 'Feb',
#              'WeekOfMonthClaimed': 3,
#              'Sex': 'Male',
#              'MaritalStatus': 'Married',
#              'AgeOfPolicyHolder': 32,
#              'Fault': 'Third Party',
#              'PolicyType': 'Sedan - All Perils',
#              'VehicleCategory': 'Sedan',
#              'VehiclePriceRange': 'less than 20000',
#              'FraudFound_P': 0,
#              'PolicyNumber': 3715,
#              'RepNumber': 10,
#              'Deductible': 400,
#              'DriverRating': 2,
#              'Days_Policy_Accident': 'more than 30',
#              'Days_Policy_Claim': 'more than 30',
#              'PastNumberOfClaims': '2 to 4',
#              'AgeOfVehicle': '6 years',
#              'AgeRangeOfPolicyHolder': '31 to 35',
#              'PoliceReportFiled': 'No',
#              'WitnessPresent': 'No',
#              'AgentType': 'External',
#              'NumberOfSuppliments': '1',
#              'AddressChange_Claim': 'no change',
#              'NumberOfCars': '1 vehicle',
#              'Year': 1994,
#              'BasePolicy': 'All Perils'}
# input_json = json.dumps(input_str)
# loaded_r = json.loads(input_json)
# print("Output Using Get_result")
# input_df = pd.DataFrame(loaded_r, index=[0])
# print(get_result(loaded_r))