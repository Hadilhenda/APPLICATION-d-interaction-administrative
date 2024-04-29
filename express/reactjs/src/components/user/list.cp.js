import React, { useState, useEffect, useMemo, useRef } from 'react'
import UserDataService from '../../services/user.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowUsers = (props) => {
  const [users, setUsers] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const usersRef = useRef()
  usersRef.current = users
  const navigate = useNavigate()

  useEffect(() => {
    retrieveUsers()
  }, [])

  const onChangeSearchEmail = (e) => {
    const searchEmail = e.target.value
    setSearchEmail(searchEmail)
  }

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then((response) => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveUsers()
  }

  const removeAllUsers = () => {
    UserDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByEmail = () => {
    UserDataService.findByEmail(searchEmail)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteUser = (rowIndex) => {
    const id = usersRef.current[rowIndex].id
    UserDataService.delete(id)
      .then((response) => {
        navigate('/users')
        let newUsers = [...usersRef.current]
        newUsers.splice(rowIndex, 1)
        setUsers(newUsers)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openUser = (rowIndex) => {
    const id = usersRef.current[rowIndex].id
    navigate('/editUser/' + id)
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
                onClick={() => openUser(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteUser(rowIdx)}
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
      data: users,
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
        <button className='m-3 btn btn-sm btn-danger' onClick={removeAllUsers}>
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addUser'} className='m-3 btn btn-sm btn-primary'>
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
export default ShowUsers
