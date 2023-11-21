// Cette association permettra d'avoir des noms communs pour lors de l'affichage sur écran
const names = {
  "typeOfLabourConstruction": "forced labor in the construction industry",
  "typeOfLabourDomesticWork": "domestic slavery",
  "typeOfLabourHospitality": "forced labor in the  hospitality industry",
  "typeOfLabourOther": "other type of forced labour",
  "typeOfSexProstitution": "prostitution",
  "typeOfSexPornography": "Forced sex and pornography",
  "typeOfSexOther": "other form of sex exploitation"
};

const typesExploitation = {
  "forced labor in the construction industry": {"description": "Forced construction labor refers to a situation in which individuals are compelled to engage in construction work against their will and without proper consent. This can involve various forms of coercion, threats, or manipulation to make individuals work under conditions that are often exploitative and in violation of their basic human rights.", "temoignages": "list_aud/construction.mp3", "image": "list_img/construction.jpg"},

  "domestic slavery": {"description": "In the case of domestic work, the transition to trafficking occurs when the employer resorts to force, fraud, or coercion to maintain dominance over the worker, leaving the latter with the pervasive feeling that there is no viable alternative but to persist in the work. Common manifestations of force include physical or sexual abuse, restrictions on movement, limiting communication with family or friends, continuous surveillance, and the denial of appropriate treatment for work-related injuries, often accompanied by sleep deprivation.", "temoignages": "list_aud/domestic.mp3", "image": "list_img/domestic.png"},

  "forced labor in the  hospitality industry": {"description": "Forced hospitality is a form of exploitation where people are forced or coerced, often by threat or deception, to work in the hospitality industry. This includes being forced to provide accommodation and services, for example in hotels or restaurants, under conditions that violate their rights and autonomy. Victims of forced hospitality can be victims of exploitation, abuse and deprivation of their fundamental human rights, as they are forced to work in the hospitality sector against their will.","temoignages": "list_aud/hospitality.mp3", "image": "list_img/hospitality.jpg"},

  "other type of forced labour": {"description": "Indicates whether the individual experienced forced labor of a specified type which could not reasonably be classified in any of the other categories due to low response rates. This encompasses activities such as aquafarming, begging, engaging in illicit pursuits, manufacturing, mining or drilling, peddling, as well as transportation and storage.", "temoignages": "list_aud/other_labour.mp3", "image": "list_img/other_labour.jpg"},

  "prostitution": {"description": "Forced prostitution, also known as arbitrary or coerced prostitution, refers to prostitution or sexual slavery that is forced by a third party. The term 'forced prostitution' refers to situations where a person is coerced by another person to engage in controlled sexual activity.", "temoignages": "list_aud/prostitution.mp3","image": "list_img/prostitution.jpg"},

  "Forced sex and pornography": {"description": "'Forced pornography' refers to the creation or distribution of pornographic material involving people without their consent. This can involve capturing intimate images or videos of people without their knowledge, as well as distributing this material without their authorization. These acts constitute a violation of privacy and can be a form of sexual violence. 'Forced sex' refers to any sexual activity that occurs without the explicit and voluntary consent of one or more of the people involved. It is a broad term that can encompass various forms of sexual violence and non-consensual acts. ", "temoignages": "list_aud/sex.mp3","image": "list_img/sex.jpg"},

  "other form of sex exploitation": {"description": "Indicates whether the individual experienced exploitation depicting sexual behavior other than prostitution and pornography. It includes remote interactive services and private sexual services.", "temoignages": "list_aud/other_sex.mp3", "image": "list_img/other_sex.jpg"}
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
let numeroLigne = 1; // Variable pour suivre le numéro de ligne

for (var i = 0; i < finalData.length; i++) {
    const id = typesExploitation[finalData[i][0]].id;

    // Utilisez une div pour envelopper le paragraphe et le lien
    classement.innerHTML +=  "<div class='ligne-classement'><p>" + numeroLigne + "</p><a class='type_names' href='#details'>" + finalData[i][0] + "</a></div><div class='ligne-horizontale'></div>";
    
    // Incrémentez le numéro de ligne pour la prochaine itération
    numeroLigne++;
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

        // Display the value associated with finalData[i][1]
        // details.innerHTML += "<p  class='nombres_victimes'id='details'>" +  typeValue + " " +"victims" +"</p>";
        details.innerHTML += "<p class='nombres_victimes' id='details'><span class='nbr_victims_style'>" + typeValue + "</span> victims</p>";

        
        // Check if details are available in typesExploitation object
        if (typesExploitation[typeName]) {
          const description = typesExploitation[typeName].description;
          const temoignages = typesExploitation[typeName].temoignages;
          const image = typesExploitation[typeName].image;
          const id = typesExploitation[typeName].id;

          // details.innerHTML += "<p class='details'>" + "Description: " + description + "</p>";
          // details.innerHTML += "<p class='details'>" + "Témoignages: " + temoignages + "</p>";

          details.innerHTML +=
          "<div class='wrapper' '>" +
          "<div class='explication'>" +
          "<h2 class='title_exploitation'>" + typeName + "</h2>" +
          "<div class='def'>" + description + "</div>" +
          "<div class='audio '>" +
          "  <audio controls>" +
          "    <source src='"+ temoignages +"' type='audio/mp3'>" + 
          "</audio>" +
          "</div>" +
          "</div>" +
          "<div class='img_type_exploitation'>" +
          "  <img src='" + image + "' alt=''>" +
          "</div>" +
          "</div>"
          
     "</div>";
        
        
       // Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('audio', {});

// Expose player so it can be used from the console
window.player = player;

          
          

        } else {
          details.innerHTML += "<p class='details'>Détails non disponibles</p>";
        }
      });
    });

  });
});
