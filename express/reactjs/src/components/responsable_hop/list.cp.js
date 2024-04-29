import React, { useState, useEffect, useMemo, useRef } from 'react'
import Responsable_hopDataService from '../../services/responsable_hop.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowResponsable_hops = (props) => {
  const [responsable_hops, setResponsable_hops] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const responsable_hopsRef = useRef()
  responsable_hopsRef.current = responsable_hops
  const navigate = useNavigate()

  useEffect(() => {
    retrieveResponsable_hops()
  }, [])

  const onChangeSearchEmail = (e) => {
    const searchEmail = e.target.value
    setSearchEmail(searchEmail)
  }

  const retrieveResponsable_hops = () => {
    Responsable_hopDataService.getAll()
      .then((response) => {
        setResponsable_hops(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveResponsable_hops()
  }

  const removeAllResponsable_hops = () => {
    Responsable_hopDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByEmail = () => {
    Responsable_hopDataService.findByEmail(searchEmail)
      .then((response) => {
        setResponsable_hops(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteResponsable_hop = (rowIndex) => {
    const id = responsable_hopsRef.current[rowIndex].id
    Responsable_hopDataService.delete(id)
      .then((response) => {
        navigate('/responsable_hops')
        let newResponsable_hops = [...responsable_hopsRef.current]
        newResponsable_hops.splice(rowIndex, 1)
        setResponsable_hops(newResponsable_hops)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openResponsable_hop = (rowIndex) => {
    const id = responsable_hopsRef.current[rowIndex].id
    navigate('/editResponsable_hop/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Diplome',
        accessor: 'diplome',
      },
      {
        Header: 'Specialite',
        accessor: 'specialite',
      },
      {
        Header: 'Salaire',
        accessor: 'salaire',
      },
      {
        Header: 'Mission',
        accessor: 'mission',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openResponsable_hop(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteResponsable_hop(rowIdx)}
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
      data: responsable_hops,
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
          onClick={removeAllResponsable_hops}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addResponsable_hop'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowResponsable_hops
