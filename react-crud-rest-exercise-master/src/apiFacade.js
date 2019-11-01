let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    };
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
}

function apiFacade() {
    function getPersons() {
        return fetch(URL).then(handleHttpErrors);
    }

    async function addEditPerson(person) {
        if (person.id === '') {
            let options = makeOptions('POST', person);
            await fetch(URL, options).then(handleHttpErrors);

        } else {
            const editURL = URL + '/' + person.id;
            let options = makeOptions('PUT', person);
            await fetch(editURL, options).then(handleHttpErrors);

        }
    }

    async function deletePerson(id) {
        const deleteURL = URL + '/' + id;
        let options = makeOptions('DELETE');
        await fetch(deleteURL, options).then(handleHttpErrors);
    }

    return {
        getPersons,
        addEditPerson,
        deletePerson
    };
}
const returnValue = apiFacade();
export default returnValue;









