const textElement = document.getElementById('text')
const inputElement = document.querySelector('input')

let state = {}

function startGame() {
    showTextNode()
}

let currentTextNodeIndex =0


function showTextNode() {
    const textNode = textNodes[currentTextNodeIndex]
    textElement.innerText = textNode.text
}

function submitAnswer() {
    const answer = inputElement.value
    inputElement.value = ""
    

    // check the answer
    const textNode = textNodes[currentTextNodeIndex]
    if (answer.toUpperCase() === textNode.options[0].text) {
        console.log("HUUUUUUMAAAAN")
        currentTextNodeIndex = textNode.options[0].nextTextNode
        showTextNode()
        
    }
   
    

    
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

startGame();

