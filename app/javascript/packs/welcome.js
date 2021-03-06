import React from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Project', field: 'project' },
      { title: 'Task', field: 'task' },
      { title: 'DeadLine', field: 'deadline', type: 'date' },
      {
        title: 'Result',
        field: 'result',
        lookup: { 34: 'performed', 63: 'not performed', 65: 'in process' },
      },
    ],
    data: [
      { project: 'Mehmet', task: 'Baran', deadline: 1987, result: 65 },
      {
        project: 'Zerya Betül',
        task: 'Baran',
        deadline: 2017,
        result: 34,
      },
    ],
  })

  return (
    <MaterialTable
      title="Task Manager"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data]
                  data[data.indexOf(oldData)] = newData
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          }),
      }}
    />
  )
}


  ReactDOM.render(
    <Table />,
    document.getElementById('welcome'),
  )

