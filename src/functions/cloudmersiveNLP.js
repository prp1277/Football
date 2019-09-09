import { ApiClient, ExtractEntitiesStringApi } from 'cloudmersive-nlp-api-client';
/**
 * @param baseURL - api.cloudmersive.com
 */
var defaultClient = ApiClient.instance;
// Configure API key authorization: Apikey
// Cloudmersive Api Key: 1f0b42fb-af4d-4210-81b6-c18a30aa0a7f
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "1f0b42fb-af4d-4210-81b6-c18a30aa0a7f"

var api = new ExtractEntitiesStringApi()

var value = "value_example"; // {String} Input string


var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.extractEntitiesStringPost(value, callback);
