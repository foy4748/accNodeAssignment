import requests as rq

baseURL = "http://127.0.0.1:3001/user"

# Testing /user/all route

# res = rq.get(baseURL + "/all")
# # print(res.text)


# Testing /user/random route
# res = rq.get(baseURL + "/random")
# print(res.text)

# Testing /user/save route
headers = { "Content-Type": "application/json"}

data = {
        "id":"06",
        "name":"Test Data"
        }

res = rq.post(baseURL + "/save", headers=headers, json=data)
print(res.text)
