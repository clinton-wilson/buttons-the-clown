import { getReservations, deleteRequest, getClowns } from "./dataAccess.js";

const convertReservationsToList = (reservation) => {
    const clowns =getClowns()
    return `<li>
            ${reservation.childName}'s party is on ${reservation.reservationDate} for ${reservation.reservationLength}
            <button class="reservation__delete"
                id="reservation--${reservation.id}">
                DENY!
            </button>
            <select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${
                clowns.map(
                    clown => {
                        `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
            }
            </select>
            </li>
    `
}

export const Reservations = () => {
    const reservations = getReservations()
    
    let html = `
        <ul>
            ${reservations.map(convertReservationsToList).join("")
        }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteRequest(parseInt(reservationId))
    }
})