Chart.register(ChartjsPluginStacked100.default)
var ctx = document.getElementById("graph1").getContext("2d");
var data = {
labels: ['0-8 ans', '09-17 ans', '18-20 ans', '21-23 ans', '24-26 ans', '27-29 ans', '30-38 ans', '39-47 ans', '48+ ans'],
datasets: [
{
    label: 'domestic slavery',
    backgroundColor: '#B81E1A',
    data: [19, 482, 261, 247, 249, 224, 918, 267, 77]
},
{
    label: 'Prostitution',
    backgroundColor: '#AAA88F',
    data: [68, 3055, 1049, 714, 489, 255, 523, 92, 13]
},
{
    label: 'Forced sex and pornography',
    backgroundColor: '#707070',
    data: [206, 471, 52, 20, 11, 35, 31, 25, 69]
},
{
    label: 'other type of forced labor',
    backgroundColor: '#706AB5',
    data: [123, 909, 249, 251, 239, 212, 916, 321, 270]
},
{
    label: 'other form of sex exploitation',
    backgroundColor: '#6C652E',
    data: [34, 224, 52, 30, 33, 27, 38, 39, 25]
},
{
    label: 'forced labor in the construction industry',
    backgroundColor: '#2C2C2C',
    data: [0, 29, 37, 35, 136, 199, 1139, 496, 267]
},
{
    label: 'forced labor in the  hospitality industry',
    backgroundColor: '#880F0C',
    data: [0, 98, 293, 168, 189, 54, 46, 17, 26]
}

],

};


var options = {

}


var config = {
    type: 'bar',
    data: data,
    // options: options,
    options: {
          // Ajoutez ces lignes pour spécifier la largeur des colonnes
barPercentage: 1,
categoryPercentage: 1,
categoryPercentage:.9,

        mantainAspectRation:false,
        plugins :{
            stacked100:{
                enable:true
            }
        },
          scales: {
x: {
    stacked: true,
    grid: {
            display: false // Masquer le cadrillage intérieur pour l'axe x
        },
        color: '#2C2C2C', // Couleur de l'axe vertical (Y)
        ticks: {
        color: '#2C2C2C' // Couleur du texte pour l'axe x
    }


},
y: {
    stacked: true,
    grid: {
            display: false // Masquer le cadrillage intérieur pour l'axe x
        },
        color: '#2C2C2C', // Couleur de l'axe vertical (Y)
        ticks: {
        color: '#2C2C2C' // Couleur du texte pour l'axe x
    }


    
}
},



},

};

var graph1 = new Chart(ctx, config);


function toggleStacked(useStacked = true, useStacked100 = true) {
isStacked = useStacked;
isStacked100 = useStacked100;

config.options.scales.x.stacked = isStacked;
config.options.scales.y.stacked = isStacked;
config.options.plugins.stacked100.enable = isStacked100;
graph1.update();


}

function updateButtonStyle(useStacked) {
var stackedBtn = document.getElementById("stackedBtn");
var destackedBtn = document.getElementById("destackedBtn");

if (useStacked) {
    stackedBtn.classList.add("active-btn");
    destackedBtn.classList.remove("active-btn");
} else {
    destackedBtn.classList.add("active-btn");
    stackedBtn.classList.remove("active-btn");
}
}

