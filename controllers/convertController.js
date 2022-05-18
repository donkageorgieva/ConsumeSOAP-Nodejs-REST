import soap from "soap";
import express from "express";
const wsdlUrl = "http://convert-service.somee.com/Convert.asmx?WSDL";

export const gramToOunce = (req, res) => {
  soap.createClient(wsdlUrl, function (err, client) {
    client.GramToOunce({ "gram": req.params["grams"] }, function (err, result) {
      res.send({
        ounces: result.GramToOunceResult,
      });
    });
  });
};
export const ounceToGram = (req, res) => {
  soap.createClient(wsdlUrl, function (err, client) {
    console.log(client);
    client.OunceToGram(
      { "ounce": req.params["ounces"] },
      function (err, result) {
        res.send({
          grams: result.OunceToGramResult,
        });
      }
    );
  });
};
export const kgToLb = (req, res) => {
  soap.createClient(wsdlUrl, function (err, client) {
    client.KgToLb({ "kg": req.params["kgs"] }, function (err, result) {
      res.send({
        lbs: result.KgToLbResult,
      });
    });
  });
};

export const lbToKg = (req, res) => {
  soap.createClient(wsdlUrl, function (err, client) {
    client.LbToKg({ "lb": req.params["lbs"] }, function (err, result) {
      res.send({
        lbs: result.LbToKgResult,
      });
    });
  });
};

// export const gramToOunce = (req, res) => {
//   res.send({
//     ounces: req.params["grams"] / 28.34952,
//   });
// };
// export const ounceToGram = (req, res) => {
//   res.send({
//     grams: req.params["ounces"] * 28.34952,
//   });
// };
// export const kgToLb = (req, res) => {
//   res.send({
//     lbs: req.params["kgs"] * 2.2,
//   });
// };

// export const lbToKg = (req, res) => {
//   res.send({
//     kgs: req.params["lbs"] / 2.2,
//   });
// };
