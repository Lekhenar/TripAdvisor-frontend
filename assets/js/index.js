document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded ! 🔥");
  const hearts = document.querySelectorAll(".fa-heart");

  hearts.forEach((heart) => {
    heart.addEventListener("click", (e) => {
      console.log(heart.classList.value); // "heart red"
      console.log(e.target);

      if (heart.classList.value.includes("red")) {
        heart.classList.remove("red");
        e.target.classList.remove("fa-solid");
        e.target.classList.add("fa-regular");
      } else {
        heart.classList.add("red");
        e.target.classList.add("fa-solid");
        e.target.classList.remove("fa-regular");
      }
    });
  });
  //   console.log(heart); // affiche l'élément
});
