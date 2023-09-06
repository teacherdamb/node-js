//IMPORT NAME FUNCTIONS BEGIN

const { Person } = require("./index");

require("../modules/path");

//IMPORT FUNCTION ENDS

function buttonTest() {
  alert("O botão foi clicado!");
}

document.getElementById("test-id").onclick = buttonTest;
