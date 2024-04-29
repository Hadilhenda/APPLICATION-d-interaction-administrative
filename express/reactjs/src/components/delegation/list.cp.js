import React, { useState, useEffect, useMemo, useRef } from 'react'
import DelegationDataService from '../../services/delegation.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowDelegations = (props) => {
  const [delegations, setDelegations] = useState([])
  const [searchtitre, setSearchtitre] = useState('')
  const delegationsRef = useRef()
  delegationsRef.current = delegations
  const navigate = useNavigate()

  useEffect(() => {
    retrieveDelegations()
  }, [])

  const onChangeSearchtitre = (e) => {
    const searchtitre = e.target.value
    setSearchtitre(searchtitre)
  }

  const retrieveDelegations = () => {
    DelegationDataService.getAll()
      .then((response) => {
        setDelegations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveDelegations()
  }

  const removeAllDelegations = () => {
    DelegationDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findBytitre = () => {
    DelegationDataService.findByEmail(searchtitre)
      .then((response) => {
        setDelegations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteDelegation = (rowIndex) => {
    const id = delegationsRef.current[rowIndex].id
    DelegationDataService.delete(id)
      .then((response) => {
        navigate('/delegations')
        let newDelegations = [...delegationsRef.current]
        newDelegations.splice(rowIndex, 1)
        setDelegations(newDelegations)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openDelegation = (rowIndex) => {
    const id = delegationsRef.current[rowIndex].id
    navigate('/editDelegation/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'titre',
        accessor: 'titre',
      },
      {
        Header: 'population',
        accessor: 'population',
      },
      {
        Header: 'id_gouv',
        accessor: 'id_gouv',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openDelegation(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteDelegation(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
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
      data: delegations,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchtitre}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchtitre}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findBytitre}
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
          onClick={removeAllDelegations}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addDelegation'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
      <div className='col-md-12 list'>
        {}
        <table
          className='table table-bordered border-warning'
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
export default ShowDelegations
