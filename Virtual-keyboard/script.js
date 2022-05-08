dayNightTheme = () => {
    let date = new Date();
    let hour = date.getHours();
  
    if(hour >= 7 && hour < 19){
      document.body.style.backgroundColor = 'antiquewhite';
      document.body.style.color = 'gray';
    }
    else{
      document.body.style.backgroundColor = 'rgb(56, 29, 56)';
      document.body.style.color = 'gray';
    }
  }
  
  window.addEventListener('load', dayNightTheme);

let container = document.createElement("div");
container.innerHTML = `<div class="container">
<div class="wrapper">
    <div class="keyboard"></div>
    <div class="keyboard_lines">
        <div class="values">
            <div class="lines toggle" data-eng="\`" data-ru="Ё">\`</div>
            <div class="lines">1</div>
            <div class="lines">2</div>
            <div class="lines">3</div>
            <div class="lines">4</div>
            <div class="lines">5</div>
            <div class="lines">6</div>
            <div class="lines">7</div>
            <div class="lines">8</div>
            <div class="lines">9</div>
            <div class="lines">0</div>
            <div class="lines">-</div>
            <div class="lines">=</div>
            <div class="lines backspace">Backspace</div>
        </div>
        <div class="values">
            <div class="lines tab">Tab</div>
            <div class="lines toggle" data-eng="Q" data-ru="Й">Q</div>
            <div class="lines toggle" data-eng="W" data-ru="Ц">W</div>
            <div class="lines toggle" data-eng="E" data-ru="У">E</div>
            <div class="lines toggle" data-eng="R" data-ru="К">R</div>
            <div class="lines toggle" data-eng="T" data-ru="Е">T</div>
            <div class="lines toggle" data-eng="Y" data-ru="Н">Y</div>
            <div class="lines toggle" data-eng="U" data-ru="Г">U</div>
            <div class="lines toggle" data-eng="I" data-ru="Ш">I</div>
            <div class="lines toggle" data-eng="O" data-ru="Щ">O</div>
            <div class="lines toggle" data-eng="P" data-ru="З">P</div>
            <div class="lines toggle" data-eng="{" data-ru="Х">{</div>
            <div class="lines toggle" data-eng="}" data-ru="Ъ">}</div>
            <div class="lines slash toggle" data-eng="\\" data-ru="\\">\\</div>
        </div>
        <div class="values">
            <div class="lines capsLock">Caps Lock</div>
            <div class="lines toggle" data-eng="A" data-ru="Ф">A</div>
            <div class="lines toggle" data-eng="S" data-ru="Ы">S</div>
            <div class="lines toggle" data-eng="D" data-ru="В">D</div>
            <div class="lines toggle" data-eng="F" data-ru="А">F</div>
            <div class="lines toggle" data-eng="G" data-ru="П">G</div>
            <div class="lines toggle" data-eng="H" data-ru="Р">H</div>
            <div class="lines toggle" data-eng="J" data-ru="О">J</div>
            <div class="lines toggle" data-eng="K" data-ru="Л">K</div>
            <div class="lines toggle" data-eng="L" data-ru="Д">L</div>
            <div class="lines toggle" data-eng=";" data-ru="Ж">;</div>
            <div class="lines toggle" data-eng='\"' data-ru="Э">\"</div>
            <div class="lines toggle" data-eng="/" data-ru="/">/</div>
            <div class="lines enter">Enter</div>
        </div>
        <div class="values">
            <div class="lines shift shiftLeft">Shift</div>
            <div class="lines toggle" data-eng="Z" data-ru="Я">Z</div>
            <div class="lines toggle" data-eng="X" data-ru="Ч">X</div>
            <div class="lines toggle" data-eng="C" data-ru="С">C</div>
            <div class="lines toggle" data-eng="V" data-ru="М">V</div>
            <div class="lines toggle" data-eng="B" data-ru="И">B</div>
            <div class="lines toggle" data-eng="N" data-ru="Т">N</div>
            <div class="lines toggle" data-eng="M" data-ru="Ь">M</div>
            <div class="lines toggle" data-eng="<" data-ru="Б"><</div>
            <div class="lines toggle" data-eng=">" data-ru="Ю">></div>
            <div class="lines toggle" data-eng="?" data-ru=".">?</div>
            <div class="lines shift shiftRight">Shift</div>
            <div class="lines arrows arrowUp">↑</div>
        </div>
        <div class="values">
            <div class="lines ctrl ctrlLeft">Ctrl</div>
            <div class="lines">Fn</div>
            <div class="lines widows">Win</div>
            <div class="lines alt altLeft">Alt</div>
            <div class="lines space"></div>
            <div class="lines alt altRight">Alt</div>
            <div class="lines alt altRight"></div>
            <div class="lines ctrl ctrlRight">Ctrl</div>
            <div class="lines arrows arrowLeft">←</div>
            <div class="lines arrows arrowDown">↓</div>
            <div class="lines arrows arrowRight">→</div>
        </div>
    </div>
</div>
<input class="text" type="text">
</div>`;
document.body.append(container);
let lines = document.querySelectorAll(".lines");
let shifts = document.querySelectorAll(".shift");
let arrows = document.querySelectorAll(".arrows");
for (let i = 0; i < lines.length; i++) {
  lines[i].setAttribute("keyname", lines[i].innerText);
  lines[i].setAttribute("lowerCaseName", lines[i].innerText.toLowerCase());

  switch (lines[i].innerText) {
    case "{":
      lines[i].setAttribute("lowerCaseName", "[");
      break;
    case "}":
      lines[i].setAttribute("lowerCaseName", "]");
      break;
    case "`":
      lines[i].setAttribute("lowerCaseName", "~");
      break;
    case "\\":
      lines[i].setAttribute("lowerCaseName", "|");
      break;
    case "<":
      lines[i].setAttribute("lowerCaseName", ",");
      break;
    case ">":
      lines[i].setAttribute("lowerCaseName", ".");
      break;
    case '"':
      lines[i].setAttribute("lowerCaseName", "'");
      break;
    case ";":
      lines[i].setAttribute("lowerCaseName", ":");
      break;
      case 'arrowLeft':
        input.value += '←'
        break;
    case 'arrowRight':
        input.value += '→';
        break;
    case 'arrowDown':
        input.value += '↑';
        break;
    case 'arrowUp':
        input.value += '↓';
        break;   
  }
}
let currentLang = "eng";
const toggleLang = () => {
  if (currentLang === "eng") {
    currentLang = "ru";
  } else {
    currentLang = "eng";
  }
};
const changeLang = (key) => {
  toggleLang();
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].classList.contains("toggle")) {
      lines[i].innerText = lines[i].dataset[currentLang];
    }
  }
};
window.addEventListener("keydown", function (e) {
  if (e.shiftKey && e.ctrlKey) {
    changeLang();
  }
});

