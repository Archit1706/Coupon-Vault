from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from sklearn.cluster import AgglomerativeClustering
from sklearn.preprocessing import StandardScaler
import numpy as np
from collections import defaultdict, Counter
from datetime import date as da
import holidays
from datetime import timedelta, datetime
import pywhatkit as pwt

app = FastAPI()

origins = ["http://localhost", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/holidays")
def holiday():
    in_holidays = holidays.IN()
    print(in_holidays.get(da(2023, 3, 8)))
    cur_date = da.today()
    holidays_ = Counter()
    for x in in_holidays:
        if (x - cur_date) >= timedelta(days=0) and (x - cur_date) < timedelta(days=30):
            holidays_[x] = in_holidays[x]
    return holidays_


@app.post("/upload_csv/")
async def upload_csv(file: UploadFile = File(...)):
    ds = pd.read_csv(file.file)
    ds.drop(columns=["Unnamed: 0"], inplace=True)
    scaler = StandardScaler()
    scaler.fit(ds)
    scaled_ds = pd.DataFrame(scaler.transform(ds), columns=ds.columns)
    AC = AgglomerativeClustering(n_clusters=4)
    yhat_AC = AC.fit_predict(scaled_ds)
    cluster_centers = np.array(
        [np.mean(scaled_ds[AC.labels_ == i], axis=0) for i in range(AC.n_clusters)]
    )
    importances = np.abs(cluster_centers - np.mean(scaled_ds.values, axis=0)) / np.std(
        scaled_ds.values, axis=0
    )
    top_indices = np.argsort(importances, axis=1)[:, ::-1][:, :5]
    d = defaultdict(list)
    for i, indices in enumerate(top_indices):
        for j in indices:
            d[f"Cluster {i+1}"].append(scaled_ds.columns[j])
    scaled_ds["Clusters"] = yhat_AC
    return d

@app.get("/send_message/{message}/{number}")
def send_message(message: str, number: str):
    pwt.sendwhatmsg(number, message, datetime.now().hour, datetime.now().minute + 1)
    return {"message": "Message sent successfully"}
    