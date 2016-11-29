import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Autocomplete from 'react-google-autocomplete';


const MusicianProfile = ({ handleSubmit }) => (

  <div className="row">
    <div className="small-12 columns">
      <h1>Set Up Profile</h1>

      <form className="form-create-event" onSubmit={handleSubmit}>
        <div className="small-3 small-offset-2 columns">
          <label>Phone Number
            <Field
              name="phone number"
              component="input"
              type="number"
              placeholder="(xxx)-xxx-xxxx"
              required
              autoFocus
            />
          </label>
        </div>

        <div className="small-3 small-offset-2 columns">
          <label>Date of Birth
            <Field
              name="date of birth"
              component="input"
              type="date"
              placeholder="date"
              required
            />
          </label>
        </div>

        <div className="small-9 small-offset-2 columns">
          <label>Address
            <Field name="address" component={props =>
              <Autocomplete
                type="text"
                name="address"
                style={{ width: '100%' }}
                onPlaceSelected={param => props.input.onChnage(param.name + ', ' + param.formatted_address)}
                type={[]}
              />}
            />
          </label>
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>Upload Profile picture
            <img className="profileIcon-img" src="/public/img/profile_icon.png" alt="EncoreLink" />
            <input
              className="button"
              type="upload file"
              value="Upload File"
            />
          </label>
        </div>

        <div className="small-12 small-offset-2 columns">
          <div>
            <h3>About your music You share:</h3>
          </div>
        </div>

        <div className="small-5 small-offset-2 columns">
          <label>Major Instrument(s)
            <Field
              name="major instrument"
              component="input"
              type="text"
              placeholder="Major Instrument"
              required
            />
          </label>
          <label className="checkbox-label">
            <Field
              name="classical"
              component="input"
              type="checkbox"
              value="Classical"
              required
            />Classical
          </label>
          <label className="checkbox-label">
            <Field
              name="jazz"
              component="input"
              type="checkbox"
              value="Jazz"
              required
            />Jazz
          </label>
          <label className="checkbox-label">
            <Field
              name="country"
              component="input"
              type="checkbox"
              value="Country"
              required
            />Country
          </label>
          <label className="checkbox-label">
            <Field
              name="bluegrass"
              component="input"
              type="checkbox"
              value="Bluegrass"
              required
            />Bluegrass
          </label>
          <label className="checkbox-label">
            <Field
              name="30s"
              component="input"
              type="checkbox"
              value="30s"
              required
            />30s
          </label>
          <label className="checkbox-label">
            <Field
              name="40s"
              component="input"
              type="checkbox"
              value="40s"
              required
            />40s
          </label>
          <label className="checkbox-label">
            <Field
              name="50s"
              component="input"
              type="checkbox"
              value="50s"
              required
            />50s
          </label>
          <label className="checkbox-label">
            <Field
              name="60s"
              component="input"
              type="checkbox"
              value="60s"
              required
            />60s
          </label>
          <label className="checkbox-label">
            <Field
              name="world music"
              component="input"
              type="checkbox"
              value="World Music"
              required
            />World Music
          </label>
          <label className="checkbox-label">
            <Field
              name="others"
              component="input"
              type="checkbox"
              value="Others"
              required
            />Others
          </label>
        </div>

        <div className="small-12 columns">
          <label>Video or Audio file link:
            <Field
              name="link"
              component="input"
              type="text"
              placeholder="Link"
              required
            />
            <input
              className="button"
              type="upload file"
              value="Upload link"
            />
          </label>
        </div>

        <div className="small-10 columns">
          <label>Profile:
            <Field
              name="link"
              component="textarea"
              type="text"
              required
            />
            <input
              className="button"
              type="upload file"
              value="Save Change"
            />
          </label>
        </div>

      </form>
    </div>
  </div>
);


MusicianProfile.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'musicianProfileForm'
})(MusicianProfile);
