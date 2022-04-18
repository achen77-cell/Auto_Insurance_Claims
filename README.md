# Group 6 - INSY 695 Project 
## Auto Insurance Fraud Detection

### Our Team
![image](https://user-images.githubusercontent.com/70802118/155798273-84ae46fe-1114-4a72-8d73-062f8a4e74fe.png)

### Use Case Overview
We are a data science team at Proaggresive Insurance. As an insurance company, it is often costly and time-consuming to resolve issues like insurance fraud afterwards. The industry has gone into a price hardening cycle. Competition is getting fierce with online-focused discount insurers entering the market. Industry revenue declined 5.0% in 2020 as a result of lower investment income and consumer confidence during the pandemic. According to the latest available information from comScore, 37.0% of consumers are likely to purchase auto insurance online in the future. In a changing market where people are able to file claims online by taking pictures for payments to be made, insurers have been very vulnerable to staged accidents. For example, auto insurers lose at least $29 billion a year due to premium leakage, according to Verisk.

Therefore, facing such an online-focused strategy shift, it has become increasingly critical to predict and distinguish fraudulent claims leveraging predictive modelling and causal analysis. And we are very interested in understanding what it takes to detect insurance fraud before a payment is made by asking the following questions:

1. How likely is a claim fraudulent or not (using a classification model)?
2. What factors can be used to determine whether a claim is fraudulent (through causal inference)?

It is believed that a model with a good recall would be prioritized over one with a good accuracy or precision because we aim to detect as many fraudulent cases as possible considering the downside of not detecting one is larger than the other way around. If successful, suspicious claims can be flagged immediately for further review and more accurate judgement involving domain knowledge, while the others can be processed as usual, which could help reduce huge labor costs spent on manual investigation at the initial stage and potential loss due to fraudulent claims.

### Hypothesis / Problem statement
Traditionally businesses relied on rules alone to block fraudulent claims. However, rules are rigid and can cause problems: 
-  When there are lots of rules, it tends to result in a high number of false positives: meaning you’re likely to block a lot of genuine customers.
-  Rules have fixed filters/outcomes and they are risky since the thresholds can change over time,so they aren’t robust.

And hence our logical assumption is that a classification tool will help in the company’s decision making process. This is where Machine learning models shine when you don’t know the exact signals that indicate fraudulent activity, but model identify the signals itself. 

So we assume our null hypothesis to be the status quo: under ideal circumstances, the claim application is not fraudulent.
And our alternate hypothesis would be that the claim application is fraudulent.

We will evaluate this under various analyses mentioned below.

### Dataset and Analysis 

This dataset is retrieved from Kaggle with a binary target variable, FraudFound_P, for which 1 means that the claim application is fraudulent and 0 means otherwise. 

A dictionary of all the fields and their descriptions is given below:
![DataDictionary](https://user-images.githubusercontent.com/70802118/155792207-db6b7838-d1b4-4fbd-acb6-69dc9dcde808.PNG)

We found that our data was imbalanced, the minority class (where FraudFound_P=1) was only about 6% of the enitre dataset. Thus we transformed the data with sampling in the upcoming steps.
<img width="644" alt="Screenshot 2022-02-25 at 11 32 41 PM" src="https://user-images.githubusercontent.com/99682586/155828552-3d096ee6-7c7d-4c5f-802e-c0ef27c5bbaf.png">

Following are some observations obtained on further analysis -

We saw that the number of fradulent cases decreased over the years.
<img width="815" alt="Screenshot 2022-02-25 at 11 33 51 PM" src="https://user-images.githubusercontent.com/99682586/155828601-2d61bb91-04a5-4903-b67b-5f1992ca0857.png">

People in the age range 30-45 have a higher chance of having more than one car.
<img width="818" alt="Screenshot 2022-02-25 at 11 34 27 PM" src="https://user-images.githubusercontent.com/99682586/155828610-6ca61d56-650f-406d-bb6d-26f360e893ad.png">

The most common car type invloved in the accidents for fraudulent cases are Pontiac, Honda and Toyota.
<img width="812" alt="Screenshot 2022-02-25 at 11 35 13 PM" src="https://user-images.githubusercontent.com/99682586/155828643-dba5b51b-be4f-4adf-8f83-a069461763f9.png">

### [Data Preparation](https://github.com/McGill-MMA-EnterpriseAnalytics/Auto_Insurance_Claims/blob/main/PreProcessing/Data%20Preparation.ipynb)

Prior to beginning our data preparation, we first perform a stratified split which divides the datset into train, validation and test to maintain the ratio of our target variable FraudFound_P. Post that, we create a transformation pipeline to apply the data preparation steps to train, validation and test datasets.

#### Step 1: Dealing with missing data
We first find out the statistics related to the missing data, vizualize it with a correlation map of missingness. If a column has more than 70% of missing data, we remove the column. For the columns with less missing data, we looked at the columns to decide if they should be imputed at a later stage or dropped off. As such, we dropped the missing values from the columns DayOfWeekClaimed, MonthClaimed, Days_Policy_Claim and the target variable FraudFound_P.

#### Step 2: Data processing and cleaning
To add significance to our model, we would only want to keep columns which have a logical significance. The column policy number has been masked, and has been replaced with ordered integers, and hence can be dropped. It also has a high correlation with Year. The column PolicyType is a combination of 2 existing variables, both of which are present as individual columns. Hence can be dropped, but we will keep it to test interactions.

We also convert the columns PoliceReportFiled,WitnessPresent having Yes/No values to 1/0 and converted the MonthOfAccident, MonthClaimed columns in text to numerical months from the calendar.

#### Step 3: Outlier detection
We plotted a boxplot visualizing the various variables and on finding the column AgeOfPolicyHolder to be having potential outliers, we excluded these outliers. 

#### Step 4: Feature engineering 
 - Most of the numerical variables have already been binned in the dataset, hence, we do not need to implement binning
 - Variables like 'PolicyType' which represents interactions between 2 other variables have been preserved to check feature aggregations
 - Variables are divided into numerical and categorical variables and are encoded differently (0 for numerical and 'none' for categorical)

We impute the values looking at the columns:
- Days_Policy_Accident - is a categorical column and null values mean that there are no days between policy purchase and accident. so fill as 'none'
- PastNumberOfClaims- is a categorical column and null values mean that there are no pas claims, so fill as 'none'
- NumberOfSuppliments - is a categorical column and null values mean that there are no suppliments, fill as 'none'
- AgeOfPolicyHolder - signifies the missing age of the driver, but we will replace this with the upper value from the columns 'Age range of the policy holder'

All the categorical variables are ordinal encoded to be fed into our model.

#### Step 5: Feature scaling
We use StandardScaler to standardize the variables which ensures that the scale across all variables is maintained.

#### Step 6: Transformation pipeline
We first create a common pipeline combining the steps of dropping missing values, preprocessing, cleaning together. We then add steps to impute both numerical and categorical along with scaling the numerical variables and encode the categorical variables

#### Step 7: Imbalanced data correction
Since our dataset was hugely imbalanced with only 6% of the target variable being deemed as a fraud, we needed to train our model on resampled data. We used various resampling techniques and we find that the results are effective when we combine over sampling and under sampling. This is done by using SMOTEEN : SMOTE performs oversampling of the minority class and works by selecting examples that are close in the feature space, drawing a line between the examples in the feature space and drawing a new sample as a point along that line + ENN (Edited Nearest Neighbours) rule: which involves using k=3 nearest neighbours to locate those examples in a dataset that are misclassified and that are then removed. It can be applied to all classes or just those examples in the majority class.

#### Step 8: Feature selection
We run a feature selection with random forest to identify the importance of each of these variables in predicting whther the claim would be fraudulent or not. We currently have not removed any features from the model to test these in the modelling phase.
![image](https://user-images.githubusercontent.com/70802118/155265914-6e61b751-6a54-4ebc-a257-837da320de7d.png)

We then proceed on the modelling phase where we applied standard machine learning classification algorithms that can be fit successfully on the transformed datasets.

### Modeling

We have used AutoML for modelling. AutoML which stands for Automated Machine Learning is an end-to end automated process for running machine learning algorithms.

Tasks covered under Auto ML:
- Data Preparation: data cleaning, transformation, and normalization 
- Feature Engineering: engineering new features from the existing ones when it makes sense, selecting features to include into the model. 
- Algorithm Selection: selecting the model that works best available data.
- Hyperparameter Optimization: tuning the most important hyperparameters for each model. 
- Model deployment: putting the best-performing model into action

There are different AutoML frameworks available, and we decided to implement 2 of them:

#### 1. AutoML by Databricks:

#### 2. AutoML by H2o.ai:
We also implemented H2o open source AutoML.

##### Steps involved:
1. Install, import and initialize it: It can automatically check if there is an H2o instance running when we initialize it and starts the H2o cluster automatically.
An H2O cluster consists of one or more nodes. Each node is a process split into three layers: language, algorithms, and core infrastructure. 
- The first layer in the bottom section is the language layer. The language layer consists of an expression evaluation engine for R and the Scala layer.
- The second layer is the algorithm layer. This layer contains an algorithms that are already provided in the H2O such as: XGBoost, GBM, Random Forest, K-Means etc.
- The third layer is the core infrastructure layer that deals with resource management such as Memory and CPU management.

2. Convert the dataframe into an H20 frame, and pass it on to the H2o auto ml function which performs automatic preprocessing of Imputation, one-hot encoding and standardization, and then train the model.
3. By the leaderboard method, we can see all the models that performed the best according to various metrics and get the best model automatically.
4. We then saved the model. There are two ways to save the leader model - binary format and MOJO format, we used the MOJO format since it's optimized for production use and used it for our predictions.

#### Advantages of using H2O AutoML: 
1. It has a very simple interface for implementation - Reduce the need for expertise in machine learning by reducing the manual code-writing time.
2. Its hyper parameter optimisation was very easy to implement. We used the hyperparameters of 
- Max_runtime_secs: specifies the maximum time that the AutoML process will run for
- Stopping_metric: Specify the metric to use for early stopping. It defaults to logloss for classification, in our case.
- Sort_metric: Specifies the metric used to sort the Leaderboard by at the end of an AutoML run, is AUC for binary classification
- Balance_classes: Specify whether to oversample the minority classes to balance the class distribution
- Max_models:Specify the maximum number of models to build in an AutoML run, excluding the Stacked Ensemble models

3.One learning that we had with H2o was that since data preprocessing is handled by AutoML automatically, if it sees an input in the test set which it has not found in the training set in terms of categorical variables, there are chances of it causing problems. So we saw that playing between the max runtime seconds or max models gave us some amount of control over there. 
4. It had a better performance by having an accuracy of about 95% and the algorithm selected was a stacked ensemble.
5. There is also an explainability module (h2o.explain() which is a global method and h20.explain_row() for local implementations) by which the models can be automatically explained. It generated visualizations like a Variable Importance plot. 

#### Issues faced: 
One problem that we experienced with H2o automl is that when it runs on a windows computer, it does not include XGBoost as one of the algorithms, and that we felt was a a limitations. This limitation did not exists when we ran it on google colab, but this was one of the learnings that we had.


---------

Models chosen mainly are tree based model as they inherently prevent overfitting and dont require feature selection explicitly. 
- A] Random Forest
Random Forests implicitly perform feature selection and generate uncorrelated decision trees.
Not influenced by outliers
Balance the bias-variance trade-off well.
- B] XGBoost [Code](https://github.com/McGill-MMA-EnterpriseAnalytics/Auto_Insurance_Claims/blob/main/Modeling/Modelling_XGBoost.ipynb)
Misclassified observations from each model are up-weighed
Lightning speed
High accuracies
- C] Adaboost
 Robust to overfitting in low noise datasets 
- D] GaussianNB
A conditional probabilistic classification model that considers each of the features in the dataset to contribute independently to the probability of the class of the tumor regardless of any possible correlation between the above-mentioned associations.
- E] KNN
Determines neighborhoods based on distance metric.
Quick calculation time
Allows it to immediately adapt to new training data

