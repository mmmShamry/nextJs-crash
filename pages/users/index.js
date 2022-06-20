import Link from 'next/link';
import styles from '../../styles/Users.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return{
        props : {
            users : data
        },
        revalidate : 10
    }
}

const Users = ({users}) => {
    return (  
        <div>
            <h1>All Users</h1>
            {users?.length === 0 ? (
                <h2>Loading..</h2>
            ) : (
                users?.map(user => (
                    <Link href={'/users/' + user.id} key = {user.id}>
                        <a className={styles.single}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                ))
            )}
        </div>
    );
}
 
export default Users;