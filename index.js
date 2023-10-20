document.addEventListener("DOMContentLoaded", function () {
  const bodyRef = document.body;
  const pElement = document.createElement("p");
  pElement.classList = "signature";
  pElement.innerText = "- me_zu_zu";

  bodyRef.appendChild(pElement);
});
