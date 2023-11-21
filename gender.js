//En incorporant des données JSON, nous avons la possibilité de générer des diagrammes circulaires qui représentent à la fois le pourcentage et le type d'opération associés à ces données.

d3.json("gender.json",).then(function(data) {
  const selectedTypes = ["isForcedLabour", "isSexualExploit", "isOtherExploit"];
  
//On utilise la fonction selectAll pour sélectionner tous les éléments ayant la classe CSS "pourcentage". Grâce à la base de données, nous pouvons attribuer une valeur correspondant au pourcentage d'hommes victimes d'un type d'exploitation, à l'aide de la balise data. Ensuite, avec la fonction, nous calculons le pourcentage d'hommes arrondi par rapport au total, à l'aide de Math.floor.
//men
  d3.selectAll(".part")
    .data(data)
    .attr("stroke-dasharray",function(d){
      const menPercentage = (d.Men / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
      return `calc(${menPercentage} * 31.4 / 100) 31.4`
    })

    d3.selectAll(".percentage")
  .attr("y", 5)
  .attr("x", 10.5)
  .attr("font-size", 3)
  .attr("fill", "black")
  .data(data)
  .text( function(d){
    const menPercentage =Math.floor((d.Men / (d.Women + d.Girls + d.Men + d.Boys)) * 100) ;
    return `${menPercentage}%`
  })
//Womens
  d3.selectAll(".part2")
    .data(data)
    .attr("stroke-dasharray",function(d){
      const menPercentage = (d.Women / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
      return `calc(${menPercentage} * 31.4 / 100) 31.4`
    })
  
    d3.selectAll(".percentage2")
    .attr("y", 5)
    .attr("x", 10.5)
    .attr("font-size", 3)
    .attr("fill", "black")
    .data(data)
    .text( function(d){
      const menPercentage =Math.floor((d.Women / (d.Women + d.Girls + d.Men + d.Boys)) * 100) ;
      return `${menPercentage}%`
    })
//Boys

d3.selectAll(".part3")
    .data(data)
    .attr("stroke-dasharray",function(d){
      const menPercentage = (d.Boys / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
      return `calc(${menPercentage} * 31.4 / 100) 31.4`
    })
  
    d3.selectAll(".percentage3")
    .attr("y", 5)
    .attr("x", 10.5)
    .attr("font-size", 3)
    .attr("fill", "black")
    .data(data)
    .text( function(d){
      const menPercentage =Math.floor((d.Boys / (d.Women + d.Girls + d.Men + d.Boys)) * 100) ;
      return `${menPercentage}%`
    })
    // Girls

    d3.selectAll(".part4")
    .data(data)
    .attr("stroke-dasharray",function(d){
      const menPercentage = (d.Girls / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
      return `calc(${menPercentage} * 31.4 / 100) 31.4`
    })
  
    d3.selectAll(".percentage4")
    .attr("y", 5)
    .attr("x", 10.5)
    .attr("font-size", 3)
    .attr("fill", "black")
    .data(data)
    .text( function(d){
      const menPercentage =Math.floor((d.Girls / (d.Women + d.Girls + d.Men + d.Boys)) * 100) ;
      return `${menPercentage}%`
    })



  
  

  

  

  console.log(data)
});``

// MEN //

//Lier les balises h3 représentant les genres (hommes, femmes, garçons, filles). J'ai essayé de lier la balise h3 représentant les "Hommes" en utilisant son attribut data-group-id, puis de sélectionner le contenu du groupe "Hommes" par son ID. L'objectif était d'afficher ce contenu lorsque l'utilisateur survolait l'en-tête "Hommes". Nous avons également implémenté un changement de curseur lors du survol et ajouté un écouteur d'événement pour gérer la sortie du survol. L'idée était de cacher le contenu lorsque l'utilisateur ne survolait plus l'en-tête de tous les h3 (data-group-id) et de rétablir le curseur par défaut à ce moment-là.

const menHeader = document.querySelector('h3[data-group-id="men"]');
const menContent = document.getElementById('men');
  
menHeader.addEventListener('mouseenter', () => {

menContent.style.display = 'block';

menHeader.style.cursor = 'pointer';
});
  

menHeader.addEventListener('mouseleave', () => {

menContent.style.display = 'none';

  menHeader.style.cursor = 'default';
});

// WOMEN //


const womenHeader = document.querySelector('h3[data-group-id="women"]');
  
const womenContent = document.getElementById('women');

womenHeader.addEventListener('mouseenter', () => {

  womenContent.style.display = 'block';

  womenHeader.style.cursor = 'pointer';
});
   

womenHeader.addEventListener('mouseleave', () => {
 
  womenContent.style.display = 'none';

  womenHeader.style.cursor = 'default';
});

// Boys //

const boysHeader = document.querySelector('h3[data-group-id="boys"]');
  

const boysContent = document.getElementById('boys');
   
boysHeader.addEventListener('mouseenter', () => {

  boysContent.style.display = 'block';

  boysHeader.style.cursor = 'pointer';
});
   

boysHeader.addEventListener('mouseleave', () => {
 
  boysContent.style.display = 'none';
 
  boysHeader.style.cursor = 'default';
});

// Girls //

const girlsHeader = document.querySelector('h3[data-group-id="girls"]');
  

const girlsContent = document.getElementById('girls');
   

girlsHeader.addEventListener('mouseenter', () => {
  
  girlsContent.style.display = 'block';

  girlsHeader.style.cursor = 'pointer';
});
   
// Nous avons incorporé un gestionnaire d'événements pour gérer la fin du survol. L'objectif était de masquer le contenu lorsque l'utilisateur ne survole plus les en-têtes des h3 "gender" et de rétablir le curseur par défaut lorsqu'il quitte ces en-têtes. De plus, nous avons ajouté un gestionnaire d'événements au clic sur les éléments h2. Notre intention était d'obtenir l'ID de groupe à partir de l'attribut data-group-id et de récupérer le cercle correspondant à cet ID pour une interaction plus poussée.


girlsHeader.addEventListener('mouseleave', () => {
  
girlsContent.style.display = 'none';
 
});


document.querySelectorAll('.gender h3').forEach(function(element) {
  element.addEventListener('click', function() {
 
     var groupId = this.getAttribute('data-group-id');

    
    var circle = document.querySelector('.part[data-group-id="' + groupId + '"],' +
                                       '.part2[data-group-id="' + groupId + '"],' +
                                       '.part3[data-group-id="' + groupId + '"],' +
                                       '.part4[data-group-id="' + groupId + '"]');

   

   
   
  });
});


  
// Nous avons implémenté un gestionnaire d'événements pour gérer la désactivation du survol. L'objectif était de masquer le contenu, notamment les camemberts, car un texte est initialement visible, et ce texte disparaît au survol des éléments h3 "gender". Cela se produit lorsque l'utilisateur n'est plus en survol des en-têtes h3 "gender", et nous avons également rétabli le curseur par défaut à ce moment-là. En outre, nous avons ajouté un gestionnaire d'événements au clic sur les éléments h2, avec pour but d'extraire l'ID de groupe à partir de l'attribut data-group-id et de récupérer le cercle correspondant à cet ID pour une expérience utilisateur plus fluide
const groupHeaders = document.querySelectorAll('h3[data-group-id]');


const infoElement = document.getElementById('info');


groupHeaders.forEach(header => {
 
  header.addEventListener('mouseenter', () => {
   
    infoElement.style.display = 'none';
  });


  header.addEventListener('mouseleave', () => {
   
    infoElement.style.display = 'block';
  });
});
















