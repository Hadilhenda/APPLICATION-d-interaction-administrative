import React, { useState, useEffect, useMemo, useRef } from 'react'
import ParticipeDataService from '../../services/participe.service'
import ReunionDataService from '../../services/reunion.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useParams } from 'react-router-dom'
const ShowParticipes = (props) => {
  let { id } = useParams()
  const [participes, setParticipes] = useState([])
  const [reunion, setReunion] = useState([])
  const [searchDomaine, setSearchDomaine] = useState('')
  const participesRef = useRef()
  participesRef.current = participes
  const navigate = useNavigate()

  useEffect(() => {
    retrieveParticipes(id)
    retrieveReunion(id)
  }, [id])

  const onChangeSearchDomaine = (e) => {
    const searchDomaine = e.target.value
    setSearchDomaine(searchDomaine)
  }

  const retrieveParticipes = (id) => {
    ParticipeDataService.getAll(id)
      .then((response) => {
        setParticipes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const retrieveReunion = (id) => {
    ReunionDataService.get(id)
      .then((response) => {
        setReunion(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = (id) => {
    retrieveParticipes(id)
  }

  const removeAllParticipes = () => {
    ParticipeDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList(id)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByDomaine = () => {
    ParticipeDataService.findByDomaine(searchDomaine)
      .then((response) => {
        setParticipes(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteParticipe = (rowIndex) => {
    const id = participesRef.current[rowIndex].id
    ParticipeDataService.delete(id)
      .then((response) => {
        navigate('/participes')
        let newParticipes = [...participesRef.current]
        newParticipes.splice(rowIndex, 1)
        setParticipes(newParticipes)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openParticipe = (rowIndex) => {
    const id = participesRef.current[rowIndex].id
    navigate('/editParticipe/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Prenom',
        accessor: 'prenom',
      },
      {
        Header: 'date participation',
        accessor: 'createdAt',
      },
      // {
      //   Header: 'Actions',
      //   accessor: 'actions',
      //   Cell: (props) => {
      //     const rowIdx = props.row.id
      //     return (
      //       <div>
      //         <button
      //           onClick={() => openParticipe(rowIdx)}
      //           className='m-3 btn btn-sm btn-danger'
      //         >
      //           EDIT
      //         </button>

      //         <button
      //           onClick={() => deleteParticipe(rowIdx)}
      //           className='m-3 btn btn-sm btn-warning'
      //         >
      //           DELETE
      //         </button>
      //       </div>
      //     )
      //   },
      // },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: participes,
      // data: reunion,
    })
  return (
    <div className='page-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='list row'>
            <div className='col-md-8'>
              <h3>{reunion.object}</h3>
            </div>
            <div className='col-md-8'>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search by domaine'
                  value={searchDomaine}
                  // onChange={this.onChangeSearchTitre}
                  onChange={onChangeSearchDomaine}
                />
                <div className='input-group-append'>
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    // onClick={this.searchTitre}
                    onClick={findByDomaine}
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
                onClick={removeAllParticipes}
              >
                Remove All
              </button>
            </div>{' '}
            <div className='col-md-6'>
              <Link to={'/addParticipe'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowParticipes
