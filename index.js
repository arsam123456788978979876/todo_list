const save_button = document.querySelector("#save_btn");
const title_input  = document.querySelector("#title")
const list = document.querySelector(".list")

let todo_list = [];

function renderItem(title) {
    //<div class="item">
    const item = document.createElement("div")
    item.classList.add("item")

    //<input type="checkbox"/>

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type" , "checkbox")

    //<span>Item 1</span>

    const span = document.createElement("span");
    span.textContent = title


    item.appendChild(checkbox);
    item.appendChild(span)


    list.appendChild(item)
}

function clearInput() {
    title_input.value = ""
}

function renderList() {
    for(let i=0; i<todo_list.length; i++) { // همیشه فور برامون کار نمیکنه چون شاید به احتمال زیاد نال برگردونه ما باید شرط بزاریم که همیشه بهمون ارایه برگردونه
        const title = todo_list[i]
        renderItem(title)
    }
}

function syncStorage(title) {
    todo_list.push(title);
    const next_list = JSON.stringify(todo_list);
    localStorage.setItem("my_list" , next_list );
}

function loadFromStorage() {
    let listFromStorage= JSON.parse(localStorage.getItem("my_list")) || [];
// if( !previous_list ) { // تو این خط میگه اگر پریویس لیست وجود نداشت یا مساوی نال بود بیا برامون مساویش کن با ارایه
//     previous_list = []
// }
todo_list = listFromStorage


}

function events() {
    save_button.addEventListener("click" , ()=> {
        const val = title_input.value;
    
        if(val === "") {
            alert("hoyyyyyyyyy")
        }else {
            syncStorage(val)
            renderItem(val);
            clearInput();
        }
    
    })
}

function init() {
    loadFromStorage()
    renderList()
    events()
}






init()
