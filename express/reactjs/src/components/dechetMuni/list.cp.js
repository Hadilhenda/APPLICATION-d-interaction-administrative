import React, { useState, useEffect, useMemo, useRef } from 'react'
import DechetDataService from '../../services/dechet.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useSelector } from 'react-redux'
const ShowDechets = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)
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
    DechetDataService.findResp(currentUser.id)
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

  const removeAllDechets = () => {
    DechetDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitre = () => {
    DechetDataService.findByTitre(searchTitre)
      .then((response) => {
        setDechets(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteDechet = (rowIndex) => {
    const id = dechetsRef.current[rowIndex].id
    if (window.confirm('Are you sure you wish to delete this item?')) {
      DechetDataService.delete(id)
        .then((response) => {
          navigate('/dechets')
          let newDechets = [...dechetsRef.current]
          newDechets.splice(rowIndex, 1)
          setDechets(newDechets)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  const openDechet = (rowIndex) => {
    const id = dechetsRef.current[rowIndex].id
    navigate('/editDechet/' + id)
  }
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
        Header: 'quantite',
        accessor: 'quantite',
      },
      {
        Header: 'date_urgence',
        accessor: 'date_urgence',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openDechet(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteDechet(rowIdx)}
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
      {/* <div className='col-md-6'> */}
      <div className='col-md-6'>
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllDechets}
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
export default ShowDechets
