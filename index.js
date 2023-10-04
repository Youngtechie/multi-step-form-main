let arrAddOns = [];
let plan = "Monthly";
let currentForm = 0;
let planbill = 1;
let total = 0;
let active = document.querySelector(`.groupNav:nth-of-type(1) button`);
active.style.backgroundColor = "hsl(206, 94%, 87%)";
active.style.color = "black";

const form = document.querySelector(".sec1 form");
form.addEventListener("submit", submit);

const addOnsM = [
  {
    id: 1,
    name: "Online service",
    price: 1,
  },
  {
    id: 2,
    name: "Larger storage",
    price: 2,
    check: "false",
  },
  {
    id: 3,
    name: "Customizable profile",
    price: 2,
  },
];
const addOnsY = [
  {
    id: 4,
    name: "Online service",
    price: 10,
  },
  {
    id: 5,
    name: "Larger storage",
    price: 20,
  },
  {
    id: 6,
    name: "Customizable profile",
    price: 20,
  },
];
const planBillM = [
  {
    name: "Arcade",
    price: 9,
  },
  {
    name: "Advanced",
    price: 12,
  },
  {
    name: "Pro",
    price: 15,
  },
];
const planBillY = [
  {
    name: "Arcade",
    price: 90,
  },
  {
    name: "Advanced",
    price: 120,
  },
  {
    name: "Pro",
    price: 150,
  },
];

function updateCurrent(num) {

    if (num === 5) {
        planbill = 4
      }

  document.querySelectorAll(".groupNav button").forEach((nav) => {
    nav.style.backgroundColor = "transparent";
    nav.style.color = "hsl(0, 0%, 100%)";
  });
  let active = document.querySelector(`.groupNav:nth-of-type(${planbill}) button`);
  active.style.backgroundColor = "hsl(206, 94%, 87%)";
  active.style.color = "black";
  document.querySelectorAll(".sec").forEach((sec) => {
    sec.style.display = "none";
  });
  let currentSec = document.querySelector(`.sec${num}`);
  currentSec.style.display = "flex";
  currentForm = num;

  if (currentForm === 3) {
    document
      .querySelectorAll(".checks")
      .forEach((check) => (check.style.display = "none"));
    const current = document.querySelector(`.checks.${plan}`);
    current.style.display = "grid";
  }
  if (currentForm === 4) {
    summary();
  }
  
}

function submit(e) {
  e.preventDefault();
  updateCurrent(2);
}

function updateCurrentPlan(num, plan) {
  document.querySelectorAll(`.options.${plan} button`).forEach((btn) => {
    btn.style.backgroundColor = "transparent";
    btn.style.border = "1px solid hsl(229, 24%, 87%)";
  });

  let active = document.querySelector(
    `.options.${plan} button:nth-of-type(${num})`
  );
  active.style.border = "1px solid hsl(243, 100%, 62%)";
  active.style.backgroundColor = "hsl(231, 100%, 99%)";
  planbill = num;
}

