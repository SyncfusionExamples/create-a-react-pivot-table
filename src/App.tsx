import React from 'react';
import { PivotViewComponent, FieldList, CalculatedField, Inject } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
 return (
    <div id="wrapper">
      <PivotViewComponent 
        height={'300'}
        width={'100%'}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{name:"Country"}, {name: "Products"}],
          columns:[{name: "Year"}],
          values: [{name: "Sold", caption: "Units Sold"}, {name: "Amount", caption: "Sold Amount"}, {name: "Total", caption: "Total Units", type: "CalculatedField"}],
          filters: [{name: "Quarter"}],
          calculatedFieldSettings: [{
            name: "Total",
            formula: '"Sum(Amount)"+"Sum(Sold)"' 
          }]
        }}
        showFieldList={true}
        allowCalculatedField={true}>
          <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;
