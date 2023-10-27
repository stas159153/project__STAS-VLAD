

  const g4box = document.querySelector(".game-4__box");
  const g4conteiner = document.querySelector(".game-4__conteiner");
  let adaptive = 720;
  if (Number(window.innerWidth) + 0 <= 833) {
    adaptive = 500;
    console.log(window.innerWidth);
  }
  if (Number(window.innerWidth) + 0 <= 610) {
    adaptive = 270;
    console.log(window.innerWidth);
  }
  g4conteiner.style.width = adaptive + "px";
  g4conteiner.addEventListener("click", (event) => {
    console.log(event);
    let a;
    let b;
    if ( adaptive >= 720) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
    } else if (!window.screenLeft && adaptive >= 500) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
    } else if (!window.screenLeft && adaptive >= 270) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
    }
  });

g4conteiner.addEventListener('click', event =>{
console.log(event.offsetX,event.offsetY);
})


