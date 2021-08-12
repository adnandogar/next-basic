import Styles from '../styles/NotFound.module.css'
import {useEffect} from 'react'
import {useRouter} from 'next/router'


const NotFound = () => {

    const router = useRouter()

    useEffect(() => {

        setTimeout(() => {
            router.push('/')
        },3000)

    },[])


    return ( 
        <div className="container">
            <p className={Styles.title}>Not Found...!</p>
        </div>
     );
}
 
export default NotFound;