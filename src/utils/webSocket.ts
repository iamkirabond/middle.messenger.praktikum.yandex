
export default class Socket{
    socket: WebSocket;
    constructor(userId: string, chatId: string, token: string){
        this.socket = new WebSocket( `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`); 
        

        this.socket.addEventListener('open', this.isOpen.bind(this));
        this.socket.addEventListener('close', this.isClosed.bind(this));
        this.socket.addEventListener('message', this.getMessage.bind(this));
        this.socket.addEventListener('error', this.getError.bind(this));
    }
    
    isOpen() {
        console.log('Соединение установлено');

        this.socket.send(JSON.stringify({
        content: 'Моё первое сообщение миру!',
        type: 'message',
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
    }
   
    getError(event) {
        console.log('Ошибка', event.message);
   }
      
}