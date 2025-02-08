const febHolidays = [
    "Dear Kochee, please scroll down😊",
    "Please this is a cycle of love, feel it well💓",
    "You are my best friend and true love😊",
    "You are the one for me and I'm yours🤩",
    "I need you in my sad times and happy times🤨",
    "You are enough in the journey of life❤",
    "I have loved you intensely, I love you❤️",
    "You're my everything🤞✔",
    "You are my soulmate✨💕",
    "And of course... you are my baby.....",
    "My future wife🤭",
    "I will always be there for you😊",
    "No matter how far we are🥰",
    "I promise I will never disappoint you🤞",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive🤞✍",
    "In one word, you're just perfect😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "I'll always be with you🤞✔",
    "You are never alone💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you😒",
    "And trust me I dont want anyone else🥰",
    "There's no one better than you❤️",
    "You're the best partner!!💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "It feels good when I'm with you😍",
    "I want to share all my life with you💓",
    "There were some hardships,😢",
    "but we overcame most of them🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you,😘",
    "my unconditional love,my partner in crime💖",
    "Please take care of love who really loves you❤",
    "I'm and will be always falling for you🤞",
    "I thank God for being able to be in love with you🙏",
    "You're the love of my life😍",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
