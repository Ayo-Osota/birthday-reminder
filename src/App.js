import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [users, setUsers] = useState(data);

  const removeItem = (id) => {
    setUsers(
      users.filter((user) => user.id !== id)
    )
  }

  return (<main>
    <div className='container'>
    <h3>{users.length} birthdays today</h3>
      {users.map((user) => {
        return (
          <List key={user.id} {...user} removeItem={removeItem} />
        )
      })}
      <button className="clear-btn" onClick={() => setUsers([])}>Clear all</button>
    </div>
  </main>);
}

export default App;