Performance metrics: <br />
- Chosen recall as our performance metric  <br />
- Preference given to Recall over Precision as the focus is on false negatives over false positives  <br />
- False negative: Claim is fraudulent but the model didn't predict it to be  <br />
- False positive: Claim is not fraudulent but model predicted it to be  <br />
- Company is likely to incur more losses because of false negatives than false positives

<img width="708" alt="Screen Shot 2022-02-23 at 10 03 05 PM" src="https://user-images.githubusercontent.com/90296247/155450034-77f7deb1-2e40-4233-9f1b-9c7016d415ac.png">

To measure the performance of our best model, we are looking at several evaluation metrics here.
And as we can see from the confusion matrix, our test dataset contains 2240 observations, among the 131 number of fraud cases presented here, the model successfully identify 122, which is a 93% of accuracy here.  By looking at the ROC curve, we see a AUC of 0.8, which means that there is a 80% chance that our model will be able to distinguish between non-fraud class and fraudulent class.

<img width="703" alt="Screen Shot 2022-02-23 at 10 04 21 PM" src="https://user-images.githubusercontent.com/90296247/155450044-52ddf7c7-f4a2-41f0-8353-c7198adf2651.png">

From the combination of feature importance and shap value plots, we can see how some features affect the target variable
BasePolicy and Fault are the two most important features contributing to the output most. As for BasePolicy, certain coverage type, like Liability has negative influence on the output, it’s less likely to find fraud in this category. As for Fault, if Third Party is deemed at fault, it will have negative influence on the output. It makes sense because PolicyHolders are less motivated by the fact that they are not at fault to claim fraud insurance. 

