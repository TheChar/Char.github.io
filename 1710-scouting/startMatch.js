function addElement(parentId, elementTag, elementId, innerHtml) {
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = innerHtml;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

removeElement(matchNumLabel);
removeElement(matchNumText);
removeElement(inputDiv1);
removeElement(input1);
removeElement(teamNumLabel);
removeElement(teamNumText);
removeElement(inputDiv2);
removeElement(input2);
removeElement(allianceColorLabel);
removeElement(allianceColorText);
removeElement(inputDiv3);
removeElement(select1);
removeElement(option1);
removeElement(option2);
removeElement(startPosLabel);
removeElement(startPosText);
removeElement(inputDiv4);
removeElement(select2);
removeElement(option3);
removeElement(option4);
removeElement(option5);
removeElement(startPowerCellsLabel);
removeElement(startPowerCellsText);
removeElement(inputDiv5);
removeElement(select3);
removeElement(option6);
removeElement(option7);
removeElement(option8);
removeElement(option9);
removeElement(subButtonDiv);
removeElement(subButton);