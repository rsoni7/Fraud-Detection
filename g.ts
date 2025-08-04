import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Make sure to import FormsModule

@Component({
  selector: 'app-green-investment',
  templateUrl: './green-investment.component.html',
  styleUrls: ['./green-investment.component.scss']
})
export class GreenInvestmentComponent {
  // Investment data
  investments = [
    {
      type: "Solar Energy Companies",
      companyName: "SunPower Corporation",
      expectedROI: 8.5,
      riskLevel: 3,
      description: "Invest in photovoltaic cell manufacturers or solar farm operators"
    },
    // ... rest of your investment data ...
  ];

  // Form variables
  amount: number = 0;
  years: number = 0;
  futureValue: number = 0;
  
  // UI state
  selectedInvestment: any = null;
  showResults: boolean = false;

  // Select an investment
  selectInvestment(index: number): void {
    this.selectedInvestment = this.investments[index];
    this.showResults = false;
    // Reset form values when selecting new investment
    this.amount = 0;
    this.years = 0;
    this.futureValue = 0;
  }

  // Calculate investment growth
  calculate(): void {
    if (!this.selectedInvestment) {
      alert('Please select an investment first');
      return;
    }

    if (this.amount <= 0 || this.years <= 0) {
      alert('Please enter valid investment amount and duration');
      return;
    }

    // Calculate future value
    this.futureValue = this.calculateFutureValue(
      this.amount, 
      this.selectedInvestment.expectedROI, 
      this.years
    );
    
    this.showResults = true;
  }

  // Calculation helper function
  private calculateFutureValue(principal: number, annualRate: number, years: number): number {
    return principal * Math.pow(1 + annualRate / 100, years);
  }
}