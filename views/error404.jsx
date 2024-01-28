const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page buckaroo!</p>
        <div>
          <img src="images/selfie.jpg" alt="Nah bruh" />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
