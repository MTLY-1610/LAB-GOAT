const textElement = document.getElementById("text");
const inputElement = document.querySelector("input");

/** the startgGame function loads the game
 */

let state = {};
function startGame() {
  showTextNode();
}

let currentTextNodeIndex = 0

/**
 * this function diplay the text showing the text nodes/the text part of the game/the scenario stored in  the nodes.js folder.
 */
function showTextNode() {

  if (currentTextNodeIndex === 2 || currentTextNodeIndex === 6 || currentTextNodeIndex === 8 || currentTextNodeIndex === 9) {
    const container = document.querySelector('.container')
    container.removeChild(container.children[2])
    container.removeChild(container.children[1])
  }

  const textNode = textNodes[currentTextNodeIndex];
  textElement.innerText = textNode.text;
}

/**
 * this function is the answer part, two possible answers possible. the player is led to what to type usually yes or no, exept in textNode:0, if the answer differs from the textNode options the placeholher display "type correctly"
 */

function submitAnswer() {
  const answer = inputElement.value;
  inputElement.value = "";

  // check the answer
  const textNode = textNodes[currentTextNodeIndex];
  if (answer.toUpperCase() === textNode.options[0].text) {
    currentTextNodeIndex = textNode.options[0].nextTextNode;
    showTextNode();
  }
  if (answer.toUpperCase() === textNode.options[1].text) {
    currentTextNodeIndex = textNode.options[1].nextTextNode;
    showTextNode();
  }

  if (answer.toUpperCase() !== textNode.options[0].text || answer.toUpperCase() !== textNode.options[1].text) {
    inputElement.placeholder = 'Type correctly'
  }

}

/**
 * this function take the answer part and depending of it's value send  the user to the next textNode. "
 */

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

startGame();

