const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <form action={`/places/${data.place.id}?_method=PUT`} method="POST">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input name="name" id="name" value={data.place.name} required />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input name="pic" id="pic" type="url" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">Place State</label>
              <input className="form-control" id="state" name="state" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="cuisines">Place Cuisine</label>
              <input
                className="form-control"
                id="cuisines"
                name="cusines"
                required
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
