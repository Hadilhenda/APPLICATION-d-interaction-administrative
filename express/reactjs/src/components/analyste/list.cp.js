import React, { useState, useEffect, useMemo, useRef } from 'react'
import AnalysteDataService from '../../services/analyste.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowAnalystes = (props) => {
  const [analystes, setAnalystes] = useState([])
  const [searchDiplome, setSearchDiplome] = useState('')
  const analystesRef = useRef()
  analystesRef.current = analystes
  const navigate = useNavigate()

  useEffect(() => {
    retrieveAnalystes()
  }, [])

  const onChangeSearchDiplome = (e) => {
    const searchDiplome = e.target.value
    setSearchDiplome(searchDiplome)
  }

  const retrieveAnalystes = () => {
    AnalysteDataService.getAll()
      .then((response) => {
        setAnalystes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveAnalystes()
  }

  const removeAllAnalystes = () => {
    AnalysteDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByDiplome = () => {
    AnalysteDataService.findByEmail(searchDiplome)
      .then((response) => {
        setAnalystes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteAnalyste = (rowIndex) => {
    const id = analystesRef.current[rowIndex].id
    AnalysteDataService.delete(id)
      .then((response) => {
        navigate('/analystes')
        let newAnalystes = [...analystesRef.current]
        newAnalystes.splice(rowIndex, 1)
        setAnalystes(newAnalystes)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openAnalyste = (rowIndex) => {
    const id = analystesRef.current[rowIndex].id
    navigate('/editAnalyste/' + id)
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
                onClick={() => openAnalyste(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteAnalyste(rowIdx)}
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
      data: analystes,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchDiplome}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchDiplome}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findByDiplome}
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
          onClick={removeAllAnalystes}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addAnalyste'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowAnalystes
