const $nose = document.getElementsByClassName("nose")[0];
const $sound = document.getElementById("sound");
$nose.addEventListener("mouseover", () => {
  $sound.play();
});
