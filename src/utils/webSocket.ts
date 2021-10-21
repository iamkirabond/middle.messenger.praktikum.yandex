import ChatMessage from "../components/chatMessage/ChatMessage";

export default class Socket{
    socket: WebSocket;
    history: HTMLElement;
    userId: Number;

    constructor(userId: string, chatId: string, token: string){
        this.socket = new WebSocket( `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`); 
        

        this.socket.addEventListener('open', this.isOpen.bind(this));
        this.socket.addEventListener('close', this.isClosed.bind(this));
        this.socket.addEventListener('message', this.getMessage.bind(this));
        this.socket.addEventListener('error', this.getError.bind(this));

        this.history = document.getElementById('chatHistory');
        this.userId = new Number(userId);
    }
    
    isOpen() {
        console.log('Соединение установлено');
        this.socket.send(JSON.stringify({
			content: '0',
			type: 'get old',
		}));
    }
    
    isClosed(event) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }
        
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    }

    getMessage(event) {
        console.log('Получены данные', event.data);   
        let response = JSON.parse(event.data);
        if(response.length > 1){
            response.forEach( msg => {
                this.showMessage(msg)
            })
            return;
        }
        if(response.type && response.type !== 'user connected'){
            this.showMessage(JSON.parse(event.data));
        }
    }
   
    getError(event) {
        console.log('Ошибка', event.message);
   }

    sendMessage(message){
        console.log('отправляем', message);
        this.socket.send(JSON.stringify(message));
    }

    showMessage(data){
        let msg = new ChatMessage({
            text: data.content,
            class: data.user_id == this.userId ? 'chat-msg-user' : 'chat-msg-other',
        }).render();
        this.history.innerHTML += msg;   
    }

}