import { PartyForm } from "./PartyForm.js";
import { Reservations } from "./Reservations.js";

export const ButtonsTheClown = () => {
    return `
    <h1>Buttons The Clown</h1>
    <section class="partyForm">
    ${PartyForm()}
    </section>
    <section class="reservations">
    <h2>Reservations</h2>
    ${Reservations()}
    </section>
    `
}