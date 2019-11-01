const URL = "http://localhost:3333/";


function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
}

const countryFacade = () => {

    const getLabels = () => {
        return fetch(URL + 'labels').then(handleHttpErrors);
    }

    const getCountries = () => {
        return fetch(URL + 'countries').then(handleHttpErrors);
    }
    return {
        getLabels,
        getCountries
    }
}

export default countryFacade();