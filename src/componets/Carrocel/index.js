import Image from 'next/image'
import styles from './styles.module.css'

export default function Carrocel(){
    return (
        <section className={styles.section}>
            <Image
            width={570}
            height={370}
            src="/logoSemFundo.png"
            alt="Picture of the author"
            className={styles.foto}
            /> 
        </section>
    )
}