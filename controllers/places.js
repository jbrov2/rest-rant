const router = require("express").Router();

// More code here in a moment
// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/goku.png",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/gurpartap-sandhu-nuAOmcjs3ZQ-unsplash.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
