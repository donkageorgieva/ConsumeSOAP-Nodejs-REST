import soap from "soap";
import express from "express";
const wsdlUrl = "http://localhost:53738/Convert.asmx?WSDL";

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
