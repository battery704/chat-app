<script src="/socket.io/socket.io.js"></script>


    
        const socket = io();
        const send = document.getElementById("sendBtn");
        const messageInput = document.getElementById("messageInput");
        const allmessagesi = document.getElementById("messages");
        const outgoing =document.getElementById("out")
        socket.on("message", (mess) => {
            const p = document.createElement('p');
            p.innerText = mess;
            
            allmessagesi.appendChild(p);
            allmessagesi.insertAdjacentHTML('beforeend', '<br>');
            //allmessagesi.textContent += '\n';
            console.log(mess);
        });
        send.addEventListener("click", (e) => {
           
            const mess = messageInput.value;
            socket.emit("user-message", mess);
            const p=document.createElement('p');
            p.innerText=mess;
            outgoing.appendChild(p);
        });
    