d3.json("gender.json",).then(function(data) {
  const selectedTypes = ["isForcedLabour", "isSexualExploit", "isOtherExploit"];
  
  data.forEach((d, i) => {
    const menPercentage = (d.Men / (d.Women + d.Girls + d.Men + d.Boys)) * 100;
    
    const innerCircle = d3.select(`.inner-circle:nth-child(${i +1})`);
    innerCircle.attr("stroke-dasharray", `calc(${menPercentage} * 31.4 / 100) 31.4`);
  });
  console.log(data)
});

