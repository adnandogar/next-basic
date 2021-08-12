import Link from 'next/link';
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    return {
        props : { ninjas: data }
    }
}


const Listing = ({ninjas}) => {
    return ( 
        <div className="content">
            <h1>Listing...</h1>

            { ninjas.map(ninja => (
                <Link href={'/ninja/'+ninja.id} key={ninja.id}>
                <a className={styles.single}>
                  <h3>{ ninja.name }</h3>
                </a>
              </Link>
            )) }
        </div>
     );
}
 
export default Listing;