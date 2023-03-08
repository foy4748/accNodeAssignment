import requests as rq

baseURL = "http://127.0.0.1:3001/user"
headers = { "Content-Type": "application/json"}

# Testing /user/all route

# res = rq.get(baseURL + "/all")
# # print(res.text)


# Testing /user/random route
# res = rq.get(baseURL + "/random")
# print(res.text)

# Testing /user/save route


# data = {
#         "id":"06",
#         "name":"Test Data"
#         }

# res = rq.post(baseURL + "/save", headers=headers, json=data)
# print(res.text)

# Testing /user/update route
# updateData = {
#         "id":"05",
#         "name":"Faisal"
#         }

# res = rq.patch(baseURL + "/update", headers=headers, json=updateData)
# print(res.text)

    
# Testing /user/delete route
deleteData = {
        "id":"03",
        }

res = rq.delete(baseURL + "/delete", headers=headers, json=deleteData)
print(res.text)
