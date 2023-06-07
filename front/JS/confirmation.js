const elementCommande = new URLSearchParams(window.location.search).get("elementCommande");

if(elementCommande === null || elementCommande === ""){
    alert ("Une erreur s'est produite lors du passage de notre commande sur notre site, excusez-nous !");
    window.location.href = "index.html";
 }
 else{

    const numeroCommande = document.getElementById("elementCommande");
    numeroCommande.innerText = elementCommande;
    console.log(numeroCommande);
}