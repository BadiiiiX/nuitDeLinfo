alert("test");

introMsg = "S I S";
introTitle = document.getElementById("intro-title");

for (let i = 0; i < introMsg.length; ++i) {
    introTitle.innerText += introMsg[i];
    await new Promise(r => setTimeout(r, 2000));
}
