$.getJSON("some_other_data.json", function(data) {
   var labels = data.test_data.map(function(e) {
      return e[0];
   });
   var data = data.test_data.map(function(e) {
      return e[1];
   });

var ctx = document.getElementById('canvas').getContext('2d');
   var chart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: labels,
         datasets: [{
            backgroundColor: 'rgb(129, 198, 2228)',
            borderColor: 'rgb(0, 150, 215)',
            data: data
         }]
      },
      options: {
         responsive: 'true',
      }
   });
});
</script>