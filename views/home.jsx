const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            height="800px"
            width="800px"
            className="img-fluid"
            src="/images/9ac7b615707d55ffc2849f59741ee940.jpg"
            alt="bruh"
          />
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
