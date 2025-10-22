# Create a React Pivot Table component

This sample demonstrates how to **create and configure a Pivot Table using Syncfusion's React PivotView component**, including features like calculated fields, field list, and basic data binding.

## 📖 Overview

The **Syncfusion Pivot Table (PivotView)** is a powerful React component for analyzing and summarizing large datasets. In this example:

- A sample dataset is used with fields such as `Country`, `Products`, `Year`, `Quarter`, `Sold`, and `Amount`.
- The Pivot Table is configured with:
  - **Rows:** `Country`, `Products`
  - **Columns:** `Year`
  - **Values:** `Sold` (Units Sold), `Amount` (Sold Amount), and a **Calculated Field** `Total` (Sum of Sold and Amount)
  - **Filters:** `Quarter`
- A **Calculated Field** named `Total` is added using the formula: `"Sum(Amount)" + "Sum(Sold)"`.
- The **Field List** and **Calculated Field** features are enabled for interactive configuration.

## ✅ Key Features

- **Calculated Fields:**  
  Easily create custom calculations using existing data fields.
  ```tsx
  calculatedFieldSettings: [{
    name: "Total",
    formula: '"Sum(Amount)"+"Sum(Sold)"'
  }]
  ```

- **Field List:**  
  Allows users to dynamically modify the Pivot Table layout.

- **Responsive Layout:**  
  The Pivot Table adjusts to fit the container width and height.

## 🛠 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest version recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Getting Started

Follow these steps to run the application:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SyncfusionExamples/create-a-react-pivot-table
   ```

2. **Navigate to the project folder:**
   ```bash
   cd create-a-react-pivot-table
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the Pivot Table.

## 📂 Project Structure

```
create-a-react-pivot-table/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.tsx         # Main component with Pivot Table configuration
│   ├── data.js         # Sample data used in the Pivot Table
│   └── ...
├── package.json
├── README.md
└── tsconfig.json
```

## 📚 Learn More

- [Syncfusion React Pivot Table Documentation](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started/)
- [Live Demos](https://ej2.syncfusion.com/react/demos/#/bootstrap5/pivot-table/default)

## 💬 Support

For questions or feedback, visit:

- [Syncfusion Support Portal](https://support.syncfusion.com)
- [Syncfusion Community Forums](https://www.syncfusion.com/forums)

## 📜 License

This project uses Syncfusion components, which require a valid license for production use.  
[View Syncfusion License Terms](https://www.syncfusion.com/license/studio/22.2.5/syncfusion_essential_studio_eula.pdf)
