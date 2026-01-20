let count=0;

function increment(){
    count++;
    document.querySelector('#count').innerText=count;
}

function decrement(){
    count--;
    document.querySelector('#count').innerText=count;
}

function changebg(){
    let r=Math.trunc(Math.random()*256);
    let g=Math.trunc(Math.random()*256);
    let b=Math.trunc(Math.random()*256);

    const body=document.querySelector('body');
    body.style.cssText=`background-color:rgb(${r} ${g} ${b})`;

    const h2=document.querySelector('#rgb');
    h2.innerHTML=`RGB: (${r} ${g} ${b})`;
}
