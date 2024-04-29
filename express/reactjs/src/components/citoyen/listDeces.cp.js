import React, { useState, useEffect, useMemo, useRef } from 'react'
import CitoyenDataService from '../../services/citoyen.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'

const ListDeces = (props) => {
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
    CitoyenDataService.getDeceS()
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

  const removeAllCitoyens = () => {
    CitoyenDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByEmail = () => {
    CitoyenDataService.findByEmail(searchEmail)
      .then((response) => {
        setCitoyens(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openCitoyen = (rowIndex) => {
    const id = citoyensRef.current[rowIndex].id
    navigate('/editCitoyen/' + id)
  }
  // const Example = () => {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
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
          return (
            <div>
              <button
                onClick={() => openCitoyen(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                EDIT
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
          onClick={removeAllCitoyens}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addCitoyen'} className='m-3 btn btn-sm btn-primary'>
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
export default ListDeces
