# BierwartApi.AccountsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**431372499f0d5c231019257788f9941f**](AccountsApi.md#431372499f0d5c231019257788f9941f) | **POST** /createAccountMovement | A user deposits or withdraws money from their account
[**f7498f1c466dd6b0f6d5d50c867bc9d8**](AccountsApi.md#f7498f1c466dd6b0f6d5d50c867bc9d8) | **GET** /accountbalances | Returns all account balances with deposit/withdrawal-sum and consumption

<a name="431372499f0d5c231019257788f9941f"></a>
# **431372499f0d5c231019257788f9941f**
> 431372499f0d5c231019257788f9941f(body)

A user deposits or withdraws money from their account

### Example
```javascript
import {BierwartApi} from 'bierwart_api';

let apiInstance = new BierwartApi.AccountsApi();
let body = new BierwartApi.CreateAccountMovementBody(); // CreateAccountMovementBody | 

apiInstance.431372499f0d5c231019257788f9941f(body, (error, data, response) => {
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
 **body** | [**CreateAccountMovementBody**](CreateAccountMovementBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="f7498f1c466dd6b0f6d5d50c867bc9d8"></a>
# **f7498f1c466dd6b0f6d5d50c867bc9d8**
> Object f7498f1c466dd6b0f6d5d50c867bc9d8()

Returns all account balances with deposit/withdrawal-sum and consumption

### Example
```javascript
import {BierwartApi} from 'bierwart_api';

let apiInstance = new BierwartApi.AccountsApi();
apiInstance.f7498f1c466dd6b0f6d5d50c867bc9d8((error, data, response) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

