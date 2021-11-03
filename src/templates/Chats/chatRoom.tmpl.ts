export const ChatRoomTmpl = `
<div class="top-chats-item" data-id={{{id}}}>
        <div class="image-placeholder">
            <img alt="" src={{{avatar}}}>
        </div>
        <div class="chat-info">
            <span class="chat-info-name">{{{title}}}</span>
        </div>
        <button class="chat-settings" id="openSettings">&#9881;</button>
        <div class='settings-modal'>
            <input placeholder="Введите никнейм пользователя"/>
            <button id="addUserByLogin">Добавить</button>
        </div>
    </div>

`;
