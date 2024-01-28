const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <p>{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p>
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesFormatted}
      </main>
    </Def>
  );
}

module.exports = index;
