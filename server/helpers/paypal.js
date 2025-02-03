const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AT3a2UKD4knKf0PAJrPHJ2CXaClqdzeJ5QEJG8eBF9GA7xDhc_bgULY1ldVgbtGDQc_23bt4zJiLuXhx",
  client_secret: "EHbpdYljUef3ka0-_WUNJFb9rrVr3u4mGsMz9CSu2fp7Y2CkkQUF2s5tHfnWfB8VUqF7EBEXN50pGG_g",
});

module.exports = paypal;
