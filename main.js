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
// function container(bgColor){
//     const main = document.getElementById('main')
//     const box_one = document.createElement('div')
//     const box_two = document.createElement('div')
//     const box_three = document.createElement('div')
//     box_one.style.width ='200px'
//     box_one.style.height= "200px"
//     box_one.style.backgroundColor = bgColor || 'purple'
//     main.appendChild(box_one)
//     box_two.style.width = '200px'  
//     box_two.style.height = '200px'  
//     box_two.style.backgroundColor = bgColor || 'green'
//     main.appendChild(box_two)
//     box_three.style.width = '200px'
//     box_three.style.height = '200px'
//     box_three.style.backgroundColor = bgColor || 'red'
//     main.appendChild(box_three)
//     const btn = document.createElement('button')
//     btn.innerHTML = `
//     <button id='button_one'>button one</button>
//     <button id='button_two'>button two</button>
//     <button id='button_three'>button three</button>
//     `
//     btn.appendChild(btn)
// }
// container()

// setInterval მეთოდით გავაკეთოთ ისეთი ფუნქცია რომ მაგალითად რაიმე ცვლადი მქონდეს საწყისად
// number 10 და როცა setInterval მეთოდით ჩამოვა 0-მდე უკან  კონსოლში დამიბეჭდოს "happy new year" 
// და არ დაგავიწყდეთ რომ ამის შემდეგ ფუნქცია უნდა გაჩერდეს.
// let counter = 10;
// let Countdown = setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     console.log("HAPPY NEW YEAR!!!!!!!!!!!!!!!");
//     clearInterval(Countdown);
//   }
// }, 1000);


// დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად მიიღებს ისეთ რიცხვებს
// რომლის დახმარებითაც უნდა გამოვითვალო მაგალითად რამდენი წელი გვაკლდება თითოეულს
// პენსიამდე და ეს ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.




// function myData(myAge,retirementAge){
// const years =  retirementAge - myAge;
// return years;
// }
// console.log(myData(21,65))



// დავამუშავოთ ეს მასივი შესაბამისად ანუ უნდა შეგვეძლოს რომ მივწვდეთ ამ მასივში მაგალითად name
// და შემდეგ if დავწეროთ რომ თუ მაგალითად ამ მასივში ნამდვილად გვაქვს რომელიმე სახელი დაგვიბეჭდოს
// რომ ნაპოვნია და მისი ასაკიც არის შესაბამისი რაც მასივში გვიწერია, და ასევე მისი თვალის ფერი 
// არის და შესაბამისი eye_color,ამას უკვე template literals მეთოდით გავაკეთებდი.აქ უბრალოდ 
// array ერთერთი მეთოდი დაგეხმარებოდათ და ეცადეთ მასივების დასამუშავბლად რა მეთოდი გამოიყენება 
// ყველაზე ხშირად თქვენით მოძებნოთ მარტივია ძაან.

const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      age:45,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      age:20,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      age:25,
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      age:33,
      eye_color: "blue",
      gender: "male",
    },
  ]
  const Name = "Leia Organa";
  
  const character = characters.find((char) => char.name === Name);
  
  if (character) {
    console.log(`${character.name} has been found. age: ${character.age}. eye Color: ${character.eye_color}`);
  } else {
    console.log(`${Name} was not found.`);
  }