import React from 'react';
import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react"
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


export default function TodoTable({ todos, gridRef }) {

    const [columnDefs, setColumnDefs] = useState([
        { field: 'description', sortable: false, filter: true },
        { field: 'date', filter: true },
        {
            field: 'priority', filter: true,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' }
        }
    ]);


    const columSettings = {
        flex: 1
    }

    return (
        <>


            <div style={{ width: 800, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    defaultColDef={columSettings}
                />
            </div>
        </>
    )


    // return (
    //     <div>
    //         {/* <table id="list">
    //             <thead>
    //                 <tr>
    //                     <th>Date</th>
    //                     <th>Description</th>
    //                     <th>Priority</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {todos.map((task, index) => (
    //                     <tr key={index}>
    //                         <td>{task.date}</td>
    //                         <td>{task.description}</td>
    //                         <td>{task.priority}</td>
    //                         <td><button onClick={() => deleteTask(index)}>Delete</button></td>
    //                     </tr>))}
    //             </tbody>
    //         // </table> */}
    //     </div>
    // )

}