const applicationState = {
    partyRequests: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchRequests = () => {
    return fetch(`${API}/partyRequests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                applicationState.partyRequests = serviceRequests
            }
        )
}

export const sendRequests = (partyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(partyRequest)
    }


    return fetch(`${API}/partyRequests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/partyRequests/${id}`, {method: "DELETE"})
        .then (
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const getReservations = () => {
    return applicationState.partyRequests.map(reservation => ({...reservation}))
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.clowns = data
        }
    )
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}