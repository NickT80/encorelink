import React, { PropTypes } from 'react';

function ViewMusician({ data, isFetching }) {
  if (isFetching) {
    return <p> Loading ... </p>;
  }

  return (
    <div className="row">
      <div className="small-12 columns">
        <h3>{data.username}</h3>
        <p>{data.bio}</p>
        <h4>Instruments</h4>
        { data.instruments && data.instruments.length &&
          <ul>
            {data.instruments.map((instrument) => { return <li>{instrument}</li>; })}
          </ul>
        }
      </div>
    </div>
  );
}

ViewMusician.propTypes = {
  data: PropTypes.shape({
    bio: PropTypes.string.isRequired,
    instruments: PropTypes.array.isRequired,
  }),
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
};

export default ViewMusician;