function updateCurrentPlanSession() {
  arrAddOns = [];
  planbill = 1;
  document.querySelectorAll(`.options.${plan} button`).forEach((btn) => {
    btn.style.backgroundColor = "transparent";
    btn.style.border = "1px solid hsl(229, 24%, 87%)";
  });

  let active = document.querySelector(
    `.options.${plan} button:nth-of-type(${planbill})`
  );
  active.style.border = "1px solid hsl(243, 100%, 62%)";
  active.style.backgroundColor = "hsl(231, 100%, 99%)";

  document.querySelectorAll(".checks.Monthly button").forEach((btn) => {
    btn.style.border = "1px solid hsl(229, 24%, 87%)";
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
  });

  document.querySelectorAll(".checks.Yearly button").forEach((btn) => {
    btn.style.border = "1px solid hsl(229, 24%, 87%)";
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
  });

  document
    .querySelectorAll(".checks.Yearly button .checkBox")
    .forEach((checkbox) => {
      checkbox.style.backgroundImage = "none";
      checkbox.style.backgroundColor = "hsl(0, 0%, 100%)";
    });

  document
    .querySelectorAll(`.checks.Monthly button .checkBox`)
    .forEach((checkbox) => {
      checkbox.style.backgroundImage = "none";
      checkbox.style.backgroundColor = "hsl(0, 0%, 100%)";
    });

  const select = document.querySelector(".select");
  if (
    select.style.justifyContent == "" ||
    select.style.justifyContent == "flex-start"
  ) {
    select.style.justifyContent = "flex-end";
    document.querySelector(".opt2").style.color = "hsl(213, 96%, 18%)";
    document.querySelector(".opt1").style.color = "hsl(231, 11%, 63%)";
    document.querySelector(".Yearly").style.display = "flex";
    document.querySelector(".Monthly").style.display = "none";
    plan = "Yearly";
  } else {
    select.style.justifyContent = "flex-start";
    document.querySelector(".opt2").style.color = "hsl(231, 11%, 63%)";
    document.querySelector(".opt1").style.color = "hsl(213, 96%, 18%)";
    document.querySelector(".Yearly").style.display = "none";
    document.querySelector(".Monthly").style.display = "flex";
    plan = "Monthly";
  }
}
function PickAddOns(num, plan) {
  if (plan === "M") {
    const boolean = arrAddOns.includes(addOnsM[num - 1]);
    const selected = document.querySelector(
      `.checks.Monthly button:nth-of-type(${num})`
    );
    const checkbox = document.querySelector(
      `.checks.Monthly button:nth-of-type(${num}) .checkBox`
    );

    if (!boolean) {
      arrAddOns.push(addOnsM[num - 1]);
      selected.style.border = "1px solid hsl(243, 100%, 62%)";
      selected.style.backgroundColor = "hsl(231, 100%, 99%)";
      checkbox.style.backgroundImage =
        "url(./assets/images/icon-checkmark.svg)";
      checkbox.style.backgroundColor = "hsl(243, 100%, 62%)";
    } else {
      arrAddOns = arrAddOns.filter((addon) => addon !== addOnsM[num - 1]);
      selected.style.border = "1px solid hsl(229, 24%, 87%)";
      selected.style.backgroundColor = "hsl(0, 0%, 100%)";
      checkbox.style.backgroundImage = "none";
      checkbox.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
  } else {
    const boolean = arrAddOns.includes(addOnsY[num - 4]);
    const selected = document.querySelector(
      `.checks.Yearly button:nth-of-type(${num - 3})`
    );
    const checkbox = document.querySelector(
      `.checks.Yearly button:nth-of-type(${num - 3}) .checkBox`
    );
    if (!boolean) {
      arrAddOns.push(addOnsY[num - 4]);
      selected.style.border = "1px solid hsl(243, 100%, 62%)";
      selected.style.backgroundColor = "hsl(231, 100%, 99%)";
      checkbox.style.backgroundImage =
        "url(./assets/images/icon-checkmark.svg)";
      checkbox.style.backgroundColor = "hsl(243, 100%, 62%)";
    } else {
      arrAddOns = arrAddOns.filter((addon) => addon !== addOnsY[num - 4]);
      selected.style.border = "1px solid hsl(229, 24%, 87%)";
      selected.style.backgroundColor = "hsl(0, 0%, 100%)";
      checkbox.style.backgroundImage = "none";
      checkbox.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
  }
}

function summary() {
  const planShow = document.querySelector(".summaryPlan span:nth-of-type(1)");
  const planAmount = document.querySelector(".summaryAmount");
  const addOnsShow = document.createElement("div");
  addOnsShow.classList.add("summaryAddons");
  const mid = document.querySelector(".mid");
  total = 0;

  if (document.querySelector(".summaryAddons")) {
    document.querySelector(".mid .summaryAddons").remove();
  }

  const totalSummaryPrice = document.querySelector(
    ".totalSummary .totalAmount"
  );
  const totalSummaryPlan = document.querySelector(".totalSummary .totalPlan");

  if (plan === "Monthly") {
    planShow.innerHTML = `${planBillM[planbill - 1].name} (${plan})`;
    planAmount.innerHTML = `$${planBillM[planbill - 1].price}/mo`;

    if (
      arrAddOns.length > 0 &&
      addOnsShow.children.length !== arrAddOns.length
    ) {
      total = 0;
      arrAddOns.forEach((addon) => {
        const div = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");

        span1.innerHTML = addon.name;
        span2.innerHTML = `+$${addon.price}/mo`;
        span2.classList.add("col");

        div.appendChild(span1);
        div.appendChild(span2);
        addOnsShow.appendChild(div);

        total += addon.price;
      });

      mid.appendChild(addOnsShow);
    }

    totalSummaryPlan.innerHTML = "month";

    let totalAll = planBillM[planbill - 1].price + total;

    totalSummaryPrice.innerHTML = `+$${totalAll}/mo`;
  } else if (plan === "Yearly") {
    planShow.innerHTML = `${planBillY[planbill - 1].name} (${plan})`;
    planAmount.innerHTML = `$${planBillY[planbill - 1].price}/mo`;

    if (arrAddOns.length > 0) {
      arrAddOns.forEach((addon) => {
        const div = document.createElement("div");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");

        span1.innerHTML = addon.name;
        span2.innerHTML = `+$${addon.price}/mo`;
        span2.classList.add("col");

        div.appendChild(span1);
        div.appendChild(span2);
        addOnsShow.appendChild(div);

        total += addon.price;
      });

      mid.appendChild(addOnsShow);
    }

    totalSummaryPlan.innerHTML = "year";

    let totalAll = planBillY[planbill - 1].price + total;

    totalSummaryPrice.innerHTML = `+$${totalAll}/yr`;
  }
}
