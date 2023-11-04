d3.json( "list.json" ).then(function(data) {

    let largeur_colonne=50/data.length;



    d3.select("svg")
        .selectAll(".histobarre")
        .data(data)
        .join("g")
        .attr("class","histobarre")
        .attr("transform", (d,i)=>`translate(0,${i*largeur_colonne})`);
    
    d3.selectAll(".histobarre")
        .append("rect")
        .attr("width", d=> d["valeur"]*40/17000 )
        .attr("height",largeur_colonne/2)
        .attr("transform", `translate(0,${largeur_colonne/2})`)
        .style("fill","red");
    
    
    d3.selectAll(".histobarre")
        .append("text")
        .text(d=>d.type)
        .style("fill","blue")
        .attr("transform", `translate(0,${largeur_colonne/2})`)
        // changer la taille du texte 
        .style("font-size","0.1rem") 
        


    d3.selectAll(".histobarre")
        .on("mouseenter", function(e,d){
        // transparence 
        d3.selectAll(".histobarre")
            .style("opacity","0.5")
        d3.select(this)
            .style("opacity",null)
    })
    
    d3.selectAll(".histobarre")
        .on("mouseleave", function(){
        //  transparence 
    
        d3.selectAll(".histobarre")
            .style("opacity",null)
    
    })
    
 });


