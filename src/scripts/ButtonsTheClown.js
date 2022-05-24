import { PartyForm } from "./PartyForm.js";
import { Reservations } from "./Reservations.js";

export const ButtonsTheClown = () => {
    return `<img src=https://media.vanityfair.com/photos/54848cbe98f2d00004ac8e89/master/pass/s-stephen-king-it-movie-rexusa_953600a.jpg alt=pennywise the dancing clown>
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