# BierwartApi.BeverageApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**18bbaa70c0d47a01455e398c1e6b6d3d**](BeverageApi.md#18bbaa70c0d47a01455e398c1e6b6d3d) | **GET** /drinksoverview | returns a list of all drinks in the database
[**5b5e752adb97d9b14175c93f267de9e6**](BeverageApi.md#5b5e752adb97d9b14175c93f267de9e6) | **POST** /orderBeverage | A user consumes or returns one or more drinks
[**92b02dfc2c3a4e943f4d78d812608d07**](BeverageApi.md#92b02dfc2c3a4e943f4d78d812608d07) | **POST** /createBeverage | An administrator creates a new drink of a drink type
[**fe9c9aecba5dc539aa51291c4809de62**](BeverageApi.md#fe9c9aecba5dc539aa51291c4809de62) | **POST** /createDrinkType | An administrator creates a new drink type (e.g. Softdrink) with a fixed price

<a name="18bbaa70c0d47a01455e398c1e6b6d3d"></a>
# **18bbaa70c0d47a01455e398c1e6b6d3d**
> InlineResponse200 18bbaa70c0d47a01455e398c1e6b6d3d()

returns a list of all drinks in the database

### Example
```javascript
import {BierwartApi} from 'bierwart_api';

let apiInstance = new BierwartApi.BeverageApi();
apiInstance.18bbaa70c0d47a01455e398c1e6b6d3d((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="5b5e752adb97d9b14175c93f267de9e6"></a>
# **5b5e752adb97d9b14175c93f267de9e6**
> 5b5e752adb97d9b14175c93f267de9e6(body)

A user consumes or returns one or more drinks

### Example
```javascript
import {BierwartApi} from 'bierwart_api';

let apiInstance = new BierwartApi.BeverageApi();
let body = new BierwartApi.OrderBeverageBody(); // OrderBeverageBody | 

apiInstance.5b5e752adb97d9b14175c93f267de9e6(body, (error, data, response) => {
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
 **body** | [**OrderBeverageBody**](OrderBeverageBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="92b02dfc2c3a4e943f4d78d812608d07"></a>
# **92b02dfc2c3a4e943f4d78d812608d07**
> 92b02dfc2c3a4e943f4d78d812608d07(body)

An administrator creates a new drink of a drink type

Ein Administrator legt ein neues Getränk eines Getränketyps an

### Example
```javascript
import {BierwartApi} from 'bierwart_api';
let defaultClient = BierwartApi.ApiClient.instance;
// Configure HTTP basic authorization: auth
let auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

let apiInstance = new BierwartApi.BeverageApi();
let body = new BierwartApi.CreateBeverageBody(); // CreateBeverageBody | 

apiInstance.92b02dfc2c3a4e943f4d78d812608d07(body, (error, data, response) => {
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
 **body** | [**CreateBeverageBody**](CreateBeverageBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="fe9c9aecba5dc539aa51291c4809de62"></a>
# **fe9c9aecba5dc539aa51291c4809de62**
> fe9c9aecba5dc539aa51291c4809de62(body)

An administrator creates a new drink type (e.g. Softdrink) with a fixed price

Ein Administrator legt einen neuen Getränketyp (bspw. Softdrink) mit einem Preis an

### Example
```javascript
import {BierwartApi} from 'bierwart_api';
let defaultClient = BierwartApi.ApiClient.instance;
// Configure HTTP basic authorization: auth
let auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

let apiInstance = new BierwartApi.BeverageApi();
let body = new BierwartApi.CreateDrinkTypeBody(); // CreateDrinkTypeBody | 

apiInstance.fe9c9aecba5dc539aa51291c4809de62(body, (error, data, response) => {
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
 **body** | [**CreateDrinkTypeBody**](CreateDrinkTypeBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

