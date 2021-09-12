import Chats from "./chats";
import {render} from "../../utils/renderDOM";

const data = {
    title: 'Вход',

};

const page = new Chats(data);

render('#page-content', page);
