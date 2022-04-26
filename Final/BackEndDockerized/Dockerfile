FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./claim_predictor_app /code/claim_predictor_app

CMD ["uvicorn", "claim_predictor_app.app:app", "--host", "0.0.0.0", "--port", "4000"]