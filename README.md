# Metrics Converter REST API

Express, Node.js

## Endpoints

Base URL: GET https://convert-metrics-rest-api.herokuapp.com/

### Convert from Gram to Ounce

#### GET https://convert-metrics-rest-api.herokuapp.com/to-ounce/:grams <br />

<b> grams = double </b> </br>

#### Example: </br>

<b> GET https://convert-metrics-rest-api.herokuapp.com/to-ounce/100 </b> <br />

### Convert from Ounce to Gram

#### GET https://convert-metrics-rest-api.herokuapp.com/to-gram/:ounces <br />

<b> ounces = double </b> </br>

#### Example: </br>

<b> GET https://convert-metrics-rest-api.herokuapp.com/to-gram/3 </b> <br />

### Convert from Lb to Kg

#### GET https://convert-metrics-rest-api.herokuapp.com/to-kg/lbs <br />

<b> lbs = double </b> </br>

#### Example: </br>

<b> GET https://convert-metrics-rest-api.herokuapp.com/to-kg/121 </b> <br />
