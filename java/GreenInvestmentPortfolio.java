import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class GreenInvestmentPortfolio {

    // Enum representing different green investment categories
    enum GreenInvestmentType {
        SOLAR_ENERGY("Solar Energy Companies", "Invest in photovoltaic cell manufacturers or solar farm operators"),
        WIND_POWER("Wind Power", "Invest in wind turbine manufacturers or wind farm projects"),
        ELECTRIC_VEHICLES("Electric Vehicles", "Invest in EV manufacturers or charging infrastructure"),
        GREEN_BONDS("Green Bonds", "Fixed-income instruments funding environmental projects"),
        SUSTAINABLE_AGRICULTURE("Sustainable Agriculture", "Invest in organic farming or vertical farming tech"),
        WATER_TECH("Water Technology", "Invest in water purification or conservation technologies"),
        RECYCLING("Recycling Tech", "Invest in waste management and recycling innovations");

        private final String name;
        private final String description;

        GreenInvestmentType(String name, String description) {
            this.name = name;
            this.description = description;
        }

        public String getName() {
            return name;
        }

        public String getDescription() {
            return description;
        }
    }

    // Class representing a green investment opportunity
    static class GreenInvestment {
        private GreenInvestmentType type;
        private String companyName;
        private double expectedROI; // Expected return on investment
        private int riskLevel; // 1 (low) to 5 (high)

        public GreenInvestment(GreenInvestmentType type, String companyName, double expectedROI, int riskLevel) {
            this.type = type;
            this.companyName = companyName;
            this.expectedROI = expectedROI;
            this.riskLevel = riskLevel;
        }

        // Getters
        public String getCompanyName() { return companyName; }
        public GreenInvestmentType getType() { return type; }
        public double getExpectedROI() { return expectedROI; }
        public int getRiskLevel() { return riskLevel; }

        @Override
        public String toString() {
            return String.format("%s (%s)\n  Expected ROI: %.2f%%\n  Risk Level: %d/5\n  Description: %s",
                    companyName, type.getName(), expectedROI, riskLevel, type.getDescription());
        }
    }

    // Method to calculate compound interest for an investment
    public static double calculateGreenInvestmentGrowth(double principal, double annualRate, int years) {
        return principal * Math.pow(1 + annualRate/100, years);
    }

    public static void main(String[] args) {
        // Create a portfolio of green investments
        List<GreenInvestment> portfolio = new ArrayList<>();
        portfolio.add(new GreenInvestment(GreenInvestmentType.SOLAR_ENERGY, "SunPower Corporation", 8.5, 3));
        portfolio.add(new GreenInvestment(GreenInvestmentType.WIND_POWER, "Vestas Wind Systems", 7.2, 2));
        portfolio.add(new GreenInvestment(GreenInvestmentType.ELECTRIC_VEHICLES, "Tesla", 12.5, 4));
        portfolio.add(new GreenInvestment(GreenInvestmentType.GREEN_BONDS, "World Bank Green Bond", 4.1, 1));
        portfolio.add(new GreenInvestment(GreenInvestmentType.SUSTAINABLE_AGRICULTURE, "AppHarvest", 9.8, 3));
        portfolio.add(new GreenInvestment(GreenInvestmentType.WATER_TECH, "Xylem Inc.", 6.7, 2));
        portfolio.add(new GreenInvestment(GreenInvestmentType.RECYCLING, "Waste Management Inc.", 5.9, 2));

        Scanner scanner = new Scanner(System.in);

        System.out.println("🌱 Green Investment Opportunities 🌱");
        System.out.println("====================================");
        
        // Display all investment options
        System.out.println("\nAvailable Green Investment Options:");
        for (int i = 0; i < portfolio.size(); i++) {
            System.out.printf("%d. %s\n", i+1, portfolio.get(i).getType().getName());
        }

        // Get user input
        System.out.print("\nSelect an investment option (1-" + portfolio.size() + ") to see details: ");
        int choice = scanner.nextInt();
        
        if (choice > 0 && choice <= portfolio.size()) {
            GreenInvestment selected = portfolio.get(choice - 1);
            System.out.println("\n" + selected);
            
            // Investment calculator
            System.out.println("\nInvestment Growth Calculator:");
            System.out.print("Enter initial investment amount ($): ");
            double amount = scanner.nextDouble();
            System.out.print("Enter investment duration (years): ");
            int years = scanner.nextInt();
            
            double futureValue = calculateGreenInvestmentGrowth(
                amount, selected.getExpectedROI(), years);
            
            System.out.printf("\nProjected value after %d years: $%.2f\n", 
                years, futureValue);
            System.out.printf("Potential profit: $%.2f\n", futureValue - amount);
            System.out.printf("Annualized return: %.2f%%\n", selected.getExpectedROI());
        } else {
            System.out.println("Invalid selection.");
        }

        scanner.close();
    }
}