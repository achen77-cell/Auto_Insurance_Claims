# Group 6 - INSY 695 Project 
## Auto Insurance Fraud Detection

### Our Team
Product Manager: Nehal Jain <br />Business Analyst: Christina Ming <br /> Data Analyst: Nancy Samuel, Gayatri Krishnamoorthy <br /> Data Scientist: Juliana Liu, Aishwarya Rao, Xinyi Hu

### Use Case Overview
We are a data science team at Proaggresive Insurance. As an insurance company, it is often costly and time-consuming to resolve issues like insurance fraud afterwards. So it has become increasingly critical to predict and distinguish fraudulent claims leveraging predictive modelling. And we are very interested in understanding what it takes to detect insurance fraud before a payment is made by asking the following questions:

1. How likely is a claim fraudulent or not?
2. What factors can be used to determine whether a claim is fraudulent?

It is believed that a model with a good recall would be prioritized over one with a good accuracy or precision because we aim to detect as many fraudulent cases as possible considering the downside of not detecting one is larger than the other way around. If successful, suspicious claims can be flagged immediately for further review and more accurate judgement involving domain knowledge, while the others can be processed as usual, which could help reduce huge labor costs spent on manual investigation of the initial stage and potential loss due to fraudulent claims.

### Dataset
This dataset is retrieved from Kaggle with a binary target variable, FraudFound_P, for which 1 means that the claim application is fraudulent and 0 means otherwise. 

Besides the target variable, it also contains features below:

MonthOfAccident <br />
WeekOfMonthOfAccident <br />
DayOfWeekOfAccident <br />
Make <br />
AccidentArea <br />
DayOfWeekClaimed <br />
MonthClaimed <br />
WeekOfMonthClaimed <br />
Sex <br />
MaritalStatus <br />
AgeOfPolicyHolder <br />
Fault <br />
PolicyType <br />
VehicleCategory <br />
VehiclePriceRange <br />
PolicyNumber <br />
RepNumber <br />
Deductible <br />
DriverRating <br />
Days_Policy_Accident <br />
Days_Policy_Claim <br />
PastNumberOfClaims <br />
AgeOfVehicle <br />
AgeRangeOfPolicyHolder <br />
PoliceReportFiled <br />
WitnessPresent <br />
AgentType <br />
NumberOfSuppliments <br />
AddressChange_Claim <br />
NumberOfCars <br />
Year <br />
BasePolicy <br />









