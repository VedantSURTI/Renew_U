// let total;
// document.querySelector("form").addEventListener("submit", function (event) {
//   var jobInsecurity = Number(document.getElementById("Job Insecurity").value);
//   var financialStress = Number(
//     document.getElementById("financial stress").value
//   );
//   var workLifeBalance = Number(
//     document.getElementById("work life balance").value
//   );
//   var healthConcerns = Number(document.getElementById("health concerns").value);
//   var relationshipStatus = Number(
//     document.getElementById("relationship status").value
//   );
//   total =
//     jobInsecurity * 0.25 +
//     financialStress * 0.2 +
//     workLifeBalance * 0.1 +
//     healthConcerns * 0.25 +
//     relationshipStatus * 0.2;
//   //   alert("The total value is " + total);
//   let status;
//   let color;
//   if (total <= 1.5) {
//     status = `Healthy Mind`;
//     color = `green`;
//   } else if (total <= 2.5) {
//     status = `Mild Stress`;
//     color = `yellow`;
//   } else if (total <= 3.5) {
//     status = `Anxious`;
//     color = `orange`;
//   } else {
//     status = `Highly Stressed`;
//     color = `red`;
//   }
//   document.getElementById(
//     "output"
//   ).innerHTML = `<div class="message" style="background-color: ${color}">the value is ${total} <br>${status}</div>`;

//   localStorage.setItem("name", total);
//   event.preventDefault();
// });
// Get the canvas element and context for the chart
var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// Declare the chart with initial data
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Time 1", "Time 2", "Time 3", "Time 4"],
    datasets: [
      {
        label: "Stress Index",
        data: [0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Add event listener for form submit
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form inputs and calculate the total value
  var jobInsecurity = Number(document.getElementById("Job Insecurity").value);
  var financialStress = Number(
    document.getElementById("financial stress").value
  );
  var workLifeBalance = Number(
    document.getElementById("work life balance").value
  );
  var healthConcerns = Number(document.getElementById("health concerns").value);
  var relationshipStatus = Number(
    document.getElementById("relationship status").value
  );
  var age = Number(document.getElementById("age").value);
  if(age>=18 && age<=25){
    var total =
    jobInsecurity * 0.25 +
    financialStress * 0.2 +
    workLifeBalance * 0.1 +
    healthConcerns * 0.15 +
    relationshipStatus * 0.3;
  }else if(age>25 && age<=55){
    var total =
    jobInsecurity * 0.35 +
    financialStress * 0.2 +
    workLifeBalance * 0.2 +
    healthConcerns * 0.15 +
    relationshipStatus * 0.1;

  }else{
    var total =
    jobInsecurity * 0.1 +
    financialStress * 0.35 +
    workLifeBalance * 0.1 +
    healthConcerns * 0.35 +
    relationshipStatus * 0.1;

  }

  // Update the chart data with the new total value
  var newData = myChart.data.datasets[0].data.slice(); // make a copy of the data array
  newData.shift(); // remove the first value
  newData.push(total); // add the new total value
  myChart.data.datasets[0].data = newData;
  myChart.update();

  // Display the total value and stress status
  let status;
  let color;
  if (total <= 1.5) {
    status = `Healthy Mind`;
    color = `green`;
  } else if (total <= 2.5) {
    status = `Mild Stress`;
    color = `yellow`;
  } else if (total <= 3.5) {
    status = `Anxious`;
    color = `orange`;
  } else {
    status = `Highly Stressed`;
    color = `red`;
  }
  document.getElementById(
    "output"
  ).innerHTML = `<div class="message" style="background-color: ${color}"> ${status}</div>`;
  localStorage.setItem("name", total);
});
