const ol = document.querySelector('.wrap__feature-list-one');
const input = document.querySelector('.wrap__tag-input');
const btn = document.querySelector('.wrap__tag-btn');
const button = document.querySelector('.wrap__choice-btn-remove');
const li = document.querySelector('.wrap__feature-item')
const array = [];



btn.addEventListener('click', function () {
    if(input.value.length === 0) {
        return
    }
const li = document.createElement('li');
array.push(li);
li.classList.add('wrap__feature-item');
li.textContent = input.value;
ol.append(li)
input.value = ''
console.log(array);
});

input.addEventListener('input', function(e){
   if (e.target.value.length > 0) {
    btn.removeAttribute('disabled')
   }else {
    btn.setAttribute('disabled', '')
   }
});

button.addEventListener('click', function(){
    array.forEach(function(element){
     element.remove()
    })
});

