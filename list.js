// Cette association permettra d'avoir des noms communs pour lors de l'affichage sur écran
const names = {
  "typeOfLabourConstruction": "construction",
  "typeOfLabourDomesticWork": "domestic work",
  "typeOfLabourHospitality": "hospitality  ",
  "typeOfLabourOther": "other type of forced labour",
  "typeOfSexProstitution": "prostitution ",
  "typeOfSexPornography": "sex and pornography",
  "typeOfSexOther": "other form of sex exploitation"
};

const typesExploitation = {
  "construction": {"description": "bla", "témoignages": "yasss"},
  "domestic work": {"description": "yoo", "témoignages": "hehe"},
  "hospitality": {"description": "hel", "témoignages": "nah"},
  "other type of forced labour": {"description": "hel", "témoignages": "nah"},
  "prostitution": {"description": "ha", "témoignages": "grr"},
  "sex and pornography": {"description": "naa", "témoignages": "lololo"},
  "other form of sex exploitation": {"description": "oa", "témoignages": "mo"}

};

// Début du traitement en JSON
fetch('list.json').then(function (response) {
  response.json().then(function (data) {
    const total = {
      "typeOfLabourConstruction": 0,
      "typeOfLabourDomesticWork": 0,
      "typeOfLabourHospitality": 0,
      "typeOfLabourOther": 0,
      "typeOfSexProstitution": 0,
      "typeOfSexPornography": 0,
      "typeOfSexOther": 0
    };

    data.forEach(function (tranche_age_obj) {
      total.typeOfLabourConstruction += tranche_age_obj.typeOfLabourConstruction;
      total.typeOfLabourDomesticWork += tranche_age_obj.typeOfLabourDomesticWork;
      total.typeOfLabourHospitality += tranche_age_obj.typeOfLabourHospitality;
      total.typeOfLabourOther += tranche_age_obj.typeOfLabourOther;
      total.typeOfSexProstitution += tranche_age_obj.typeOfSexProstitution;
      total.typeOfSexPornography += tranche_age_obj.typeOfSexPornography;
      total.typeOfSexOther += tranche_age_obj.typeOfSexOther;
    });

    const entries = Object.entries(total);

    const finalData = entries.map(([key, valueTotal]) => {
      return [names[key], valueTotal];
    }).sort((a, b) => b[1] - a[1]);

    console.log(finalData);
    console.log(total);

    let classement = document.querySelector(".classement");

    for (var i = 0; i < finalData.length; i++) {
      classement.innerHTML += "<li class='type_names'>" + finalData[i][0] + "</li>" + "<div class='ligne-horizontale'></div>"
      ;
    }

    var type_names = document.querySelectorAll(".type_names");

    type_names.forEach(function (type_name, index) {
      type_name.addEventListener('click', function () {
        let details = document.querySelector(".details");

        // Clear previous details content
        details.innerHTML = "";

        // Display the corresponding details for the clicked element
        const typeName = finalData[index][0];
        const typeValue = finalData[index][1];
        // details.innerHTML += "<p class='type_names'>" + typeName + "</p>";

        // Display the value associated with finalData[i][1]
        details.innerHTML += "<p class='nombres_victimes'>" +  typeValue + "</p>";
        
        // Check if details are available in typesExploitation object
        if (typesExploitation[typeName]) {
          const description = typesExploitation[typeName].description;
          const temoignages = typesExploitation[typeName].témoignages;

          details.innerHTML += "<p class='details'>" + "Description: " + description + "</p>";
          details.innerHTML += "<p class='details'>" + "Témoignages: " + temoignages + "</p>";
        } else {
          details.innerHTML += "<p class='details'>Détails non disponibles</p>";
        }

        
      });
    });

  });
});
