import React from "react";

const CountryTable = props => {
    const { countries, labels } = props;

    const hiddenValues = array => {
        const amountValues = array.length - 1;
        return ((amountValues <= 1) ? '' : ' (+' + amountValues + ')');
    };

    return (
        <div>
            <table className="table">
                <thead><tr>
                    {labels.map((label, index) => (
                        <th key={index}>{label}</th>
                    ))}</tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <tr key={country.topLevelDomain}>
                            <td>{country.name}</td>
                            <td>{country.capital}</td>
                            <td>{country.region}</td>
                            <td>{country.population}</td>
                            <td>{country.area}</td>
                            <td>
                                {country.timezones[0]}
                                {hiddenValues(country.timezones)}
                            </td>
                            <td>
                                {country.borders[0]}
                                {hiddenValues(country.borders)}
                            </td>
                            <td>
                                {country.topLevelDomain[0]}
                                {hiddenValues(country.topLevelDomain)}
                            </td>
                            <td>
                                {country.currencies[0]}
                                {hiddenValues(country.currencies)}
                            </td>
                            <td>
                                {country.languages[0]}
                                {hiddenValues(country.languages)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CountryTable;

