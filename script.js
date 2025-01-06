const selectionButtons = document.querySelectorAll("[data-selection]")

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click" , e => {
        selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selectionName){
    console.log(selectionName)
}