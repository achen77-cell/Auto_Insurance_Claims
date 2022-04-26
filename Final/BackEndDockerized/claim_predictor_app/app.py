from fastapi import FastAPI
from .claim_predictor import get_result
from pydantic import BaseModel

app = FastAPI()

class PredictionRequestFields(BaseModel):
        MonthOfAccident: str
        WeekOfMonthOfAccident: int
        DayOfWeekOfAccident: str
        Make: str
        AccidentArea: str
        DayOfWeekClaimed: str
        MonthClaimed: str
        WeekOfMonthClaimed: int
        Sex: str
        MaritalStatus: str
        AgeOfPolicyHolder: float
        Fault: str
        PolicyType: str
        VehicleCategory: str
        VehiclePriceRange: str
        PolicyNumber: int
        RepNumber: int
        Deductible: int
        DriverRating: int
        Days_Policy_Accident: str
        Days_Policy_Claim: str
        PastNumberOfClaims: str
        AgeOfVehicle: str
        AgeRangeOfPolicyHolder: str
        PoliceReportFiled: str
        WitnessPresent: str
        AgentType: str
        NumberOfSuppliments: str
        AddressChange_Claim: str
        NumberOfCars: str
        Year: int
        BasePolicy: str


@app.post("/ClaimPredict/")
def read_root(input: PredictionRequestFields):
    ret = get_result(input.__dict__)
    return ret