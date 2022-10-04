// Global Constant declaratons

// Tax Thresholds
const ZERO = 0;
const FEDERAL_THRESHOLD_ONE = 9875;
const FEDERAL_THRESHOLD_TWO = 40125;
const FEDERAL_THRESHOLD_THREE = 85525;
const FEDERAL_THRESHOLD_FOUR = 163300;
const FEDERAL_THRESHOLD_FIVE = 207350;
const FEDERAL_THRESHOLD_SIX = 518400;
const STATE_THRESHOLD_ONE = 11970;
const STATE_THRESHOLD_TWO = 23930;
const STATE_THRESHOLD_THREE = 263480;
const SOCIAL_THRESHOLD = 137000;
const MEDICARE_THRESHOLD = 200000;

// Federal tax percentages
const FEDERAL_TAX_ONE = 0.10;
const FEDERAL_TAX_TWO = 0.12;
const FEDERAL_TAX_THREE = 0.22;
const FEDERAL_TAX_FOUR = 0.24;
const FEDERAL_TAX_FIVE = 0.32;
const FEDERAL_TAX_SIX = 0.35;
const FEDERAL_TAX_SEVEN = 0.37;

// WI state tax percentages
const STATE_TAX_ONE = 0.0354;
const STATE_TAX_TWO = 0.0465;
const STATE_TAX_THREE = 0.0627;
const STATE_TAX_FOUR = 0.0765;

// Social Security and Medicare tax percentages
const SOCIAL_TAX = 0.062;
const MEDICARE_TAX = 0.0145;
const MEDICARE_TAX_TWO = 0.0235;



// Main function called from HTML
const init = () => {

  // Event listener for button
  let button = document.querySelector("#buttonID");
  button.addEventListener("click", calculate);
}

