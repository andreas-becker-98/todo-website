/*

    FUNCTIONS

*/

function onAddButtonClick() {
    const textContent = addItemTextEl.value.trim();

    if (textContent === "") {
        // No text means no To-Do task.
        return;
    }
    if (existingTasks.includes(textContent)) {
        // We also do not want to add existing tasks.
        alert(`Task "${textContent}" already exists!`);
        return;
    }

    existingTasks.push(textContent);
    todoParentEl.appendChild(createTodoElement(textContent, function(obj) {
        todoParentEl.removeChild(obj);
    }));

    // Clear input
    addItemTextEl.value = "";
}

function onEditComplete() {
    const oldContent = this.parentElement.children[0].textContent;
    const newContent = this.value.trim();

    if(newContent !== oldContent && existingTasks.includes(newContent)) {
        // We also do not want to add existing tasks.
        alert(`Task "${newContent}" already exists!`);
    }
    else if(newContent !== "") {
        existingTasks[existingTasks.indexOf(oldContent)] = newContent;
        this.parentElement.children[0].textContent = newContent;
    }
    
    const childEls = this.parentElement.children;
    childEls[0].hidden = false;
    childEls[1].hidden = true;
    childEls[2].hidden = this.parentElement.classList.contains("completed");
    childEls[3].hidden = false;
}

function createTodoElement(textContent, onDelete) {
    const todoElement = document.createElement("div");
    todoElement.innerHTML = `<p>${textContent}</p>
                            <input type="text" placeholder="" hidden>
                            <button class="btn-complete">Complete</button>
                            <button class="btn-delete">Delete</button>`;
    
    // Double Click text event
    todoElement.children[0].addEventListener("dblclick", function() {
        if (this.parentElement.classList.contains("completed") && !ALLOW_EDITING_COMPLETED) {
            return;
        }

        this.parentElement.children[1].value = this.parentElement.children[0].textContent;
        this.parentElement.children[1].placeholder = this.parentElement.children[0].textContent;
        
        this.hidden = true;
        this.parentElement.children[1].hidden = false;
        this.parentElement.children[2].hidden = true;
        this.parentElement.children[3].hidden = true;

        
        this.parentElement.children[1].focus();
    });

    /* Task editing events */
    todoElement.children[1].addEventListener("blur", onEditComplete);
    todoElement.children[1].addEventListener("change", onEditComplete);
    
    // Complete button event
    todoElement.children[2].addEventListener("click", function() {
        todoElement.classList.add("completed");
        this.hidden = true;
    });

    // Delete button event
    todoElement.children[3].addEventListener("click", function() {
        onDelete(todoElement);
    });
    
    return todoElement;
}



/*

    Program flow start

*/

// Change this to allow editing a completed task
const ALLOW_EDITING_COMPLETED = false;

const addItemTextEl = document.getElementById("add-item-text");
const addItemButtonEl = document.getElementById("add-item-button");
const todoParentEl = document.querySelector("main section");
const existingTasks = [];


addItemTextEl.addEventListener("change", onAddButtonClick);
addItemButtonEl.addEventListener("click", onAddButtonClick);