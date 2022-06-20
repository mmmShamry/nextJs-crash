//import React, {useEffect} from 'react'
import Link from 'next/link'
//import { useRouter } from 'next/router'


const NotFound = () => {

    // const router  = useRouter();
    // useEffect(() => {
    //     setTimeout(() =>{
    //         //router.go(-1);
    //             router .push('/');
    //     }, 3000)
    // }, []);

    return (
      <div className="notFound">
        <h1>Oopppsii...</h1>
        <p>Redirecting in 3s</p>
        <Link href={"/"}>
          <h2>Go back to Home </h2>
        </Link>
      </div>
    );
}

export default NotFound