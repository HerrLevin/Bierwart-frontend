# BierwartApi.CreateUserBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of user  | 
**idRole** | **Number** | id of the role the user should be added to | 
**mail** | **String** | E-Mail address for the user | [optional] 
**admin** | **Boolean** | Grant this user admin rights | [optional] 
**idAccount** | **Number** | If supplied, the newly created user&#x27;s actions get charged to this account. If empty, a new (personal) account is created. Use this, if you want to create a guest-account for regular user. | [optional] 
