const container = document.querySelector('.container');

function createDivs(elements) {
    container.style.cssText = `grid-template-rows: repeat(${elements}, 1fr)`;
    container.style.cssText = `grid-template-columns: repeat(${elements}, 1fr)`;


    let rows_times_columns = elements*elements;
    for (let i=1; i<=rows_times_columns; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');    

        div.addEventListener('mouseover', () => {
            div.style.cssText = "background-color: white";

        })

        div.addEventListener('mouseout', () => {
            div.style.cssText = "background-color: black";

            })

        container.appendChild(div);
        
    }
}

createDivs(16)


function button_action() {
    let elements = prompt('How many rows and columns should I draw?');
    while (elements > 100) {
        elements = prompt('Can\'t render more than a hundred, choose again');
    }
    const el = document.querySelector('container');
    const all_divs = document.getElementsByClassName('grid-item');
    console.log(all_divs)
    
    for (i=all_divs.length-1; i>=0; i--) {
        all_divs[i].remove()
    }
    // container.style.cssText = `grid-template-rows: repeat(1, 1fr)`;
    // container.style.cssText = `grid-template-columns: repeat(1, 1fr)`;
    createDivs(elements);
}

