document.addEventListener("DOMContentLoaded", () => {
  // 1. CONFIGURATION
  const IMG_BASE_PATH = window.CARD_IMAGE_BASE_PATH || "/assets/images/cards/";

  // 2. STATE
  const STARTING_BUDGET = 25000000;
  // Safely load data
  let stockDB = typeof globalStockData !== "undefined" ? globalStockData : [];
  const activeTickers = new Set();
  const benchList = document.getElementById("benchList");
  let currentSpent = 0;

  // 3. HELPERS
  function getStockPrice(ovr) {
    if (!ovr) ovr = 70;
    if (ovr >= 95) return 4000000;
    if (ovr >= 75) return 3000000;
    if (ovr >= 65) return 2000000;
    return 1000000;
  }

  function formatMoney(amount) {
    return "$" + (amount / 1000000).toFixed(1) + "M";
  }

  function getShortSector(fullSector) {
    if (!fullSector) return "Unknown";
    const sectorMap = {
      "Basic Materials": "Materials",
      "Communication Services": "Comm.",
      "Consumer Cyclical": "Cons. Cyc",
      "Consumer Defensive": "Cons. Def",
      Energy: "Energy",
      "Financial Services": "Financials",
      Healthcare: "Health",
      Industrials: "Ind.",
      "Real Estate": "Real Est.",
      Technology: "Tech",
      Unknown: "Unknown",
      Utilities: "Util.",
    };
    return sectorMap[fullSector] || fullSector;
  }

  window.toggleModal = function (show) {
    document.getElementById("rulesModal").style.display = show
      ? "flex"
      : "none";
  };

  // 4. OBJECTIVES
  const gameObjectives = [
    { id: 1, text: "Rating 85+", check: (s) => s.rating >= 85 },
    { id: 2, text: "Chemistry 20+", check: (s) => s.chemistry >= 20 },
    { id: 3, text: "Positive Budget", check: (s) => s.remainingBudget >= 0 },
    { id: 4, text: "8 Assets", check: (s) => s.count === 8 },
  ];

  function renderObjectives() {
    const list = document.getElementById("objective-list");
    if (!list) return;
    list.innerHTML = "";
    gameObjectives.forEach((obj) => {
      const div = document.createElement("div");
      div.className = "objective-item";
      div.id = `obj-${obj.id}`;
      div.innerHTML = `<span>${obj.text}</span> <i class="fas fa-circle" style="font-size:8px; opacity:0.3;"></i>`;
      list.appendChild(div);
    });
  }

  function checkObjectives(stats) {
    gameObjectives.forEach((obj) => {
      const el = document.getElementById(`obj-${obj.id}`);
      if (el && obj.check(stats)) {
        el.classList.add("completed");
        el.querySelector("i").className = "fas fa-check-circle";
      } else if (el) {
        el.classList.remove("completed");
        el.querySelector("i").className = "fas fa-circle";
      }
    });
  }

  // 5. CALCULATIONS
  function calculateGameStats() {
    const allCards = document.querySelectorAll(".stock-card");
    const gridCards = document.querySelectorAll(".slots-grid .stock-card");

    let totalOvr = 0;
    let totalCost = 0;
    let sectorCounts = {};
    let industryCounts = {};
    const count = gridCards.length;

    allCards.forEach((card) => {
      totalCost += parseInt(card.getAttribute("data-price")) || 0;
    });
    currentSpent = totalCost;

    gridCards.forEach((card) => {
      const ovr = parseInt(card.getAttribute("data-ovr")) || 0;
      const sector = card.getAttribute("data-sector");
      const industry = card.getAttribute("data-industry");
      totalOvr += ovr;
      if (sector) sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
      if (industry)
        industryCounts[industry] = (industryCounts[industry] || 0) + 1;
    });

    let rating = count > 0 ? Math.round(totalOvr / count) : 0;
    if (rating > 99) rating = 99;

    let chemistry = 0;
    Object.values(sectorCounts).forEach(
      (qty) => (chemistry += Math.floor(qty / 3) * 3)
    );
    Object.values(industryCounts).forEach(
      (qty) => (chemistry += Math.floor(qty / 3) * 3)
    );
    if (chemistry > 24) chemistry = 24;

    const overall = rating + chemistry;
    const remaining = STARTING_BUDGET - totalCost;

    document.getElementById("stat-rating").innerText = rating;
    document.getElementById("stat-chemistry").innerText = chemistry;
    document.getElementById("stat-overall").innerText = overall;

    const budgetEl = document.getElementById("stat-budget-text");
    budgetEl.innerText = formatMoney(remaining);
    budgetEl.classList.toggle("danger", remaining < 0);
    document.getElementById("stat-assets").innerText = `${count} / 8 Assets`;

    checkObjectives({ rating, chemistry, remainingBudget: remaining, count });
  }

  // 6. SORTABLE
  if (benchList) {
    new Sortable(benchList, {
      group: { name: "shared", pull: true, put: true },
      animation: 150,
      sort: true,
      ghostClass: "sortable-ghost",
      onAdd: checkBenchEmptyState,
      onRemove: checkBenchEmptyState,
    });
  }

  document.querySelectorAll(".slot").forEach((slot) => {
    new Sortable(slot, {
      group: "shared",
      animation: 150,
      ghostClass: "sortable-ghost",
      onAdd: function (evt) {
        const item = evt.item;
        const icon = slot.querySelector(".empty-state-icon");
        if (icon) icon.style.display = "none";

        // Only 1 card per slot, swap if needed
        const children = Array.from(slot.children).filter((c) =>
          c.classList.contains("stock-card")
        );
        if (children.length > 1) {
          const oldItem = children.find((c) => c !== item);
          if (oldItem) benchList.appendChild(oldItem);
        }

        // Update Sector Label
        const wrapper = slot.parentElement;
        const label = wrapper.querySelector(".pos-label");
        if (label) {
          const sec = item.getAttribute("data-sector");
          if (sec) label.innerText = getShortSector(sec);
        }
        calculateGameStats();
        checkBenchEmptyState();
      },
      onRemove: function (evt) {
        const children = Array.from(slot.children).filter((c) =>
          c.classList.contains("stock-card")
        );
        if (children.length === 0) {
          const icon = slot.querySelector(".empty-state-icon");
          if (icon) icon.style.display = "block";
        }
        const wrapper = slot.parentElement;
        const label = wrapper.querySelector(".pos-label");
        if (label) {
          const defaultText = label.getAttribute("data-default");
          if (defaultText) label.innerHTML = defaultText;
        }
        calculateGameStats();
      },
    });
  });

  function checkBenchEmptyState() {
    if (!benchList) return;
    const hasCards = benchList.querySelector(".stock-card");
    const msg = benchList.querySelector(".empty-bench-msg");
    if (msg) msg.style.display = hasCards ? "none" : "block";
  }

  // 7. SEARCH & ADD
  const searchInput = document.getElementById("stockSearch");
  const dropdown = document.getElementById("searchDropdown");

  function performSearch(val) {
    if (!dropdown) return;
    dropdown.innerHTML = "";
    if (val.length < 1) {
      dropdown.style.display = "none";
      return;
    }
    if (stockDB.length === 0) {
      dropdown.style.display = "block";
      dropdown.innerHTML = '<div style="padding:10px; color:red">No Data</div>';
      return;
    }

    const matches = stockDB.filter(
      (s) => s.t.toLowerCase().includes(val) || s.n.toLowerCase().includes(val)
    );

    const budgetHeader = document.createElement("div");
    budgetHeader.style.cssText =
      "padding: 8px 15px; background: #f1f5f9; font-size: 11px; font-weight: 700; color: #64748b; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; z-index: 10;";
    const remaining = STARTING_BUDGET - currentSpent;
    budgetHeader.innerHTML = `BUDGET LEFT: <span style="color: ${
      remaining < 0 ? "#ef4444" : "#10b981"
    }">${formatMoney(remaining)}</span>`;
    dropdown.appendChild(budgetHeader);

    if (matches.length > 0) {
      dropdown.style.display = "block";
      matches.slice(0, 10).forEach((s) => {
        const isTaken = activeTickers.has(s.t);
        const ovr = s.o || 70;
        const industry = s.i || "Unknown Ind.";
        const price = getStockPrice(ovr);
        const canAfford = currentSpent + price <= STARTING_BUDGET;
        const isDisabled = isTaken || !canAfford;

        const item = document.createElement("div");
        item.className = `dropdown-item ${isDisabled ? "disabled" : ""}`;

        let statusBadge = "";
        if (isTaken)
          statusBadge = '<span style="font-size:10px;">✓ Owned</span>';
        else if (!canAfford)
          statusBadge =
            '<span style="font-size:10px; color:#ef4444;">Too Expensive</span>';

        const truncateName = (name, maxLength = 20) => {
          return name.length > maxLength
            ? name.substring(0, maxLength) + "..."
            : name;
        };

        item.innerHTML = `
                    <div class="dd-ticker">${s.t}</div>
                    <div class="dd-info"><span class="dd-name">${truncateName(
                      s.n
                    )}</span><span class="dd-meta">${
          s.s
        } • ${ovr} OVR</span></div>
                    <div style="text-align:right;"><div class="dd-cost-badge">${formatMoney(
                      price
                    )}</div>${statusBadge}</div>
                `;
        if (!isDisabled) {
          item.onclick = () => {
            addToBench({ ...s, o: ovr, i: industry, price });
            searchInput.value = "";
            dropdown.style.display = "none";
          };
        }
        dropdown.appendChild(item);
      });
    } else {
      dropdown.style.display = "block";
      dropdown.appendChild(budgetHeader);
      const noRes = document.createElement("div");
      noRes.innerHTML =
        '<div style="padding:10px; color:#94a3b8">No results</div>';
      dropdown.appendChild(noRes);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) =>
      performSearch(e.target.value.toLowerCase().trim())
    );
  }
  document.addEventListener("click", (e) => {
    if (
      searchInput &&
      dropdown &&
      !searchInput.contains(e.target) &&
      !dropdown.contains(e.target)
    )
      dropdown.style.display = "none";
  });

  window.addToBench = function (stockData) {
    if (currentSpent + stockData.price > STARTING_BUDGET) {
      alert("Insufficient Budget!");
      return;
    }
    if (activeTickers.has(stockData.t)) return;
    activeTickers.add(stockData.t);

    const card = document.createElement("div");
    card.className = "stock-card";
    card.setAttribute("data-ticker", stockData.t);
    card.setAttribute("data-ovr", stockData.o);
    card.setAttribute("data-price", stockData.price);
    card.setAttribute("data-sector", stockData.s);
    card.setAttribute("data-industry", stockData.i);

    // HERE IS THE PATH LOGIC
    const imgSrc = `${IMG_BASE_PATH}card_${stockData.t}.png`;
    const placeholder = `https://placehold.co/400x560/solid/333333?text=${stockData.t}`;

    card.innerHTML = `
            <img src="${imgSrc}" class="card-full-img" alt="${stockData.t}" onerror="this.src='${placeholder}'">
            <div class="card-ovr-badge">${stockData.o}</div>
            <div class="card-remove-btn" onclick="removeCard(this, '${stockData.t}')"><i class="fas fa-times"></i></div>
        `;
    benchList.insertBefore(card, benchList.firstChild);
    calculateGameStats();
    checkBenchEmptyState();
  };

  window.removeCard = function (el, ticker) {
    event.stopPropagation();
    el.closest(".stock-card").remove();
    activeTickers.delete(ticker);
    calculateGameStats();
    checkBenchEmptyState();
  };

  window.clearBench = function () {
    benchList.querySelectorAll(".stock-card").forEach((card) => {
      activeTickers.delete(card.getAttribute("data-ticker"));
      card.remove();
    });
    calculateGameStats();
    checkBenchEmptyState();
  };

  renderObjectives();
});
