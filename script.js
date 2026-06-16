function typeWriter(el, text, speed = 40) {
  let i = 0;
  el.innerHTML = "";

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

function startTyping() {
  const items = document.querySelectorAll(".typewriter");

  items.forEach((el, i) => {
    setTimeout(() => {
      typeWriter(el, el.dataset.text);
    }, i * 1200);
  });
}

window.onload = startTyping;
