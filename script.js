fetch('https://proxylast-1.onrender.com', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, phone })
})
.then(res => res.json())
.then(data => {
  if (data.ok) {
    messageEl.textContent = 'Спасибо! С вами свяжется модератор.';
    messageEl.style.color = 'green';
    this.reset();
  } else {
    throw new Error('Ошибка сервера');
  }
})
.catch(() => {
  messageEl.textContent = 'Ошибка отправки. Попробуйте позже.';
  messageEl.style.color = 'red';
});
