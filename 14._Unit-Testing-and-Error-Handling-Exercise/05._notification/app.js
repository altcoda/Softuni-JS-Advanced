function notify(message) {

  const hideDiv = (e) => e.target.style.display = 'none';

  const notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', hideDiv);
}
