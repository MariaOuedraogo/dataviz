d3.json("graphiquebaton.json").then(function(data){

    
    let largeur_colonne=50/data.length;
    let espaceEntreBarres = 0.2;


// création des barres 
d3.select("#barres")
    .selectAll(".histobarre")
    .data(data)
    .join("g")
    .attr("class","histobarre")
    .attr("transform", (d,i)=>`translate(${i*largeur_colonne},0)`);

d3.selectAll(".histobarre")
    .append("rect")
    .attr("class","barre")
    .attr("width", largeur_colonne )
    .attr("height", d=> d["COUNT de yearOfRegistration"]*40/30000)
    .attr("transform", "scale(1,-1)")
    .attr("width",  d=> {if(d["yearOfRegistration"]== 2021) {
        return `${ largeur_colonne}px`;
    }else {
        return `${ largeur_colonne-espaceEntreBarres}px`;
    }})
    

// animation au survol de transparence 
d3.selectAll(".histobarre")
    .on("mouseenter", function(e,d){
    /* transparence */
    d3.selectAll(".histobarre")
        .style("opacity","0.5")
    d3.select(this)
        .style("opacity",null)
})  

d3.selectAll(".histobarre")
    .on("mouseleave", function(){
    /* transparence */
    
    d3.selectAll(".histobarre")
        .style("opacity",null)
        
})  


// Seule la barre séléctionné est coloré
d3.selectAll(".histobarre")
.on("mouseenter", function(e, d) {
    d3.selectAll(".histobarre")
        .style("opacity", "0.2");
    d3.select(this)
        .style("opacity", null);

    // Ajouter les données au survol
    d3.select(this)
        .append("text")
        .attr("class", "etiquette")
        .attr("x", largeur_colonne / 2)
        .attr("y", -d["COUNT de yearOfRegistration"] * 40 / 30000 - 1.5)
        .style("text-anchor", "middle")
        .style("font-family","'Roboto Mono', monospace")
        .style("font-size","0.1rem")
        .text(d["COUNT de yearOfRegistration" ] + " victims");
});

d3.selectAll(".histobarre")
.on("mouseleave", function() {
    d3.selectAll(".histobarre")
        .style("opacity", null);

    // Supprimer l'étiquette lorsqu'on quitte la barre
    d3.select(this)
        .select(".etiquette")
        .remove();
});

d3.selectAll(".histobarre")
    .each(function(d) {
        // Ajout des années 
        if (d["yearOfRegistration"] === 2002 || d["yearOfRegistration"] === 2021 || d["yearOfRegistration"] === 2012 || d["yearOfRegistration"] === 2007 || d["yearOfRegistration"] === 2016 )  {
            d3.select(this)
                .append("text")
                .attr("x", largeur_colonne / 2)
                .attr("y", largeur_colonne - 0.5)
                .style("text-anchor", "middle")
                .style("font-family", "'Roboto Mono', monospace")
                .style("font-size", "0.09rem")
                .text(d["yearOfRegistration"]);
        }
    });

});

