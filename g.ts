import { Component } from '@angular/core';

@Component({
  selector: 'app-green-investment',
  templateUrl: './green-investment.component.html',
  styleUrls: ['./green-investment.component.css']
})
export class GreenInvestmentComponent {
  greenInvestments = [
    { type: "Solar Energy Companies", companyName: "SunPower Corporation", expectedROI: 8.5, riskLevel: 3, description: "Invest in photovoltaic cell manufacturers or solar farm operators" },
    { type: "Wind Power", companyName: "Vestas Wind Systems", expectedROI: 7.2, riskLevel: 2, description: "Invest in wind turbine manufacturers or wind farm projects" },
    { type: "Electric Vehicles", companyName: "Tesla", expectedROI: 12.5, riskLevel: 4, description: "Invest in EV manufacturers or charging infrastructure" },
    { type: "Green Bonds", companyName: "World Bank Green Bond", expectedROI: 4.1, riskLevel: 1, description: "Fixed-income instruments funding environmental projects" },
    { type: "Sustainable Agriculture", companyName: "AppHarvest", expectedROI: 9.8, riskLevel: 3, description: "Invest in organic farming or vertical farming tech" },
    { type: "Water Technology", companyName: "Xylem Inc.", expectedROI: 6.7, riskLevel: 2, description: "Invest in water purification or conservation technologies" },
    { type: "Recycling Tech", companyName: "Waste Management Inc.", expectedROI: 5.9, riskLevel: 2, description: "Invest in waste management and recycling innovations" }
  ];

  selectedInvestment: any = null;
  investmentAmount: number = 0;
  investmentYears: number = 0;
  resultsVisible = false;
  futureValue: number | null = null;
  potentialProfit: number | null = null;

  selectInvestment(index: number) {
    this.selectedInvestment = this.greenInvestments[index];
    this.resultsVisible = false;
    this.investmentAmount = 0;
    this.investmentYears = 0;
  }

  calculate() {
    if (!this.selectedInvestment) return;
    if (this.investmentAmount <= 0 || this.investmentYears <= 0) {
      alert('Please enter valid investment amount and duration');
      return;
    }
    const futureValue = this.investmentAmount * Math.pow(1 + this.selectedInvestment.expectedROI / 100, this.investmentYears);
    this.futureValue = futureValue;
    this.potentialProfit = futureValue - this.investmentAmount;
    this.resultsVisible = true;
  }
}
