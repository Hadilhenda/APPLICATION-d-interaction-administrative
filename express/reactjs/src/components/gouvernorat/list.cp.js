import React, { useState, useEffect, useMemo, useRef } from 'react'
import GouvernoratDataService from '../../services/gouvernorat.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowGouvernorats = (props) => {
  const [gouvernorats, setGouvernorats] = useState([])
  const [searchmunicipalite, setSearchmunicipalite] = useState('')
  const gouvernoratsRef = useRef()
  gouvernoratsRef.current = gouvernorats
  const navigate = useNavigate()

  useEffect(() => {
    retrieveGouvernorats()
  }, [])

  const onChangeSearchmunicipalite = (e) => {
    const searchmunicipalite = e.target.value
    setSearchmunicipalite(searchmunicipalite)
  }

  const retrieveGouvernorats = () => {
    GouvernoratDataService.getAll()
      .then((response) => {
        setGouvernorats(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveGouvernorats()
  }

  const removeAllGouvernorats = () => {
    GouvernoratDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findBymunicipalite = () => {
    GouvernoratDataService.findBymunicipalite(searchmunicipalite)
      .then((response) => {
        setGouvernorats(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteGouvernorat = (rowIndex) => {
    const id = gouvernoratsRef.current[rowIndex].id
    GouvernoratDataService.delete(id)
      .then((response) => {
        navigate('/gouvernorats')
        let newGouvernorats = [...gouvernoratsRef.current]
        newGouvernorats.splice(rowIndex, 1)
        setGouvernorats(newGouvernorats)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openGouvernorat = (rowIndex) => {
    const id = gouvernoratsRef.current[rowIndex].id
    navigate('/editGouvernorat/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'image',
        accessor: 'image',
      },
      {
        Header: 'gouvern',
        accessor: 'gouvern',
      },
      {
        Header: 'code',
        accessor: 'code',
      },
      {
        Header: 'creation',
        accessor: 'creation',
      },
      {
        Header: 'population',
        accessor: 'population',
      },
      {
        Header: 'superficie',
        accessor: 'superficie',
      },
      {
        Header: 'delegation',
        accessor: 'delegation',
      },
      {
        Header: 'municipalite',
        accessor: 'municipalite',
      },
      {
        Header: 'imadas',
        accessor: 'imadas',
      },
      {
        Header: 'note',
        accessor: 'note',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openGouvernorat(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteGouvernorat(rowIdx)}
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
      data: gouvernorats,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchmunicipalite}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchmunicipalite}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findBymunicipalite}
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
          onClick={removeAllGouvernorats}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addGouvernorat'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowGouvernorats
