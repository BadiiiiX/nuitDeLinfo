introMsg = "S I S";
introTitle = document.getElementById("intro-title");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeIntroMsg() {
    for (let i = 0; i < introMsg.length; ++i) {
        await sleep(500);
        introTitle.innerText += introMsg[i];
    }
}

writeIntroMsg();