// 1st thing
const printToDom = (divID, stringToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = stringToPrint;
};

// 2nd export
export default { printToDom };
