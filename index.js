//had to add window.onload as a workaround to the async issue
window.onload = function () {
  const btnEl = document.querySelector(".btn");
  const closeIconEl = document.querySelector(".close-icon");
  const lightBoxEl = document.querySelector(".lightbox");
  const videoEl = document.querySelector("video");

  console.log(typeof btnEl);
  console.log(typeof closeIconEl);
  console.log(typeof lightBoxEl);

  btnEl.addEventListener("click", () => {
    console.log(typeof lightBoxEl);
    lightBoxEl.classList.remove("active");
  });

  closeIconEl.addEventListener("click", () => {
    console.log(typeof lightBoxEl);
    lightBoxEl.classList.add("active");
    videoEl.currentTime = 0;
  });
};
