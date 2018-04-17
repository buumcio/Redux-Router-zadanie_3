import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imgUrl} alt="country photo" />
    </div>
);

export default CountryFlag;