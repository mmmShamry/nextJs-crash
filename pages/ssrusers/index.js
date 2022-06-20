import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Users.module.css'

export const getServerSideProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props : {
            users : data
        }
    }
} 

const SsrUsers = ({users}) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => (
        <Link href={"/users/" + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default SsrUsers