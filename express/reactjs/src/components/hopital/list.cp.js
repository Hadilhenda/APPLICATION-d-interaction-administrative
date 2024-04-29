import React, { useState, useEffect, useMemo, useRef } from 'react'
import HopitalDataService from '../../services/hopital.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowHopitals = (props) => {
  const [hopitals, setHopitals] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const hopitalsRef = useRef()
  hopitalsRef.current = hopitals
  const navigate = useNavigate()

  useEffect(() => {
    retrieveHopitals()
  }, [])

  const onChangeSearchEmail = (e) => {
    const searchEmail = e.target.value
    setSearchEmail(searchEmail)
  }

  const retrieveHopitals = () => {
    HopitalDataService.getAll()
      .then((response) => {
        setHopitals(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveHopitals()
  }

  const removeAllHopitals = () => {
    HopitalDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByEmail = () => {
    HopitalDataService.findByEmail(searchEmail)
      .then((response) => {
        setHopitals(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteHopital = (rowIndex) => {
    const id = hopitalsRef.current[rowIndex].id
    HopitalDataService.delete(id)
      .then((response) => {
        navigate('/hopitals')
        let newHopitals = [...hopitalsRef.current]
        newHopitals.splice(rowIndex, 1)
        setHopitals(newHopitals)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openHopital = (rowIndex) => {
    const id = hopitalsRef.current[rowIndex].id
    navigate('/editHopital/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Tel',
        accessor: 'tel',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openHopital(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteHopital(rowIdx)}
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
      data: hopitals,
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
              onClick={findByEmail}
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
          onClick={removeAllHopitals}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addHopital'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowHopitals
