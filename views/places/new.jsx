const React = require("react");
const Def = require("../default");

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form action=" /places" method="POST">
          <div>
            <label htmlFor="name">Place Name</label>
            <input name="name" id="name" />
          </div>
          <div>
            <label htmlFor="pic">Place Picture</label>
            <input name="pic" id="pic" type="url" />
          </div>
          <div>
            <label htmlFor="state">Place State</label>
            <input className="form-control" id="state" name="state" />
          </div>
          <div>
            <label htmlFor="cuisines">Place Cuisine</label>
            <input
              className="form-control"
              id="cuisines"
              name="cusines"
              required
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
