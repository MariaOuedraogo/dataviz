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

    
    console.log(total)

   
    //j'ajoute le classement des types d'exploitation dans la page  
   

    // let classement = document.querySelector(".classement");

    //   for (var i = 0; i < finalData.length; i++) {
    //     classement.innerHTML += "<li class='type_names'>"+ finalData[i][0] + "</li>"

    // }

    // var type_names = document.querySelectorAll(".type_names");

    // type_names.forEach(function (type_name) {
    //   type_name.addEventListener('click', function () {
    //     console.log(type_name.textContent); // Use textContent to get the text of the clicked element

    //     let details = document.querySelector(".details");
    //     for (var i = 0; i < finalData.length; i++) {
    //       details.innerHTML += "<p class='type_names'>"+ finalData[i][1] + "</p>"
  
    //   }
      
    //   });
    // });



    let classement = document.querySelector(".classement");

for (var i = 0; i < finalData.length; i++) {
  classement.innerHTML += "<li class='type_names'>" + finalData[i][0] + "</li>";
}

var type_names = document.querySelectorAll(".type_names");

type_names.forEach(function (type_name, index) {
  type_name.addEventListener('click', function () {
    console.log(type_name.textContent); // Use textContent to get the text of the clicked element

    let details = document.querySelector(".details");
    
    // Clear previous details content
    details.innerHTML = "";
    
    // Display the corresponding details for the clicked element
    details.innerHTML += "<p class='type_names'>" + finalData[index][1] + "</p>";

    
  });
});

 
    
  })
})






// fetch('detail.json').then(function (response){
  
//   response.json().then(function (data2) {
    

//     console.log(data2)
//     details.innerHTML += "<div class='definition'>" + data2.definition + "</div>";


//   })

// })


document.addEventListener("DOMContentLoaded", function () {
  var details = document.querySelector('.details');

  fetch('detail.json')
      .then(function (response) {
          return response.json();
      })
      .then(function (data2) {
          console.log(data2);

          // Assurez-vous que l'élément details est défini avant d'ajouter du contenu
          if (details) {
              // Utilisez forEach pour itérer sur le tableau et ajouter chaque définition
              data2.forEach(function (item) {
                  details.innerHTML += "<div class='definition'>" + item.definition + "</div>";
              });
          }
      })
      .catch(function (error) {
          console.error('Erreur lors de la récupération des données :', error);
      });
});

 


// ...

// Fetch 'list.json' and 'detail.json' concurrently
const listFetch = fetch('list.json').then(response => response.json());
const detailFetch = fetch('detail.json').then(response => response.json());

// Wait for both promises to resolve
Promise.all([listFetch, detailFetch]).then(function ([listData, detailData]) {

  // ... (Votre code actuel)

  // Merge the data based on a common identifier (e.g., an ID)
  const mergedData = listData.map(listItem => {
    const detailItem = detailData.find(detail => detail.id === listItem.id); // Remplacez 'id' par le nom de votre identifiant commun
    return { ...listItem, details: detailItem };
  });

  console.log(mergedData);

  // Continue with your code using the mergedData

  // ...

});


