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

  
  

  

  

  console.log(data)
});

