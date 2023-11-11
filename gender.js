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

// MEN//

  // Sélectionnez l'en-tête "Men" par son attribut data-group-id
  const menHeader = document.querySelector('h2[data-group-id="men"]');
  
  // Sélectionnez le contenu du groupe "Men" par son ID
  const menContent = document.getElementById('men');
  
  // Ajoutez un écouteur d'événement pour gérer le survol
  menHeader.addEventListener('mouseover', () => {
    // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Men"
    menContent.style.display = 'block';
  });
  
  // Ajoutez un écouteur d'événement pour gérer la fin du survol
  menHeader.addEventListener('mouseout', () => {
    // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Men"
    menContent.style.display = 'block';
  });

  // WOMEN //

   // Sélectionnez l'en-tête "Men" par son attribut data-group-id
   const womenHeader = document.querySelector('h2[data-group-id="women"]');
  
   // Sélectionnez le contenu du groupe "Men" par son ID
   const womenContent = document.getElementById('women');
   
   // Ajoutez un écouteur d'événement pour gérer le survol
   womenHeader.addEventListener('mouseover', () => {
     // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Men"
     womenContent.style.display = 'block';
   });
   
   // Ajoutez un écouteur d'événement pour gérer la fin du survol
   menHeader.addEventListener('mouseout', () => {
     // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Men"
     womenContent.style.display = 'block';
   });

   // Boys //

     // Sélectionnez l'en-tête "Men" par son attribut data-group-id
     const boysHeader = document.querySelector('h2[data-group-id="boys"]');
  
     // Sélectionnez le contenu du groupe "Men" par son ID
     const boysContent = document.getElementById('boys');
     
     // Ajoutez un écouteur d'événement pour gérer le survol
     boysHeader.addEventListener('mouseover', () => {
       // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Men"
       boysContent.style.display = 'block';
     });
     
     // Ajoutez un écouteur d'événement pour gérer la fin du survol
     boysHeader.addEventListener('mouseout', () => {
       // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Men"
      boysContent.style.display = 'block';
     });

    // Girl //

      // Sélectionnez l'en-tête "Men" par son attribut data-group-id
   const girlsHeader = document.querySelector('h2[data-group-id="girls"]');
  
   // Sélectionnez le contenu du groupe "Men" par son ID
   const girlsContent = document.getElementById('girls');
   
   // Ajoutez un écouteur d'événement pour gérer le survol
   girlsHeader.addEventListener('mouseover', () => {
     // Affichez le contenu lorsque l'utilisateur survole l'en-tête "Men"
     girlsContent.style.display = 'block';
   });
   
   // Ajoutez un écouteur d'événement pour gérer la fin du survol
   girlsHeader.addEventListener('mouseout', () => {
     // Masquez le contenu lorsque l'utilisateur ne survole pas l'en-tête "Men"
     girlsContent.style.display = 'block';
   });



