import React, { useState, useEffect, useMemo, useRef } from 'react'
import ReclamationDataService from '../../services/reclamation.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowReclamations = (props) => {
  const [reclamations, setReclamations] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const reclamationsRef = useRef()
  reclamationsRef.current = reclamations
  const navigate = useNavigate()

  useEffect(() => {
    retrieveReclamations()
  }, [])

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }

  const retrieveReclamations = () => {
    ReclamationDataService.getAll()
      .then((response) => {
        setReclamations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveReclamations()
  }

  const removeAllReclamations = () => {
    ReclamationDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitre = () => {
    ReclamationDataService.findByTitre(searchTitre)
      .then((response) => {
        setReclamations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteReclamation = (rowIndex) => {
    const id = reclamationsRef.current[rowIndex].id
    if (window.confirm('Are you sure you wish to delete this item?')) {
      ReclamationDataService.delete(id)
        .then((response) => {
          navigate('/reclamations')
          let newReclamations = [...reclamationsRef.current]
          newReclamations.splice(rowIndex, 1)
          setReclamations(newReclamations)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Date reclamation',
        accessor: 'createdAt',
      },
      {
        Header: 'Titre',
        accessor: 'titre',
      },
      {
        Header: 'image',
        accessor: 'image',
        Cell: (props) => {
          const image = '/upload/' + props.row.original.image
          return (
            <div>
              <img src={image} className='' width='200' height='100' />
            </div>
          )
        },
      },
      {
        Header: 'Localisation',
        accessor: 'localisation',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              {/* <button
                onClick={() => openReclamation(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button> */}

              <button
                onClick={() => deleteReclamation(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                DELETE
              </button>
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
      data: reclamations,
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
      {/* <div className='col-md-6'> */}
      <div className='col-md-6'>
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllReclamations}
        >
          Remove All
        </button>
      </div>{' '}
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
export default ShowReclamations
