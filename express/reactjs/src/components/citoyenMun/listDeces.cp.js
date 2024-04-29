import React, { useState, useEffect, useMemo, useRef } from 'react'
import CitoyenDataService from '../../services/citoyen.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useSelector } from 'react-redux'

const ShowCitoyensDeces = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)
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
    CitoyenDataService.getDecDeces(currentUser.id)
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

  // const removeAllCitoyens = () => {
  //   CitoyenDataService.deleteAll()
  //     .then((response) => {
  //       console.log(response.data)
  //       refreshList()
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }

  const findByTitre = () => {
    CitoyenDataService.findByTitre(searchEmail)
      .then((response) => {
        setCitoyens(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const DetailsCitoyenD = (rowIndex) => {
    const id = citoyensRef.current[rowIndex].id
    navigate('/detailsCitoyenD/' + id)
  }

  //  const MaleInfo = (rowIndex) => {
  //   const id = citoyensRef.current[rowIndex].id
  //   navigate('/maleInfo/' + id)
  // }

  const ValideDCitoyen = (rowIndex) => {
    const id = citoyensRef.current[rowIndex].id
    navigate('/valideDCitoyen/' + id)
  }

  // const openCitoyen = (rowIndex) => {
  //   const id = citoyensRef.current[rowIndex].id
  //   navigate('/editCitoyen/' + id)
  // }
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
        Header: 'adresse naissance ',
        accessor: 'adress_naissance',
      },
      {
        Header: 'date naissance ',
        accessor: 'date_naissance',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => ValideDCitoyen(rowIdx)}
                className='m-3 btn btn-sm btn-success btn-rounded'
              >
                Valider deces
              </button>

              {/* <button
                onClick={() => openCitoyen(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button> */}
              <button
                onClick={() => DetailsCitoyenD(rowIdx)}
                className='m-3 btn btn-sm btn-info'
              >
                Details
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
              onClick={findByTitre}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <Link to={'/addCitoyen'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
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
export default ShowCitoyensDeces
