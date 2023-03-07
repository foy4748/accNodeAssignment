import requests as rq

baseURL = "http://127.0.0.1:3001/user"

# Testing /user/all route

res = rq.get(baseURL + "/all")
print(res.text)
