import React, { useState, useEffect, useMemo, useRef } from 'react'
import ReunionDataService from '../../services/reunion.service'
import ParticipeDataService from '../../services/participe.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useSelector } from 'react-redux'
const ShowReunionsPar = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)
  const [reunions, setReunions] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const reunionsRef = useRef()
  reunionsRef.current = reunions
  const navigate = useNavigate()

  useEffect(() => {
    retrieveReunions()
  }, [])

  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }

  const retrieveReunions = () => {
    ParticipeDataService.getAllbyUser(currentUser.id)
      .then((response) => {
        setReunions(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveReunions()
  }

  const removeAllReunions = () => {
    ReunionDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByTitre = () => {
    ReunionDataService.findByTitre(searchTitre)
      .then((response) => {
        setReunions(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteReunion = (rowIndex) => {
    const id = reunionsRef.current[rowIndex].id
    if (window.confirm('Are you sure you wish to delete this item?')) {
      ParticipeDataService.delete(id)
        .then((response) => {
          navigate('/listParticipehop')
          let newReunions = [...reunionsRef.current]
          newReunions.splice(rowIndex, 1)
          setReunions(newReunions)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'object',
        accessor: 'object',
      },
      {
        Header: 'date',
        accessor: 'date',
      },
      {
        Header: 'heure',
        accessor: 'heure',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => deleteReunion(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                Annuler
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
      data: reunions,
    })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
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
            {/* <div className='col-md-6'>
              <button
                className='m-3 btn btn-sm btn-danger'
                onClick={removeAllReunions}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link to={'/addReunion'} className='m-3 btn btn-sm btn-primary'>
                New
              </Link>
            </div> */}
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
                            <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShowReunionsPar
