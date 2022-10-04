import { cookies } from "./modules/cookies.js";
import { phoneMovement } from "./modules/phoneMovement.js";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
    cookies();
    // phoneMovement();
});
