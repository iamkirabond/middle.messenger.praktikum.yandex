export default function  toggleModal(selector){
    let modal = document.querySelectorAll(selector)[0];
    modal.classList.toggle('d-flex');
}