const input = document.querySelector("input");
const textString =
  "`~1!2@3#4$5%6^7&8*9(0)-_=+qwertyuiop[]asdfghjkl;'zxcvbnm,./?><|\":{} |йцукенгшщшзхъфывапролджэячсмитьбю";
let spaceKey = document.querySelector(".space");
let shiftLeft = document.querySelector(".shiftLeft");
let shiftRight = document.querySelector(".shiftRight");
let capsLock = document.querySelector(".capsLock");
let body = document.querySelector("body");
let text_input = document.querySelector(".text");
let keyboard = document.querySelector(".keyboard");
let wrapper = document.querySelector(".wrapper");
let arrowUp = document.querySelector(".arrowUp");
let arrowLeft = document.querySelector(".arrowLeft");
let arrowRight = document.querySelector(".arrowRight");
let arrowDown = document.querySelector(".arrowDown");


window.addEventListener("keydown", function (e) {
  if (input !== document.activeElement) {
    if (textString.includes(String(e.key).toLowerCase())) {
      input.value += e.key;
    }
    if (e.key === "Enter" || e.key === "CapsLock")
      if (e.key === "Backspace") {
        input.value = input.value.slice(0, input.value.length - 1);
      }
  }
});

window.addEventListener("keydown", function (e) {
  for (let i = 0; i < lines.length; i++) {
    if (
      e.key == lines[i].getAttribute("keyname") ||
      e.key == lines[i].getAttribute("lowerCaseName") ||
      e.key == lines[i].dataset.ru ||
      e.key.toUpperCase() == lines[i].dataset.ru
    ) {
      lines[i].classList.add("active");
    }
    if (e.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (e.code == "ShiftLeft") {
      shiftRight.classList.remove("active");
    }
    if (e.code == "ShiftRight") {
      shiftLeft.classList.remove("active");
    }
    if (e.code == "CapsLock") {
      capsLock.classList.toggle("active");
    }

  }
});

window.addEventListener("keyup", function (e) {
  for (let i = 0; i < lines.length; i++) {
    if (
      e.key == lines[i].getAttribute("keyname") ||
      e.key == lines[i].getAttribute("lowerCaseName") ||
      e.key == lines[i].dataset.ru ||
      e.key.toUpperCase() == lines[i].dataset.ru
    ) {
      lines[i].classList.remove("active");
      lines[i].classList.add("remove");
    }
    if (e.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    }
    if (e.code == "ShiftLeft") {
      shiftRight.classList.remove("active");
      shiftRight.classList.remove("remove");
    }
    if (e.code == "ShiftRight") {
      shiftLeft.classList.remove("active");
      shiftLeft.classList.remove("remove");
    }
    setTimeout(() => {
      lines[i].classList.remove("remove");
    }, 200);
  }
});
