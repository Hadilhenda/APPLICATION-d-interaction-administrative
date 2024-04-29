import React, { useState, useEffect, useMemo, useRef } from 'react'
import DechetDataService from '../../services/dechet.service'
import { useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

const ShowDechetsH = (props) => {
  const [dechets, setDechets] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const dechetsRef = useRef()
  dechetsRef.current = dechets
  const navigate = useNavigate()

  useEffect(() => {
    retrieveDechets()
  }, [])

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }

  const retrieveDechets = () => {
    DechetDataService.getAll()
      .then((response) => {
        setDechets(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveDechets()
  }

  // const removeAllCitoyens = () => {
  //   CitoyenDataService.deleteAll()
  //     .then((response) => {
  //       console.log(response.data)
  //       refreshList()
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }

  const findByTitre = () => {
    DechetDataService.findByTitre(searchTitre)
      .then((response) => {
        setDechets(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const Accepter = (rowIndex) => {
    const id = dechetsRef.current[rowIndex].id
    navigate('/accepteDech/' + id)
  }
  // const ValiderinfoDechet = (rowIndex) => {
  //   const id = dechetsRef.current[rowIndex].id
  //   navigate('/validerinfoDechet/' + id)
  // }
  // const openCitoyen = (rowIndex) => {
  //   const id = citoyensRef.current[rowIndex].id
  //   navigate('/editCitoyen/' + id)
  // }
  const renderSwitch = (etat, idx) => {
    switch (etat) {
      case 1:
        return (
          <button
            onClick={() => Accepter(idx)}
            className='m-3 btn btn-sm btn-success btn-rounded'
          >
            accepte avec succé
          </button>
        )

      default:
        return (
          <button className='m-3 btn btn-sm btn-warning btn-rounded'>
            En attente
          </button>
        )
    }
  }

  // const Example = () => {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const columns = useMemo(
    () => [
      {
        Header: 'titre',
        accessor: 'titre',
      },
      {
        Header: 'description',
        accessor: 'description',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              {renderSwitch(props.row.original.etat, rowIdx)}

              {/* if(citoyens.etat === 1 ){' '}
              {
                <button className='m-3 btn btn-sm btn-success btn-rounded'>
                  Valider
                </button>
              }
              if (citoyens.etat === 0 )
              {
                <button className='m-3 btn btn-sm btn-info'>
                  En cours de traitement
                </button>
              }
              if (citoyens.etat === 2 )
              {
                <button
                  onClick={() => ValiderinfoCitoyen(rowIdx)}
                  className='m-3 btn btn-sm btn-warning'
                >
                  MaleInformation
                </button>
              } */}
            </div>
          )
        },
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: dechets,
    })

  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchTitre}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchTitre}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findByTitre}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='widget-content widget-content-area'>
        <table
          className='table dt-table-hover'
          id='html5-extension'
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ShowDechetsH
