let btn = document.querySelector('[data-btn]')
let output = document.querySelector('[data-output]')
let arr = [12,5,6,17,63,2]

function addUp (sum,currValue){
    return sum+currValue 
}

function reduced(){
    let added = arr.reduce(addUp)
    output.textContent = added

}

btn.addEventListener('click', reduced)
