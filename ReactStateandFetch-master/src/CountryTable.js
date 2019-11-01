import React, { useState, useEffect } from "react";

const CountryTable = props => {
    const pageSize = 4;
    const { countries, labels } = props;
    const [countriesPrPage, setCountriesPrPage] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    let pageTotal = (countries.length / pageSize);

    const pageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= pageTotal; i++) {
            buttons.push(<button key={i} onClick={() => updatePage(i)} > {i} </button >);
        }
        return buttons;
    }

    useEffect(() => {
        let startIndex = (pageNum - 1) * pageSize;
        let endIndex = pageNum * pageSize;
        setCountriesPrPage(countries.slice(startIndex, endIndex));
    }, [countries, pageNum]);

    const updatePage = (currentPage) => {
        setPageNum(currentPage);
    }

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
                    {countriesPrPage.map(country => (
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
            <p>{pageButtons()}</p>
        </div>
    );
};
export default CountryTable;

