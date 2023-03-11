if (target.classList.value === "plans-box") {
    plansBox.forEach(function (planBox) {
      planBox.classList.remove("active-plan-box");
      target.classList.add("active-plan-box");
    });
  } else if (target.classList.value === "plans-track") {
    if (trackState) {
      trackDiv.classList.add("yearly-track");

      const plansCost = plansContainer.querySelectorAll(".plans-cost");
      plansCost.forEach(function (planCost) {
        planCost.innerText = planCost.innerText.slice(0, -3) + "0" + "/yr";
      });

      yearly.classList.add("active-plan");
      monthly.classList.remove("active-plan");

      plansBox.forEach(function (planBox) {
        const yearPopUp = document.createElement("p");
        yearPopUp.classList.add("year-pop-up");
        let plansInfo = planBox.querySelector(".plans-info");
        yearPopUp.innerText = "2 months free";
        plansInfo.append(yearPopUp);
      });

      addonsDiv.forEach(function (addDiv) {
        const addonTime = addDiv.querySelector(".addons-time");
        addonTime.innerText = addonTime.innerText.slice(0, 3) + "0" + "/yr";
      });
    } else {
      const plansCost = plansContainer.querySelectorAll(".plans-cost");
      plansCost.forEach(function (planCost) {
        planCost.innerText = planCost.innerText.slice(0, -4) + "/mo";
      });

      monthly.classList.add("active-plan");
      yearly.classList.remove("active-plan");

      trackDiv.classList.remove("yearly-track");

      plansBox.forEach(function (planBox) {
        let plansInfo = planBox.querySelector(".plans-info");
        let yearPopUp = plansInfo.querySelector(".year-pop-up");
        yearPopUp.classList.add("remove-popup");
        yearPopUp.classList.remove("year-pop-up");
      });

      addonsDiv.forEach(function (addDiv) {
        const addonTime = addDiv.querySelector(".addons-time");
        addonTime.innerText = addonTime.innerText.slice(0, 3) + "/mo";
      });
    }
    trackState = !trackState;
  }

  const activePlanBox = plansContainer.querySelector(".active-plan-box");
  const plansTitle = activePlanBox.querySelector(".plans-title");
  const activePlanCost = activePlanBox.querySelector(".plans-cost");
  const activePlan = plansContainer.querySelector(".active-plan");

  planSelected.innerHTML = `${plansTitle.innerText} <span>(${activePlan.innerText})</span>`;

  planPrice.innerText = activePlanCost.innerText;

  let slicedActivePlan = activePlan.innerText.slice(0, -2);
  totalSpan.innerText = `(per ${slicedActivePlan.toLowerCase()})`;

  updatePrices();

  calculateTotalPrice();


// The addons:
addonsDiv.forEach(function (addDiv) {
  addDiv.addEventListener("click", function () {
    this.classList.toggle("active-addon");
    let checkBox = this.querySelector("input");
    if (this.classList.contains("active-addon")) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }
  });
});

const addonsContainer = document.querySelector(".addons-container");
addonsContainer.addEventListener("click", function (e) {
  let target = e.target;
  if (target.classList.contains("active-addon")) {
    const addonTitle = target.querySelector(".plans-title");
    const addonsTime = target.querySelector(".addons-time");

    const addonSummary = document.createElement("div");
    addonSummary.classList.add("addon-summary");

    const addonSelected = document.createElement("p");
    addonSelected.classList.add("addon-selected");
    addonSelected.innerText = addonTitle.innerText;

    const addonPrice = document.createElement("p");
    addonPrice.classList.add("addon-price");
    addonPrice.innerText = addonsTime.innerText;

    addonSummary.appendChild(addonSelected);
    addonSummary.appendChild(addonPrice);

    bottomSummary.appendChild(addonSummary);
    bottomSummary.classList.add("active-bottom-summary");

    calculateTotalPrice();
  } else {
    const addonTitle = target.querySelector(".plans-title");
    const totalAddons = bottomSummary.querySelectorAll(".addon-summary");

    totalAddons.forEach(function (totalAddon) {
      const addonSelected = totalAddon.querySelector(".addon-selected");
      if (addonTitle.innerText === addonSelected.innerText) {
        bottomSummary.removeChild(addonSelected.parentElement);
      }
    });

    if (totalAddons.length === 1) {
      bottomSummary.classList.remove("active-bottom-summary");
    }

    calculateTotalPrice();
  }
});

// Update the prices:
function updatePrices() {
  const addonSummary = bottomSummary.querySelectorAll(".addon-summary");

  if (addonSummary.length !== 0) {
    addonSummary.forEach(function (addon) {
      addonsDiv.forEach(function (addDiv) {
        const addonTime = addDiv.querySelector(".addons-time");
        const addonsTitle = addDiv.querySelector(".plans-title");
        const addonsSelected = addon.querySelector(".addon-selected");
        if (addonsSelected.innerText === addonsTitle.innerText) {
          const addonsPrice = addon.querySelector(".addon-price");
          addonsPrice.innerText = addonTime.innerText;
        }
      });
    });
  }
}

// The total Price:
function calculateTotalPrice() {
  let planPrice = summary.querySelector(".plan-price");
  let totalArray = [];
  let firstPriceMod = planPrice.innerText.slice(0, -3);
  let secondPriceMod = Number(firstPriceMod.slice(1));

  totalArray.push(secondPriceMod);

  const addonSummary = bottomSummary.querySelectorAll(".addon-summary");
  if (addonSummary.length !== 0) {
    addonSummary.forEach(function (addon) {
      const addonPrice = addon.querySelector(".addon-price");
      let addonPriceMod = addonPrice.innerText.slice(0, -3);
      let addonPriceFinal = Number(addonPriceMod.slice(2));
      totalArray.push(addonPriceFinal);
    });
  }

  let sumOfPrices = totalArray.reduce((a, b) => a + b, 0);
  const totalprice = document.querySelector(".total-price");

  const activePlan = document.querySelector(".active-plan");
  let slicedActivePlan = activePlan.innerText.slice(0, -5);
  if (activePlan.classList.contains("monthly")) {
    totalprice.innerText = `$${sumOfPrices.toString()}/${slicedActivePlan.toLowerCase()}`;
  } else {
    totalprice.innerText = `$${sumOfPrices.toString()}/${slicedActivePlan.toLowerCase()}r`;
  }
}

calculateTotalPrice();

confirm.addEventListener("click", confirmedInput);
function confirmedInput() {
  let carouselBtns = document.querySelector(".carousel-btn");

  const planSelected = document.querySelector(".plan-selected");

  if (validName && validEmail && validNumber) {
    counter++;
    carousel();
    numbers.forEach(function (number) {
      number.classList.add("stop-number");
    });

    function removeBtns() {
      if (x.matches) {
        carouselBtns.classList.add("remove-btns");
      }
    }
    var x = window.matchMedia("(max-width: 1000px)");
    removeBtns(x);
  } else if (!validName && validEmail && validNumber) {
    alert("Oops, seems the name input is either empty or invalid.");
    counter = 0;
    carousel();
  } else if (validName && !validEmail && validNumber) {
    alert("Oops, seems the email input is either empty or invalid.");
    counter = 0;
    carousel();
  } else if (validName && validEmail && !validNumber) {
    alert("Oops, seems the number input is either empty or invalid.");
    counter = 0;
    carousel();
  } else {
    alert("Please enter all input fields.");
    counter = 0;
    carousel();
  }
  if (validName && validEmail && validNumber && planSelected.innerText === "") {
    alert("Please select a plan");
    counter = 1;
    carousel();
    carouselBtns.classList.remove("remove-btns");
  }
}