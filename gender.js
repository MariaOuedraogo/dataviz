d3.json("gender.json", function(data){



})
// Sélectionner les cercles "main-circle" dans vos SVG

d3.selectAll(".main-circle")
    .data(data)
    attr("stroke-dasharray", d => {
        const menPercentage = (d.Men / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
        return `${menPercentage} 100`;
      });
