import requests as rq

baseURL = "http://127.0.0.1:3001/user"
headers = { "Content-Type": "application/json"}

# Testing /user/all route

# res = rq.get(baseURL + "/all?limit=3")
# res = rq.get(baseURL + "/all")
# print(res.text)


# Testing /user/random route
# res = rq.get(baseURL + "/random")
# print(res.text)


# Testing /user/save route

# data = {
#         "name":"Test Data"
#         }

# data = {
#         "name":"Test Data",
#         "gender":"male",
#         "contact":"018292",
#         "address":"Dhaka, Bangladesh",
#         "photoUrl":"https://randomuser.me/api/portraits/thumb/women/79.jpg"
#         }

# res = rq.post(baseURL + "/save", headers=headers, json=data)
# print(res.text)

# Testing /user/update route
# updateData = {
#         "id":"2",
#         "name":"Faisal"
#         }

# res = rq.patch(baseURL + "/update", headers=headers, json=updateData)
# print(res.text)

# Testing /user/bulk-update route
updateData = [
        {
            "id":"2",
            "name":"Faisal"
            },
        {
            "id":"3",
            "contact":"123456789"
            }

        ] 

res = rq.patch(baseURL + "/bulk-update", headers=headers, json=updateData)
print(res.text)

    
# Testing /user/delete route
# deleteData = {
#         "id":"0xxx",
#         }

# res = rq.delete(baseURL + "/delete", headers=headers, json=deleteData)
# print(res.text)
