// cette association permettra d'avoir des noms communs pour lors de l'affichage sur écran //
const names = {
  "typeOfLabourConstruction": "construction",
    "typeOfLabourDomesticWork": "travail domestique",
    "typeOfLabourHospitality": "typeOfLabourHospitality blabla ",
    "typeOfLabourOther": "autres formes de travail forcé",
    "typeOfSexProstitution": "prostitution ",
    "typeOfSexPornography": "Sexe et pornographie",
    "typeOfSexOther": "autre forme d'exploitation sexuelle"
}

//début du traitement en json//
fetch('list.json').then(function (response) {
  response.json().then(function (data) {

    // // j'initialise la variable resultat_etape_1
    // let resultat_etape_1 = 0

    // console.log(resultat_etape_1)
    // j'initialise la constante total afin de créer l'objet qui contiendra les objets avec le nombre total de fr bictime par type d'exploitation//
    const total = {
      //je les initialise à zéro//
    "typeOfLabourConstruction": 0,
    "typeOfLabourDomesticWork": 0,
    "typeOfLabourHospitality": 0,
    "typeOfLabourOther": 0,
    "typeOfSexProstitution": 0,
    "typeOfSexPornography": 0,
    "typeOfSexOther": 0
    }
      //après avoir récupérer le nombre pour une tranche d'âge , la boucle ajoute le résultat présent dans la l'objet suivant//
      data.forEach(function (tranche_age_obj) {
        total.typeOfLabourConstruction += tranche_age_obj.typeOfLabourConstruction
        total.typeOfLabourDomesticWork += tranche_age_obj.typeOfLabourDomesticWork
        total.typeOfLabourHospitality += tranche_age_obj.typeOfLabourHospitality
        total.typeOfLabourOther += tranche_age_obj.typeOfLabourOther
        total.typeOfSexProstitution += tranche_age_obj.typeOfSexProstitution
        total.typeOfSexPornography += tranche_age_obj.typeOfSexPornography
        total.typeOfSexOther += tranche_age_obj.typeOfSexOther


    })


    //le trie//

    const entries = Object.entries(total)

    const finalData = entries.map(([key, valueTotal]) => {
      return [names[key], valueTotal]
    }).sort((a, b) => b[1] - a[1])
    console.log(finalData)

    
    // console.log(total)

   let classement = document.querySelector(".classement");

      classement.innerHTML += "<li>"+ finalData + "</li>"
    
  })
})





