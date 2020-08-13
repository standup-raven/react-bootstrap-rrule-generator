import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';
import {MenuItem, SplitButton} from "react-bootstrap";

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations
}) => {
  const isActive = mode === 'on';

  return (
    <div className={`form-group d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className={'combo-label'}>
          <div className="col-sm-1">
              {hasMoreModes && (
                  <input
                      id={id}
                      type="radio"
                      name="repeat.monthly.mode"
                      aria-label="Repeat monthly on"
                      value="on"
                      checked={isActive}
                      onChange={handleChange}
                  />
              )}
          </div>
          <div className="col-sm-2">
              {translateLabel(translations, 'repeat.monthly.on_day')}
          </div>
      </div>

      <div className="col-sm-2 day-of-month-selector">
        {/*<select*/}
        {/*  id={`${id}-day`}*/}
        {/*  name="repeat.monthly.on.day"*/}
        {/*  aria-label="Repeat monthly on a day"*/}
        {/*  className="form-control"*/}
        {/*  value={on.day}*/}
        {/*  disabled={!isActive}*/}
        {/*  onChange={numericalFieldHandler(handleChange)}*/}
        {/*>*/}
        {/*  {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}*/}
        {/*</select>*/}

        <SplitButton
            bsStyle={'link'}
            id={`${id}-day`}
            name="repeat.monthly.on.day"
            aria-label="Repeat monthly on a day"
            key={on.day}
            disabled={!isActive}
            onSelect={eventKey => numericalFieldHandler(handleChange)({target: {name: 'repeat.monthly.on.day', value: eventKey}})}
        >
            {/*{[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}*/}
            {[...new Array(31)].map((day, i) => <MenuItem eventKey={i+1}>{i + 1}</MenuItem>)}
        </SplitButton>
      </div>
    </div>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOn;
