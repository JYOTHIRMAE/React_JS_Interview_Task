import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community';
import "ag-grid-enterprise";
//import Filter from '../Filter'

//import { forInStatement } from '@babel/types';
//import { fbind } from 'q';

var json = require('./file.json');

export default class File extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [

          {
            headerName: "TherapyArea",
            field: "TherapyArea",
            width: 90,
            filter: "name",
            sortable: true,
            pinned: 'left',
            pivot: 'true'

          }, {
            headerName: "DeviceSeries",
            field: "DeviceSeries",
            width: 100,
            filter: "agTextColumnFilter",
            sortable: true,
            pinned: 'left',
            pivot: true
          }, {
            headerName: "Segment",
            field: "Segment",
            width: 100,
            filter: "agTextColumnFilter",
            sortable: true,
            pinned: 'left',
            pivot: true

          }, {
            headerName: "Brand",
            width: 90,
            field: "Brand",
            filter: "agTextColumnFilter",
            sortable: true,
            pinned: 'left'
          }, {
            headerName: "Catheter",
            width: 100,
            field: "Catheter",
            filter: "date",
            sortable: true,
            pinned: 'left'

          }, {
            headerName: "Diameter",
            width: 100,
            field: "Diameter",
            filter: "agTextColumnFilter",
            sortable: true,
            pinned: 'left'
          }, {
            headerName: "Length",
            width: 90,
            field: "Length",
            filter: 'number',
            sortable: true,
            pinned: 'left'

          },
          {
            headerName: 'Year',
            field: "Year",
            children: [
              {
                headerName: "2010",
                children: [
                  {
                    headerName: "Revenue",
                    field: "Year.2010.Revenue",
                  },
                  {
                    headerName: "Units",
                    field: "Year.2010.Units",
                  },
                  {
                    headerName: "Average Selling Price per Unit",
                    field: "Year.2010.Average Selling Price per Unit",
                  }
                ]
              },
              {
                headerName: "2011",
                children: [
                  {
                    headerName: "Revenue",
                    field: "Year.2011.Revenue",
                  },
                  {
                    headerName: "Units",
                    field: "Year.2011.Units",
                  },
                  {
                    headerName: "Average Selling Price per Unit",
                    field: "Year.2011.Average Selling Price per Unit",
                  }
                ]
              },
              {
                headerName: "2012",
                children: [
                  {
                    headerName: "Revenue",
                    field: "Year.2012.Revenue",
                  },
                  {
                    headerName: "Units",
                    field: "Year.2012.Units",
                  },
                  {
                    headerName: "Average Selling Price per Unit",
                    field: "Year.2012.Average Selling Price per Unit",
                  }
                ]
              },
              {
                headerName: "2013",
                children: [
                  {
                    headerName: "Revenue",
                    field: "Year.2013.Revenue",
                  },
                  {
                    headerName: "Units",
                    field: "Year.2013.Units",
                  },
                  {
                    headerName: "Average Selling Price per Unit",
                    field: "Year.2013.Average Selling Price per Unit",
                  }
                ]
              },
              {
                headerName: "2014",
                children: [
                  {
                    headerName: "Revenue",
                    field: "Year.2014.Revenue",
                  },
                  {
                    headerName: "Units",
                    field: "Year.2014.Units",
                  },
                  {
                    headerName: "Average Selling Price per Unit",
                    field: "Year.2014.Average Selling Price per Unit",
                  }
                ]
              }]
          }]
      
    }
  }

render() {
  return (

    <div
      className="ag-theme-balham"
      style={{
        height: '1000px',
        width: '3700px',
        color: 'green'

      }} >
        {/* <Filter /> */}
      <AgGridReact
        columnDefs={this.state.columnDefs}
        defaultColDef={this.state.defaultColDef}
        groupDefaultExpanded={this.state.groupDefaultExpanded}
        onGridReady={this.onGridReady}
        debug={true}

        rowData={json.data}
      />
      
    </div>

  );
}
}