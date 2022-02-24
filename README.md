# Group 6 - INSY 695 Project 
## Auto Insurance Fraud Detection

### Our Team
Product Manager: Nehal Jain <br />Business Analyst: Christina Ming <br /> Data Analyst: Nancy Samuel, Gayatri Krishnamoorthy <br /> Data Scientist: Juliana Liu, Aishwarya Rao, Xinyi Hu

### Use Case Overview
We are a data science team at Proaggresive Insurance. As an insurance company, it is often costly and time-consuming to resolve issues like insurance fraud afterwards. So it has become increasingly critical to predict and distinguish fraudulent claims leveraging predictive modelling. And we are very interested in understanding what it takes to detect insurance fraud before a payment is made by asking the following questions:

1. How likely is a claim fraudulent or not?
2. What factors can be used to determine whether a claim is fraudulent?

It is believed that a model with a good recall would be prioritized over one with a good accuracy or precision because we aim to detect as many fraudulent cases as possible considering the downside of not detecting one is larger than the other way around. If successful, suspicious claims can be flagged immediately for further review and more accurate judgement involving domain knowledge, while the others can be processed as usual, which could help reduce huge labor costs spent on manual investigation of the initial stage and potential loss due to fraudulent claims.

### Hypothesis / Problem statement
Traditionally businesses relied on rules alone to block fraudulent claims. However, rules are rigid and can cause problems: 
-  When there are lots of rules, it tends to result in a high number of false positives: meaning you’re likely to block a lot of genuine customers.
-  Rules have fixed filters/outcomes and they are risky since the thresholds can change over time,so they aren’t robust.

And hence our logical assumption is that a classification tool will help in the company’s decision making process. This is where Machine learning models shine when you don’t know the exact signals that indicate fraudulent activity, but model identify the signals itself. 

So we assume our null hypothesis to be the status quo: under ideal circumstances, the claim application is not fraudulent.
And our alternate hypothesis would be that the claim application is fraudulent.

We will evaluate this under various analyses mentioned below.

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

### Data Preparation

Prior to beginning our data preparation, we first perform a stratified split which divides the datset into train, validation and test to maintain the ratio of our target variable FraudFound_P. Post that, we create a transformation pipeline to apply the data preparation steps to train, validation and test datasets.

#### Step 1: Dealing with missing data
We first find out the statistics related to the missing data, vizualize it with a correlation map of missingness. If a column has more than 70% of missing data, we remove the column. For the columns with less missing data, we looked at the columns to decide if they should be imputed at a later stage or dropped off. As such, we dropped the missing values from the columns DayOfWeekClaimed, MonthClaimed, Days_Policy_Claim and the target variable FraudFound_P.

#### Step 2: Data processing and cleaning
To add significance to our model, we would only want to keep columns which have a logical significance. The column policy number has been masked, and has been replaced with ordered integers, and hence can be dropped. It also has a high correlation with Year. The column PolicyType is a combination of 2 existing variables, both of which are present as individual columns. Hence can be dropped, but we will keep it to test interactions.

We also convert the columns PoliceReportFiled,WitnessPresent having Yes/No values to 1/0 and converted the MonthOfAccident, MonthClaimed columns in text to numerical months from the calendar.

#### Step 3: Outlier detection
We plotted a boxplot visualizing the various variables and on finding the column AgeOfPolicyHolder to be having potential outliers, we excluded these outliers. 

#### Step 4: Feature Engineering 
 - Most of the numerical variables have already been binned in the dataset, hence, we do not need to implement binning
 - Variables like 'PolicyType' which represents interactions between 2 other variables have been preserved to check feature aggregations
 - Variables are divided into numerical and categorical variables and are encoded differently (0 for numerical and 'none' for categorical)

We impute the values looking at the columns:
- Days_Policy_Accident - is a categorical column and null values mean that there are no days between policy purchase and accident. so fill as 'none'
- PastNumberOfClaims- is a categorical column and null values mean that there are no pas claims, so fill as 'none'
- NumberOfSuppliments - is a categorical column and null values mean that there are no suppliments, fill as 'none'
- AgeOfPolicyHolder - signifies the missing age of the driver, but we will replace this with the upper value from the columns 'Age range of the policy holder'

All the categorical variables are ordinal encoded to be fed into our model.

#### Step 5: Feature Scaling
We use StandardScaler to standardize the variables which ensures that the scale across all variables is maintained.

#### Step 6: Transformation pipeline
We first create a common pipeline combining the steps of dropping missing values, preprocessing, cleaning together. We then add steps to impute both numerical and categorical along with scaling the numerical variables and encode the categorical variables

#### Step 7: Imbalanced data correction
Since our dataset was hugely imbalanced with only 6% of the target variable being deemed as a fraud, we needed to train our model on resampled data. We used various resampling techniques and we find that the results are effective when we combine over sampling and under sampling. This is done by using SMOTEEN : SMOTE performs oversampling of the minority class and works by selecting examples that are close in the feature space, drawing a line between the examples in the feature space and drawing a new sample as a point along that line + ENN (Edited Nearest Neighbours) rule: which involves using k=3 nearest neighbours to locate those examples in a dataset that are misclassified and that are then removed. It can be applied to all classes or just those examples in the majority class.

#### Step 8: Feature selection
We run a feature selection with random forest to identify the importance of each of these variables in predicting whther the claim would be fraudulent or not. We currently have not removed any features from the model to test these in the modelling phase.

![image](https://user-images.githubusercontent.com/70802118/155265914-6e61b751-6a54-4ebc-a257-837da320de7d.png)

We then proceed on the modelling phase where we applied standard machine learning classification algorithms that can be fit successfully on the transformed datasets.






