// Green investment data
const greenInvestments = [
    {
        type: "Solar Energy Companies",
        companyName: "SunPower Corporation",
        expectedROI: 8.5,
        riskLevel: 3,
        description: "Invest in photovoltaic cell manufacturers or solar farm operators"
    },
    {
        type: "Wind Power",
        companyName: "Vestas Wind Systems",
        expectedROI: 7.2,
        riskLevel: 2,
        description: "Invest in wind turbine manufacturers or wind farm projects"
    },
    {
        type: "Electric Vehicles",
        companyName: "Tesla",
        expectedROI: 12.5,
        riskLevel: 4,
        description: "Invest in EV manufacturers or charging infrastructure"
    },
    {
        type: "Green Bonds",
        companyName: "World Bank Green Bond",
        expectedROI: 4.1,
        riskLevel: 1,
        description: "Fixed-income instruments funding environmental projects"
    },
    {
        type: "Sustainable Agriculture",
        companyName: "AppHarvest",
        expectedROI: 9.8,
        riskLevel: 3,
        description: "Invest in organic farming or vertical farming tech"
    },
    {
        type: "Water Technology",
        companyName: "Xylem Inc.",
        expectedROI: 6.7,
        riskLevel: 2,
        description: "Invest in water purification or conservation technologies"
    },
    {
        type: "Recycling Tech",
        companyName: "Waste Management Inc.",
        expectedROI: 5.9,
        riskLevel: 2,
        description: "Invest in waste management and recycling innovations"
    }
];

// Current selected investment
let selectedInvestment = null;

// DOM elements
const investmentOptionsEl = document.getElementById('investmentOptions');
const calculatorContainerEl = document.getElementById('calculatorContainer');
const investmentTitleEl = document.getElementById('investmentTitle');
const investmentDescriptionEl = document.getElementById('investmentDescription');
const calculateBtn = document.getElementById('calculateBtn');
const resultsEl = document.getElementById('results');
const yearsSpanEl = document.getElementById('yearsSpan');
const futureValueEl = document.getElementById('futureValue');
const potentialProfitEl = document.getElementById('potentialProfit');
const annualReturnEl = document.getElementById('annualReturn');

// Render investment options
function renderInvestmentOptions() {
    investmentOptionsEl.innerHTML = '';
    
    greenInvestments.forEach((investment, index) => {
        const card = document.createElement('div');
        card.className = 'investment-card';
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-header">${investment.type}</div>
            <div class="card-body">
                <h3>${investment.companyName}</h3>
                <div style="margin: 0.5rem 0;">
                    <span class="roi-badge">ROI: ${investment.expectedROI}%</span>
                    <span class="risk-badge">Risk: ${investment.riskLevel}/5</span>
                </div>
            </div>
            <div class="card-footer">${investment.description}</div>
        `;
        
        card.addEventListener('click', () => selectInvestment(index));
        investmentOptionsEl.appendChild(card);
    });
}

// Select an investment
function selectInvestment(index) {
    selectedInvestment = greenInvestments[index];
    
    // Update calculator UI
    investmentTitleEl.textContent = `${selectedInvestment.companyName} Investment Calculator`;
    investmentDescriptionEl.textContent = selectedInvestment.description;
    
    // Show calculator
    calculatorContainerEl.classList.add('active');
    resultsEl.classList.remove('active');
    
    // Scroll to calculator
    calculatorContainerEl.scrollIntoView({ behavior: 'smooth' });
}

// Calculate investment growth
function calculateGreenInvestmentGrowth(principal, annualRate, years) {
    return principal * Math.pow(1 + annualRate/100, years);
}

// Handle calculate button click
calculateBtn.addEventListener('click', () => {
    if (!selectedInvestment) return;
    
    const amount = parseFloat(document.getElementById('investmentAmount').value);
    const years = parseInt(document.getElementById('investmentYears').value);
    
    if (isNaN(amount) || isNaN(years) || amount <= 0 || years <= 0) {
        alert('Please enter valid investment amount and duration');
        return;
    }
    
    const futureValue = calculateGreenInvestmentGrowth(
        amount, selectedInvestment.expectedROI, years);
    
    // Update results
    yearsSpanEl.textContent = years;
    futureValueEl.textContent = `$${futureValue.toFixed(2)}`;
    potentialProfitEl.textContent = `$${(futureValue - amount).toFixed(2)}`;
    annualReturnEl.textContent = `${selectedInvestment.expectedROI.toFixed(2)}%`;
    
    // Show results
    resultsEl.classList.add('active');
});

// Initialize the app
renderInvestmentOptions();