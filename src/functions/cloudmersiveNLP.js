var CloudmersiveNlpApiClient = require('cloudmersive-nlp-api-client');
var defaultClient = CloudmersiveNlpApiClient.ApiClient.instance;

//api.cloudmersive.com
// Cloudmersive Api Key: 1f0b42fb-af4d-4210-81b6-c18a30aa0a7f
// Configure API key authorization: Apikey

var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "1f0b42fb-af4d-4210-81b6-c18a30aa0a7f"

var apiInstance = new CloudmersiveNlpApiClient.WordsApi();

var input = (`${PARSABLE_STRING}`); // String | Input string

var wordsPostCallback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsPost(input, wordsPostCallback);

var wordsAdverbsCallback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsAdverbs(input, wordsAdverbsCallback);

var wordsPronounsCallback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsPronouns(input, wordsPronounsCallback);

var wordsAdjectivesCallback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wordsAdjectives(input, wordsAdjectivesCallback);

// From https://stackoverflow.com/questions/25284778/converting-plain-text-into-json
//
// var PARSABLE_STRING = document.querySelector('#id').innerHTML.split('\n');
// var arr = [];
// for (var i = 1, l = text.length - 1; i < l; i++) {
//     var obj = {};
//     obj[text[i]] = i
//     arr.push(obj);
// }

// console.log(JSON.stringify(arr));
