import requests as rq

baseURL = "https://acc-node-assignment-e1pe.onrender.com/user"
headers = { "Content-Type": "application/json"}

# Testing /user/random route
# res = rq.get(baseURL + "/random")
# print(res.text)
# TESTING DONE -------------------|


# Testing /user/all route

# res = rq.get(baseURL + "/all?limit=3")
# res = rq.get(baseURL + "/all")
# print(res.text)
# TESTING DONE -------------------|



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
# TESTING DONE -------------------|

# Testing /user/update route
# updateData = {
#         "id":"7",
#         "name":"Test Faisal"
#         }

# res = rq.patch(baseURL + "/update", headers=headers, json=updateData)
# print(res.text)
# TESTING DONE -------------------|

# Testing /user/bulk-update route
updateData = [
        {
            "id":"2",
            "name":"Faisal",
            "testing":"yes I'm testing [this field should not be saved]"
            },
        {
            "id":"3",
            "contact":"123456789"
            }

        ] 

res = rq.patch(baseURL + "/bulk-update", headers=headers, json=updateData)
print(res.text)
# TESTING DONE -------------------|

    
# Testing /user/delete route
# deleteData = {
#         "id":"6",
#         }

# res = rq.delete(baseURL + "/delete", headers=headers, json=deleteData)
# print(res.text)
# TESTING DONE -------------------|
