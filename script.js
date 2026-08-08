(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "jajaj noo ¿Estás seguro?",
    "¿Súper seguro?",
    "¿Súper hiper mega segurísimo?",
    "¿Estás decidido?",
    "Ay no vale... Por fa chamo...",
    "Piénsalo bien ¯\\_(ツ)_/¯",
    "Si dices que no estaré chimbo...",
    "Muyyyyyy chimbo...",
    "Estaré muy muy muy muy triste...",
    "Ya vale, dale en Sip... 🥺",
    "Es bromita, di que sí mailove ♡♡"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
    yesButton.style.padding = `${parseFloat(window.getComputedStyle(yesButton).paddingTop) * 1.2}px ${parseFloat(window.getComputedStyle(yesButton).paddingLeft) * 1.2}px`;
}

function handleYesClick() {
    const h1 = document.querySelector('h1');
    const carta = document.querySelector('.carta');
    const buttonsContainer = document.querySelector('.buttons');
    const gif = document.querySelector('.gif_container img');

    if (h1) h1.textContent = "¡Awww Gracias por perdonarme! ❤️";
    if (carta) carta.textContent = "Te quiero Paolo. Cuidaré mucho mejor lo nuestro ya sea como sólo amigos o como lo que tú quieras, yo estaré aquí lo que tú quieras";

    if (buttonsContainer) {
        buttonsContainer.style.display = 'none';
    }

    // Cambia al gatito tierno, feliz y bailando con corazones
    if (gif) {
        gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZxdnE3YTdhYjl4dWVuaG03Z2lpc2h2MjNxbDUza3lhOW0xb2I0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/pbKSEFrEEudOIclaL8/giphy.gif"; 
    }
}
