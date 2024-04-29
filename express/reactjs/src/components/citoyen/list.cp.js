import React, { useState, useEffect, useMemo, useRef } from 'react'
import CitoyenDataService from '../../services/citoyen.service'
import { useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

const ShowCitoyens = (props) => {
  const [citoyens, setCitoyens] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const citoyensRef = useRef()
  citoyensRef.current = citoyens
  const navigate = useNavigate()

  useEffect(() => {
    retrieveCitoyens()
  }, [])

  const onChangeSearchEmail = (e) => {
    const searchEmail = e.target.value
    setSearchEmail(searchEmail)
  }

  const retrieveCitoyens = () => {
    CitoyenDataService.getAll()
      .then((response) => {
        setCitoyens(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveCitoyens()
  }

  const findByTitre = () => {
    CitoyenDataService.findByTitre(searchEmail)
      .then((response) => {
        setCitoyens(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const ValiderinfoCitoyen = (rowIndex) => {
    const id = citoyensRef.current[rowIndex].id
    navigate('/validerinfoCitoyen/' + id)
  }
  const DateEnt = (rowIndex) => {
    const id = citoyensRef.current[rowIndex].id
    navigate('/dateEnter/' + id)
  }

  const renderSwitch = (etat, idx) => {
    switch (etat) {
      case 1:
        return (
          <button className='m-3 btn btn-sm btn-success btn-rounded'>
            Validé
          </button>
        )

      case 0:
        return (
          <button className='m-3 btn btn-sm btn-warning btn-rounded'>
            En attente
          </button>
        )
      case 4:
        return (
          <button
            onClick={() => DateEnt(idx)}
            className='m-3 btn btn-sm btn-dark btn-rounded'
          >
            Décès
          </button>
        )
      case 3:
        return (
          <button className='m-3 btn btn-sm btn-secondary btn-rounded'>
            Décès En attente
          </button>
        )
      default:
        return (
          <button
            onClick={() => ValiderinfoCitoyen(idx)}
            className='m-3 btn btn-sm btn-danger btn-rounded'
          >
            A corriger
          </button>
        )
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'nom',
        accessor: 'nom',
      },
      {
        Header: 'prenom',
        accessor: 'prenom',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return <div>{renderSwitch(props.row.original.etat, rowIdx)}</div>
        },
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: citoyens,
    })

  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchEmail}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchEmail}
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
export default ShowCitoyens
