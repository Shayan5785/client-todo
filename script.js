const input = document.querySelector('input')
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')
const toggle = document.querySelector('#toggle')
const body = document.body

submit.addEventListener('click',e=>{
    if (input.value) {
        const li = document.createElement("li");
        const textnode = document.createTextNode(input.value);
        li.appendChild(textnode);
        document.querySelector('ol').appendChild(li);
        li.addEventListener('click', e=> li.className ? li.classList.remove('MyClass') : li.classList.add('MyClass'))
        clear.addEventListener('click',e=>li.remove())
    }
    input.value = ""
    e.preventDefault()
})


toggle.addEventListener('click', ()=> body.className ? body.classList.remove('toggle'): body.classList.add('toggle'))