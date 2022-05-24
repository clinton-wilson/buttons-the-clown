import { sendRequests } from "./dataAccess.js";

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>   
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>   
        <div class="field">
            <label class="label" for="attendees">Number of Attendees</label>
            <input type="number" name="attendees" class="input" />
        </div>   
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>   
        <div class="field">
            <label class="label" for="reservationDate">Reservation Date</label>
            <input type="date" name="reservationDate" class="input" />
        </div>   
        <div class="field">
            <label class="label" for="reservationLength">Party Length</label>
            <input type="text" name="reservationLength" class="input" />
        </div>   

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value 
        const attendees = document.querySelector("input[name='attendees']").value
        const address = document.querySelector("input[name='address']").value
        const reservationDate = document.querySelector("input[name='reservationDate']").value
        const reservationLength = document.querySelector("input[name='reservationLength']").value

        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attendees: attendees,
            address: address,
            reservationDate: reservationDate,
            reservationLength: reservationLength
        }

        sendRequests(dataToSendToAPI)

    }
})
