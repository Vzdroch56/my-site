const inputELement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listELement = document.getElementById('list')

const notes = [
]

function render() {
    listELement.innerHTML = ''
    if (notes.length === 0) {
        listELement.innerHTML = `<p>Нет элементов</p>`
    }
    for (let i = 0; i < notes.length; i++) {
    listELement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))   
    }
}

render()

listELement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === "toggle") {
            notes[index].completed = !notes[index].completed
        } else if (type === "remove") {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate (note, index) {
    return `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span class ="${note.completed ? 'notes' : ''}">${note.title}</span>
                <span>
                    <span class="btnNotes ${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                    <span class="btnNotes" data-type="remove" data-index="${index}">&times;</span>
                </span>
                </li>
    `
}


createBtn.onclick = function () {
    if (inputELement.value.length === 0) {
        return
    }
    // listELement.innerHTML = 
    const newNote = {
        title: inputELement.value,
        completed: false,
    }
    //listELement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
    notes.push(newNote)
    render()
inputELement.value = ''
}
