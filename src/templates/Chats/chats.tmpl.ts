export const ChatsPageTmpl = `<div class="chats-page">
        <div class="chats-left-panel">
            <div class="top-bar">
                <button class="plus-btn" id="addChat">+</button>
                {{{profileBtn}}}
            </div>
            <div class="new-chat-name modal">
                <input class="search" placeholder="Введите имя чата"/>
                <button class="new-chat-name-submit" id="newChatSubmit">Добавить</button>
            </div>
            <input class="search" placeholder="Поиск"/>
            <div class="chats-list">
                {{{chatRooms}}}
            </div>
        </div>
        <div class="chats-conversation">
            <div class="chats-conversation-top">
                {{{currentChatRoom}}}
            </div>
            <div class="users-in-chat">{{{users}}}</div>
            <div class="chat-history" id="chatHistory">{{{history}}}</div>
            <div class="chat-message">
                <textarea contenteditable="true" id="sendMessageInput" class="chat-message-field"></textarea>
                <button class="chat-send-btn" id="sendMessageSubmit">&#8594;</button>
            </div>
        </div>
    </div>`;
