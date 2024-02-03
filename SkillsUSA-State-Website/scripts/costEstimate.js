const parkFee = 20;
const cityFee = 15;
const oceanFee = 30;
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const groupSize = document.getElementById("people");
const radios = document.getElementsByName("types");


function getSelectedType(){
  for (let i = 0; i < radios.length; i++)
    if (radios[i].checked)
      return radios[i].value;
  return undefined;
}

function spots(groupSize){
  let spots = Math.ceil(Math.random() * 5 + groupSize);
  return spots;
}

function generateRandomDate(startDate, endDate) {
  return new Date(new Date(startDate).getTime() + Math.random() * (new Date(endDate).getTime() - new Date(startDate).getTime()));
}

function costEstimate(groupSize, tourType){
  let totalCost = 0;
  if(tourType == "city"){
    totalCost = cityFee * groupSize;
  }
  else if(tourType == "park"){
    totalCost = parkFee * groupSize;
  }
  else{
    totalCost = oceanFee * groupSize;
  }
  return totalCost;
}

submit.addEventListener("click", (e) => {
  e.preventDefault()
  let people = groupSize.valueAsNumber;
  let startDate = new Date(startDateInput.value);
  let endDate = new Date(endDateInput.value);
  console.log(startDate.toString());
  console.log(endDate.toString());
  let date1 = generateRandomDate(startDate, endDate);
  let date2 = generateRandomDate(startDate, endDate);
  let date3 = generateRandomDate(startDate, endDate);
  console.log(date1);
  console.log(date2);
  console.log(date3);
  let tourType = getSelectedType();
  console.log(tourType);
  let cost = costEstimate(people, tourType);
  console.log(cost);

  alert("COST: " + cost + " DATE: "+ date1.toLocaleString())
});