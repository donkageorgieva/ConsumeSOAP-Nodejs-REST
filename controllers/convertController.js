export const gramToOunce = (req, res) => {
  res.send({
    ounces: req.params["grams"] / 28.34952,
  });
};
export const ounceToGram = (req, res) => {
  res.send({
    grams: req.params["ounces"] * 28.34952,
  });
};
export const kgToLb = (req, res) => {
  res.send({
    lbs: req.params["kgs"] * 2.2,
  });
};

export const lbToKg = (req, res) => {
  res.send({
    kgs: req.params["lbs"] / 2.2,
  });
};
