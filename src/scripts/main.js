import { ButtonsTheClown } from "./ButtonsTheClown.js";
import { fetchRequests, fetchClowns } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then (
        () => {
    mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        console.log("State of data has changed. Regenerating HTML...")
        render()
    }
)