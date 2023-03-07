const arrayColor = [
  {
    bg: "background-image: linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );",
    name: "East Bay",
  },
  {
    bg: "background-image: linear-gradient( 76.9deg,  rgba(255,90,90,1) 27.2%, rgba(130,5,255,1) 79.9% );",
    name: "Cerise",
  },
  {
    bg: "background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% );",
    name: "Denim",
  },
  {
    bg: "background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% );",
    name: "Blue Lagoon",
  },
  {
    bg: "background-image: radial-gradient( circle 685.3px at 47.8% 55.1%,  rgba(255,99,152,1) 0%, rgba(251,213,149,1) 90.1% );",
    name: "Hot Pink",
  },
  {
    bg: "background-image: radial-gradient( circle 941px at 2.6% 6.8%,  rgba(124,74,228,0.81) 15.9%, rgba(249,208,40,0.70) 88.6% );",
    name: "Lilac Bush",
  },
  {
    bg: "background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(162,102,246,1) 0%, rgba(203,159,249,1) 90% );",
    name: "Heliotrope",
  },
  {
    bg: "background-image: radial-gradient( circle 420px at -10.9% -25.7%,  rgba(223,5,5,1) 0%, rgba(235,244,60,1) 90.5% );",
    name: " Fire Bush",
  },
  {
    bg: "background-image: linear-gradient( 109.6deg,  rgba(39,142,255,1) 11.2%, rgba(98,113,255,0.78) 100.2% );",
    name: "Dodger Blue",
  },
  {
    bg: "background-image: linear-gradient( 97.3deg,  rgba(25,50,70,0.81) 10.7%, rgba(155,65,25,0.72) 39.5%, rgba(255,192,0,0.81) 69.7% );",
    name: "Raw Sienna",
  },
  {
    bg:"background-image: linear-gradient(225deg, #b9a55c 0, #b39757 12.5%, #a98752 25%, #9a754c 37.5%, #876345 50%, #72523e 62.5%, #604437 75%, #503931 87.5%, #42302c 100%);",
    name:"Happier Than Ever"
  }
];

function btnColor(gradient) {
  const idBoxWallpaper = document.getElementById("idBoxWallpaper");
  const color = document.getElementById(`${gradient}`).value;
  idBoxWallpaper.setAttribute("style", color);
}

function visible(element, view) {
  const id = document.querySelector(`${element}`);
  let visible = window.getComputedStyle(id).display;

  if (visible != "none") {
    console.log(visible);
    id.setAttribute("style", "display: none;");
  } else {
    console.log(visible);
    id.setAttribute("style", `display: ${view};`);
  }
}

function createElement() {
  const colorId = document.getElementById("idColorWallpaper");
  arrayColor.map(({ bg, name }) => {
    const createOption = document.createElement("option");
    createOption.innerText = name;
    createOption.value = bg;
    colorId.appendChild(createOption);
  });
}

function loadImage(element, img) {
  const idInput = document.getElementById(`${element}`);
  const idImg = document.getElementById(`${img}`);

  const url = idInput.value;

  //console.log(getApi(url));

  idImg.src = `${url}`;
  visible("#idPicture", "flex");
  console.log(idInput.value);
}

function getApi(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  console.log(url);
  req.onload = async () => {
    if (req.status === 200) {
      let data = await JSON.parse(req.responseText);
      console.log("mierda");
      console.log(data.results);
      return data.results;
    } else {
      const error = new Error(url);
      console.log(error + "\nStatus code:" + req.status);
    }
  };
  req.send();
}
