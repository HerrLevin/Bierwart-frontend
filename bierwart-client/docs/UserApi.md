# BierwartApi.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**04e93a83a654f3363c92504b78cc5731**](UserApi.md#04e93a83a654f3363c92504b78cc5731) | **GET** /useroverview | returns a list of all users in the database
[**6e06ce11ef408cb43bd0448d5ced6a75**](UserApi.md#6e06ce11ef408cb43bd0448d5ced6a75) | **POST** /createUser | An administrator adds a user and creates an account, if wanted

<a name="04e93a83a654f3363c92504b78cc5731"></a>
# **04e93a83a654f3363c92504b78cc5731**
> InlineResponse2001 04e93a83a654f3363c92504b78cc5731()

returns a list of all users in the database

### Example
```javascript
import {BierwartApi} from 'bierwart_api';

let apiInstance = new BierwartApi.UserApi();
apiInstance.04e93a83a654f3363c92504b78cc5731((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="6e06ce11ef408cb43bd0448d5ced6a75"></a>
# **6e06ce11ef408cb43bd0448d5ced6a75**
> 6e06ce11ef408cb43bd0448d5ced6a75(body)

An administrator adds a user and creates an account, if wanted

Füge einen Nutzer hinzu und erstelle einen passenden Account, falls gewünscht

### Example
```javascript
import {BierwartApi} from 'bierwart_api';
let defaultClient = BierwartApi.ApiClient.instance;
// Configure HTTP basic authorization: auth
let auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

let apiInstance = new BierwartApi.UserApi();
let body = new BierwartApi.CreateUserBody(); // CreateUserBody | 

apiInstance.6e06ce11ef408cb43bd0448d5ced6a75(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUserBody**](CreateUserBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

