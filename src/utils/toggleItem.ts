export default function toggleModal(selector) {
  const modal = document.querySelectorAll(selector)[0];
  modal.classList.toggle('d-flex');
}
