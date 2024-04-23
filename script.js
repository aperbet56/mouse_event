// Récupération de l'élément container
const container = document.querySelector(".container");

// Ecoute de l'événement "mousemove"
window.addEventListener("mousemove", (e) => {
  // Mise en place de la structure HTML
  container.innerHTML = `
        <div class="mouse__event">
        <h2>Mouse X Prosition(px)</h2>
        ${e.clientX}
      </div>
      <div class="mouse__event">
        <h2>Mouse Y Prosition(px)</h2>
        ${e.clientY}
      </div>
  `;
  //console.log(e.clientX);
  //console.log(e.clientY);
});