// function called from within init on click of button
const calculate = event => {

  // variable Declarations and initialization
  let fedTaxOne;
  fedTaxOne = 0;

  let fedTaxTwo;
  fedTaxTwo = 0;

  let fedTaxThree;
  fedTaxThree = 0;

  let fedTaxFour;
  fedTaxFour = 0;

  let fedTaxFive;
  fedTaxFive = 0;

  let fedTaxSix;
  fedTaxSix = 0;

  let fedTaxSeven;
  fedTaxSeven = 0;

  let stateTaxOne;
  stateTaxOne = 0;

  let stateTaxTwo;
  stateTaxTwo = 0;

  let stateTaxThree;
  stateTaxThree = 0;

  let socialTax;
  socialTax = 0;

  let totalMed;
  totalMed = 0;

  let totalFed;
  totalFed = 0;

  let totalSate;
  totalSate = 0;

  let sum;
  sum = 0;

  let netPay;
  netPay = 0;
  // Variable Declarations
  let form = document.getElementById("form");

  let input = form.userInput.value;

  // Tax the first $9,875 by 10%
  if (input > ZERO) {
    if (input >= FEDERAL_THRESHOLD_ONE) {
      fedTaxOne = FEDERAL_THRESHOLD_ONE * FEDERAL_TAX_ONE;
  // if less than $9,875
    } else {
      fedTaxOne = input * FEDERAL_TAX_ONE;
    }
    totalFed += fedTaxOne;
    //console.log(fedTaxOne);
  }

  // Tax 12% of income over $9,875 and $40,125 (Federal)
  if (input > FEDERAL_THRESHOLD_ONE) {
    if (input >= FEDERAL_THRESHOLD_TWO) {
      fedTaxTwo = (FEDERAL_THRESHOLD_TWO - FEDERAL_THRESHOLD_ONE)
      * FEDERAL_TAX_TWO;
    } else {
      // if over $9,876 but less than $40,125
      fedTaxTwo = (input - FEDERAL_THRESHOLD_ONE) * FEDERAL_TAX_TWO;
    }
    totalFed += fedTaxTwo;
    //console.log(fedTaxTwo);
  }

  // Tax 22% of income over $40,125 and $85,525 (Federal)
  if (input > FEDERAL_THRESHOLD_TWO) {
    if (input >= FEDERAL_THRESHOLD_THREE) {
      fedTaxThree = (FEDERAL_THRESHOLD_THREE - FEDERAL_THRESHOLD_TWO) * FEDERAL_TAX_THREE;
    } else {
      // If over $40,125 but less than $85,525
      fedTaxThree = (input - FEDERAL_THRESHOLD_TWO) * FEDERAL_TAX_THREE
    }
    totalFed += fedTaxThree;
  }

  // Tax 24% of income over $85,525 and $163,300 (Federal)
  if (input > FEDERAL_THRESHOLD_THREE) {
    if (input >= FEDERAL_THRESHOLD_FOUR) {
      fedTaxFour = (FEDERAL_THRESHOLD_FOUR - FEDERAL_THRESHOLD_THREE) * FEDERAL_TAX_FOUR;
    } else {
      // If over $40,125 but less than $85,525
      fedTaxFour = (input - FEDERAL_THRESHOLD_THREE) * FEDERAL_TAX_FOUR
    }
    totalFed += fedTaxFour;
  }

  // Tax 32% of income over $163,301 and $207,350 (Federal)
  if (input > FEDERAL_THRESHOLD_FOUR) {
    if (input >= FEDERAL_THRESHOLD_FIVE) {
      fedTaxFive = (FEDERAL_THRESHOLD_FIVE - FEDERAL_THRESHOLD_FOUR) * FEDERAL_TAX_FIVE;
    } else {
      // If over $40,125 but less than $207,350
      fedTaxFive = (input - FEDERAL_THRESHOLD_FOUR) * FEDERAL_TAX_FIVE;
    }
    totalFed += fedTaxFive;
  }

  // Tax 35% of income over $207,351 and $518,400 (Federal)
  if (input > FEDERAL_THRESHOLD_FIVE) {
    if (input >= FEDERAL_THRESHOLD_SIX) {
      fedTaxSix = (FEDERAL_THRESHOLD_SIX - FEDERAL_THRESHOLD_FIVE)
      * FEDERAL_TAX_SIX;
    } else {
      // If over $207,351 but less than $518,400
      fedTaxSix = (input - FEDERAL_THRESHOLD_FIVE) * FEDERAL_TAX_SIX;
    }
    totalFed += fedTaxSix;
  }

  // Tax 37% of income over $518,400 (Federal)
  if (input > FEDERAL_THRESHOLD_SIX) {
    fedTaxSeven = (input - FEDERAL_THRESHOLD_SIX) * FEDERAL_TAX_SEVEN;
    totalFed += fedTaxSeven
  }

  // State tax of 3.54% of income up to $11,970
  if (input > ZERO) {
    if (input >= STATE_THRESHOLD_ONE) {
      stateTaxOne = STATE_THRESHOLD_ONE * STATE_TAX_ONE;
    } else {
      stateTaxOne = input * STATE_TAX_ONE;
    }
    totalSate += stateTaxOne;
  }

  // State tax of 4.56% + $423.74 if over $11,970 and $23,930
  if (input > STATE_THRESHOLD_ONE) {
    if (input >= STATE_THRESHOLD_TWO) {
      stateTaxTwo = (STATE_THRESHOLD_TWO - STATE_THRESHOLD_ONE) * STATE_TAX_TWO;
    } else {
      stateTaxTwo = (input - STATE_THRESHOLD_ONE) * STATE_TAX_TWO;
    }
    totalSate += stateTaxTwo;
  }

  // State tax of 6.27% + 979.88 if over $23,930 and $263,480
  if (input > STATE_THRESHOLD_TWO) {
    if (input >= STATE_THRESHOLD_THREE) {
      stateTaxThree = (STATE_THRESHOLD_THREE - STATE_THRESHOLD_TWO) * STATE_TAX_THREE;
    } else {
      stateTaxThree = (input - STATE_THRESHOLD_TWO) * STATE_TAX_THREE;
    }
    totalSate += stateTaxThree;
  }

  // State tax of 7.65% + $15,999.67 if over $263,440
  if (input > STATE_THRESHOLD_THREE) {
    stateTaxFour = (input - STATE_THRESHOLD_THREE) * STATE_TAX_FOUR;
    totalSate += stateTaxFour;
  }

  // Social Security tax of 6.2% up to $137,000
  if (input > ZERO) {
    if (input >= SOCIAL_THRESHOLD) {
      socialTax = SOCIAL_THRESHOLD * SOCIAL_TAX;
    } else {
      socialTax = input * SOCIAL_TAX;
    }
  }

  // Medicare tax of 1.45% up to $200,00
  if (input > ZERO) {
    if (input >= MEDICARE_THRESHOLD) {
      medicareTax = MEDICARE_THRESHOLD * MEDICARE_TAX;
    } else {
      medicareTax = input * MEDICARE_TAX;
    }
    totalMed += medicareTax;
  }

  // Medicare tax of 2.35% if above $200,00
  if (input > MEDICARE_THRESHOLD) {
    medicareTax = (input - MEDICARE_THRESHOLD) * MEDICARE_TAX_TWO;
    totalMed += medicareTax;
  }

   // sum and netPay assignments
  sum = totalFed + totalSate + totalMed + socialTax;
  netPay = input - sum;

  // Get table ID and create rows and data
  let table = document.getElementById("taxTable");
  let rowOne = document.createElement("tr");
  let rowTwo = document.createElement("tr");
  let rowThree = document.createElement("tr");
  let rowFour = document.createElement("tr");
  let rowFive = document.createElement("tr");
  let rowSix = document.createElement("tr");
  let rowSeven = document.createElement("tr");
  let data = document.createElement("td");
  let dataTwo = document.createElement("td");
  let dataThree = document.createElement("td");
  let dataFour = document.createElement("td");
  let dataFive = document.createElement("td");
  let dataSix = document.createElement("td");
  let dataSeven = document.createElement("td");

  // Table initialization
  table.innerHTML = " ";

  // Table assignments after creation, then append
  data.textContent = "Gross Pay" + " $" + input;
  rowOne.appendChild(data);
  table.appendChild(rowOne);
  dataTwo.textContent = "Federal Taxes" + " $" + totalFed.toFixed(2)
  rowTwo.appendChild(dataTwo);
  table.appendChild(dataTwo);
  dataThree.textContent = "State Taxes" + " $" + totalSate.toFixed(2);
  rowThree.appendChild(dataThree);
  table.appendChild(rowThree);
  dataFour.textContent = "Medicare Taxes" + " $" + totalMed.toFixed(2);
  rowFour.appendChild(dataFour);
  table.appendChild(rowFour);
  dataFive.textContent = "SSN Taxes" + " $" + socialTax.toFixed(2);
  rowFive.appendChild(dataFive);
  table.appendChild(rowFive);
  dataSix.textContent = "Total Taxes" + " $" + sum.toFixed(2);
  rowSix.appendChild(dataSix);
  table.appendChild(rowSix);
  dataSeven.textContent = "Net Pay" + " $" + netPay.toFixed(2);
  rowSeven.appendChild(dataSeven);
  table.appendChild(rowSeven);

  // Check values in console
  // console.log(totalFed.toFixed(2));
  // console.log(totalSate.toFixed(2));
  // console.log(totalMed.toFixed(2));
  // console.log(socialTax.toFixed(2));
  // console.log(sum.toFixed(2));
  // console.log(netPay.toFixed(2));
}
