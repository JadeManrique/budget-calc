$(document).ready( function () {

var graphData = [];
var graphLabels = [];



var ctx = $("#myPieChart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: graphLabels,
        datasets: [{
            label: 'Monthly Spending',
            data: graphData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },

});





$("#money").keypress(function(e) {
if ((e.keyCode || e.which) == 13) {
  var cash = parseInt( $("#money").val() );
  graphData.push(cash);
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: graphLabels,
          datasets: [{
              label: 'Monthly Spending',
              data: graphData,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },

  });

}
});




$("#expense").keypress(function(e) {
if ((e.keyCode || e.which) == 13) {
  var expenses = $("#expense").val();
  graphLabels.push(expenses);
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: graphLabels,
          datasets: [{
              label: 'Monthly Spending',
              data: graphData,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },

  });

}
});




$("input").keyup(function(e) {
if ((e.keyCode || e.which) == 13) {
   event.currentTarget.value = "";
}
});



});
