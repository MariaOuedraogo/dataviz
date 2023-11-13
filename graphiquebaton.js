d3.json("graphiquebaton.json").then(function(data){

    let largeur_colonne=50/data.length;
    let espaceEntreBarres = 0.2;


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
    .style("fill","#A21E1A")
    //.style(" background-image", "url('https://i.pinimg.com/564x/b7/4f/59/b74f59f54627c1e5ba4f1edb470342e0.jpg')")
    .attr("width",  d=> {if(d["yearOfRegistration"]== 2021) {
        return `${ largeur_colonne}px`;
    }else {
        return `${ largeur_colonne-espaceEntreBarres}px`;
    }})
    

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


// Ajouter des étiquettes au survol
d3.selectAll(".histobarre")
.on("mouseenter", function(e, d) {
    d3.selectAll(".histobarre")
        .style("opacity", "0.5");
    d3.select(this)
        .style("opacity", null);

    // Ajouter l'étiquette au survol
    d3.select(this)
        .append("text")
        .attr("class", "etiquette")
        .attr("x", largeur_colonne / 2)
        .attr("y", -d["COUNT de yearOfRegistration"] * 40 / 30000 - 1.5)
        .style("text-anchor", "middle")
        .style("font-family","'IBM Plex Sans', sans-serif")
        .style("font-size","0.1rem")
        .text(d["COUNT de yearOfRegistration"]);
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

});

