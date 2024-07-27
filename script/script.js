
let container = document.getElementById('container');

let count = 0;
for(let i = 0; i< 8; i++)
{
    for(let j = 0; j< 8; j++)
    {
        let square = document.createElement('div');
        square.classList.add('box');

        if((i+j)%2)
        {
            square.classList.add('color1');
        }
        else
        {
            square.classList.add('color2');
        }

        square.textContent = count++;

        container.appendChild(square);
    }
}