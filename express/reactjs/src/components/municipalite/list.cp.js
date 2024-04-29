import React, { useState, useEffect, useMemo, useRef } from 'react'
import MunicipaliteDataService from '../../services/municipalite.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowMunicipalites = (props) => {
  const [municipalites, setMunicipalites] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const municipalitesRef = useRef()
  municipalitesRef.current = municipalites
  const navigate = useNavigate()

  useEffect(() => {
    retrieveMunicipalites()
  }, [])

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }

  const retrieveMunicipalites = () => {
    MunicipaliteDataService.getAll()
      .then((response) => {
        setMunicipalites(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveMunicipalites()
  }

  const removeAllMunicipalites = () => {
    MunicipaliteDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitre = () => {
    MunicipaliteDataService.findByTitre(searchTitre)
      .then((response) => {
        setMunicipalites(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteMunicipalite = (rowIndex) => {
    const id = municipalitesRef.current[rowIndex].id
    MunicipaliteDataService.delete(id)
      .then((response) => {
        navigate('/municipalites')
        let newMunicipalites = [...municipalitesRef.current]
        newMunicipalites.splice(rowIndex, 1)
        setMunicipalites(newMunicipalites)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openMunicipalite = (rowIndex) => {
    const id = municipalitesRef.current[rowIndex].id
    navigate('/editMunicipalite/' + id)
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
                onClick={() => openMunicipalite(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteMunicipalite(rowIdx)}
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
      data: municipalites,
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
          onClick={removeAllMunicipalites}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addMunicipalite'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowMunicipalites
