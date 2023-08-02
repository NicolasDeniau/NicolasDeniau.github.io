(function () {
    const isLightString = localStorage.getItem('light-mode');
    if (isLightString !== null) {
        const isLight = JSON.parse(isLightString);
        document.body.classList.toggle("light-mode", isLight);
    }
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        saveToLocalStorage();
    })
})();
function saveToLocalStorage () {
    // On vérifie si le body contient le thème lumineux
    // classList.contains() indique si l'élément contient une classe (true) ou non
    const isLight = document.querySelector('body').classList.contains('light-mode');

    // On transforme la valeur booléenne en chaîne de caractères pour garantir 
    // le bon enregistrement des données
    const isLightString = JSON.stringify(isLight);

    // On sauvegarde l'activation du thème lumineux dans le localStorage
    localStorage.setItem('light-mode', isLightString);
}
