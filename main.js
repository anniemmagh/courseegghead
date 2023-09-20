// function container (bgColor) {
// const main = document.getElementById('main')
//     const box = document.createElement('div')
//     box.style.width='200px';
//     box.style.height ='200px';
//     box.style.backgroundColor = bgColor || 'purple';
//     main.appendChild(box)
// }
// container()




// const input_todo =document.getElementById('input_todo')
// const addTodo =document.getElementById('button')
// const todoList = document.getElementById('inputList')
// function addTodo(){
//     const textinput =input_todo.value;
//     if(textinput ===''){
//         alert('Please add your task....')
//     }
//     const list = document. createElement('li');
//     list.innerHTML = `
//     <input type='checkbox' class='check' />
//     <span>${textinput}</span>
//     <button id='delete_button'>Delete</button>
//     `
//     todoList.appendChild(list);
// }
// addTodo.addEventListener("click", addTodos)
function container(bgColor){
    const main = document.getElementById('main')
    const box_one = document.createElement('div')
    const box_two = document.createElement('div')
    const box_three = document.createElement('div')
    box_one.style.width ='200px'
    box_one.style.height= "200px"
    box_one.style.backgroundColor = bgColor || 'purple'
    main.appendChild(box_one)
    box_two.style.width = '200px'  
    box_two.style.height = '200px'  
    box_two.style.backgroundColor = bgColor || 'green'
    main.appendChild(box_two)
    box_three.style.width = '200px'
    box_three.style.height = '200px'
    box_three.style.backgroundColor = bgColor || 'red'
    main.appendChild(box_three)
    const btn = document.createElement('button')
    btn.innerHTML = `
    <button id='button_one'>button one</button>
    <button id='button_two'>button two</button>
    <button id='button_three'>button three</button>
    `
    btn.appendChild(btn)
}
container()

