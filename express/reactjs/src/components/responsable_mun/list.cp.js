import React, { useState, useEffect, useMemo, useRef } from 'react'
import Responsable_munDataService from '../../services/responsable_mun.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowResponsable_muns = (props) => {
  const [responsable_muns, setResponsable_muns] = useState([])
  const [searchtel, setSearchtel] = useState('')
  const responsable_munsRef = useRef()
  responsable_munsRef.current = responsable_muns
  const navigate = useNavigate()

  useEffect(() => {
    retrieveResponsable_muns()
  }, [])

  const onChangeSearchtel = (e) => {
    const searchtel = e.target.value
    setSearchtel(searchtel)
  }

  const retrieveResponsable_muns = () => {
    Responsable_munDataService.getAll()
      .then((response) => {
        setResponsable_muns(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveResponsable_muns()
  }

  const removeAllResponsable_muns = () => {
    Responsable_munDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findBytel = () => {
    Responsable_munDataService.findByEmail(searchtel)
      .then((response) => {
        setResponsable_muns(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteResponsable_mun = (rowIndex) => {
    const id = responsable_munsRef.current[rowIndex].id
    Responsable_munDataService.delete(id)
      .then((response) => {
        navigate('/responsable_muns')
        let newResponsable_muns = [...responsable_munsRef.current]
        newResponsable_muns.splice(rowIndex, 1)
        setResponsable_muns(newResponsable_muns)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openResponsable_mun = (rowIndex) => {
    const id = responsable_munsRef.current[rowIndex].id
    navigate('/editResponsable_mun/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'tel',
        accessor: 'tel',
      },
      {
        Header: 'fax',
        accessor: 'fax',
      },
      {
        Header: 'horaire_ouverture',
        accessor: 'horaire_ouverture',
      },
      {
        Header: 'seance_nationale',
        accessor: 'seance_nationale',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openResponsable_mun(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteResponsable_mun(rowIdx)}
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
      data: responsable_muns,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchtel}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchtel}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findBytel}
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
          onClick={removeAllResponsable_muns}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addResponsable_mun'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowResponsable_muns
