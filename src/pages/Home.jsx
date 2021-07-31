import React, { useRef } from 'react';
import Header from './components/Header';
import { Table } from 'react-bootstrap';

import Search from './components/Search';
import { useCallback } from 'react';
import { useMemo } from 'react';

const baseUrl = 'https://randomuser.me/api/?page=1&results=15&seed=abc';

const Home = () => {
  const [users, setUsers] = React.useState([]);

  const [search, setSearch] = React.useState('');
  const searchInput = useRef(null);
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  const filteredUsers = useMemo(() => 
    users.filter((user) => {
      return user.name.first.toLowerCase().includes(search.toLowerCase());
    }),
    [users, search]
    )

  React.useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => setUsers(data.results))
  }, []);

  if (!users) return null;

  console.log(users);

  console.log(users[1]);

  const listUsers = filteredUsers.map((user) => 
  <tr>
    <td>#</td>
    <td>{user.name.first}{user.name.last}</td>
    <td>{user.name.first}</td>
    <td>{user.name.last}</td>
    <td>{user.email}</td>
    <td>{user.location.city}</td>
  </tr>
  );

  return (
    <div>
      <Header />
      <Search search={search} handleSearch={handleSearch} searchInput={searchInput} />
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {listUsers}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
