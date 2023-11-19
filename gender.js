d3.json("gender.json",).then(function(data) {
  const selectedTypes = ["isForcedLabour", "isSexualExploit", "isOtherExploit"];
  
//Mens
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
//Woens
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


// Sélectionnez l'en-tête "Men" par son attribut data-group-id
const menHeader = document.querySelector('h3[data-group-id="men"]');
  
// Sélectionnez le contenu du groupe "Men" par son ID
const menContent = document.getElementById('men');
  
// Ajoutez un écouteur d'événement pour gérer le survol
menHeader.addEventListener('mouseenter', () => {
  // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Men"
  menContent.style.display = 'block';
  // Changez le curseur lors du survol
  menHeader.style.cursor = 'pointer';
});
  
// Ajoutez un écouteur d'événement pour gérer la sortie du survol
menHeader.addEventListener('mouseleave', () => {
  // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Men"
  menContent.style.display = 'none';
  // Remettez le curseur par défaut lorsqu'on quitte l'en-tête
  menHeader.style.cursor = 'default';
});

// WOMEN //

// Sélectionnez l'en-tête "Women" par son attribut data-group-id
const womenHeader = document.querySelector('h3[data-group-id="women"]');
  
// Sélectionnez le contenu du groupe "Women" par son ID
const womenContent = document.getElementById('women');
   
// Ajoutez un écouteur d'événement pour gérer le survol
womenHeader.addEventListener('mouseenter', () => {
  // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Women"
  womenContent.style.display = 'block';
  // Changez le curseur lors du survol
  womenHeader.style.cursor = 'pointer';
});
   
// Ajoutez un écouteur d'événement pour gérer la sortie du survol
womenHeader.addEventListener('mouseleave', () => {
  // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Women"
  womenContent.style.display = 'none';
  // Remettez le curseur par défaut lorsqu'on quitte l'en-tête
  womenHeader.style.cursor = 'default';
});

// Boys //

// Sélectionnez l'en-tête "Boys" par son attribut data-group-id
const boysHeader = document.querySelector('h3[data-group-id="boys"]');
  
// Sélectionnez le contenu du groupe "Boys" par son ID
const boysContent = document.getElementById('boys');
   
// Ajoutez un écouteur d'événement pour gérer le survol
boysHeader.addEventListener('mouseenter', () => {
  // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Boys"
  boysContent.style.display = 'block';
  // Changez le curseur lors du survol
  boysHeader.style.cursor = 'pointer';
});
   
// Ajoutez un écouteur d'événement pour gérer la sortie du survol
boysHeader.addEventListener('mouseleave', () => {
  // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Boys"
  boysContent.style.display = 'none';
  // Remettez le curseur par défaut lorsqu'on quitte l'en-tête
  boysHeader.style.cursor = 'default';
});

// Girls //

// Sélectionnez l'en-tête "Girls" par son attribut data-group-id
const girlsHeader = document.querySelector('h3[data-group-id="girls"]');
  
// Sélectionnez le contenu du groupe "Girls" par son ID
const girlsContent = document.getElementById('girls');
   
// Ajoutez un écouteur d'événement pour gérer le survol
girlsHeader.addEventListener('mouseenter', () => {
  // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Girls"
  girlsContent.style.display = 'block';
  // Changez le curseur lors du survol
  girlsHeader.style.cursor = 'pointer';
});
   
// Ajoutez un écouteur d'événement pour gérer la sortie du survol
girlsHeader.addEventListener('mouseleave', () => {
  // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Girls"
  girlsContent.style.display = 'none';
  // Remettez le curseur par défaut lorsqu'on quitte l'en-tête
});

// Ajoutez un gestionnaire d'événements au clic sur les éléments h2
document.querySelectorAll('.gender h3').forEach(function(element) {
  element.addEventListener('click', function() {
    // Réinitialisez tous les éléments à leur état initial
   

    // Obtenez l'ID de groupe à partir de l'attribut data-group-id
    var groupId = this.getAttribute('data-group-id');

    // Obtenez le cercle correspondant à l'ID de groupe
    var circle = document.querySelector('.part[data-group-id="' + groupId + '"],' +
                                       '.part2[data-group-id="' + groupId + '"],' +
                                       '.part3[data-group-id="' + groupId + '"],' +
                                       '.part4[data-group-id="' + groupId + '"]');

   

    // Animer le stroke-dasharray
    circle.style.transition = 'stroke-dasharray 4s ease';
    circle.style.strokeDasharray = 'calc(100 * 31.4 / 100) 31.4';
  });
});