<img width="685" alt="Screen Shot 2022-02-23 at 10 04 46 PM" src="https://user-images.githubusercontent.com/90296247/155450052-4d659cf5-2321-4559-8f67-e4c3d003d5c2.png">

### [Causal Analysis](https://github.com/McGill-MMA-EnterpriseAnalytics/Auto_Insurance_Claims/blob/main/CausalAnalysis/Causal_Inference.ipynb)
To determine whether the important features actually had a causal relationship with the outcome “FraudFound_P” variable, we performed a Causal Analysis using DoWhy library using the features: “VehicleCategory”, “AgeOfPolicyHolder”, “DriverRating”, “PoliceReportFiled”, “Make”, “AccidentArea”, “Fault”, “PolicyType”, “VehiclePriceRange”, “PastNumberOfClaims”, “AgeOfVehicle”, “AgentType”, “NumberOfCars”, “BasePolicy”.
A causal model was created using the as shown below, each variable was considered as a treatment variable and its effect were analyzed.

![image](https://user-images.githubusercontent.com/75080569/155795071-c11af679-1b55-448c-b23e-1e94f487e829.png)

Below table summarizes the effect of all treatment variables on outcome- FraudFound_P.

![image](https://user-images.githubusercontent.com/75080569/155794784-047237fc-b228-4372-a490-4e4bc35fe31a.png)

The first five variables have a p-value less than 0.001, indicating a causal effect on determining a fraudulent case, but the same cannot be said about other variables.

### Conclusion
- Model can accurately predict 93% of fraudulent cases.
- The major indicators of a fraudulent case are Policy Holder’s Fault, Collision Base Policy, Higher Vehicle Price Range, higher past number of claims made.
### Threats to Validity
- Limited Data from past years: The data used to create the model dates few years back and the patterns might change over the years. Hence, it might not guarantee the same performance. 
- Inspectability Issues: Even though causal analysis helps in determining the key factors affecting the outcome, it cannot pinpoint to what can be exactly states as a reason for rejection, which point to the fact that Claim approvers might land up in a difficult situation when they have to explain to the customers in what grounds their claim was rejected.
### Future Steps
- Ensemble Anomaly detection – Current model incurs a heavy cost as it is a supervised model, and requires each case to be investigated and analyzed to determine whether they were actually fraudulent. As an alternative option, an ensemble anomaly detection system can be designed which does not data to be tagged. 
- Incorporate more recent and demographics data, prior customer profile like Risk profile: This can help improving the performance of the model and more accurately predicting the fraudulent cases.

### Business Application
According to our classification model results and casual analysis, we can see that a number of factors are indicative of fraudulent claims. To incorporate the informative factors, the business application could start with an operational dashboard for insurance investigators, which informs daily classification of how many claims are predicted fraudulent by what factors and connects with the model that highlights the claims with higher risks of fraud for a closer look. Currently for most companies in the auto insurance industry, it is common to take at least 3 weeks to 6 weeks to settle one claim regardless of its risk level. Now as we are shifting to a online-focused discount strategy for a consumer market with high price elasticity of demand, manual investigation becomes relatively a lot more costly. With predictive modelling techniques, however, we believe that it could help save tremendous amount of time and money to avoid from finding risky claims among tens of thousands of claims through human eyes. After further reviews on flagged claims along with human labelling to confirm the model results or correction to void some predictions, the model could keep learning and updating to yield more accurate outputs over time. 

A simple workflow is as follows:
![Flowchart](https://user-images.githubusercontent.com/84887338/155859295-9eb8edf3-e7d2-4a43-b975-1ffad2f2e231.png)










