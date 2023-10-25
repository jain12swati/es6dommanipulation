const button = document.getElementById("button");

const toasts = document.getElementById("toasts");

const messages = [
    'Message one', 
    'Go for it',
    'Let it go',
    'All is well',
    'Keep it cool',
    'Keep it fun',
    'Over and out',
    'This is music',
    'Live, learn, love'
];

const types = ['success', 'error', 'info']

button.addEventListener("click", ()=>{
    creteNotification();
});

function creteNotification(message = null, type  = null){
    const notif = document.createElement("div");

    notif.classList.add("toast");
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() =>{
        notif.remove()
    }, 3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}


function getRandomType(){
    return types[Math.floor(Math.random() * types.length)];
}