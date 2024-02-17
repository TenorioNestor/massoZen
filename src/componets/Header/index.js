import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import BotaoContato from '../BotaoContato'

export default function Header(){
    return(
        <header className={styles.header}>
            {/* <Image
            width={250}
            height={180}
            src="/logoSemFundo.png"
            alt="Picture of the author"
            className={styles.logo}
            /> */}
            <div className={styles.logoPequeno}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="65" height="46" viewBox="0 0 65 46" fill="none">
                <path d="M32.5 0L64.976 45.75H0.0240479L32.5 0Z" fill="white"/>
                </svg>
                <div className={styles.line}></div> */}
                <BotaoContato/>
            </div>


            <nav className={styles.nav}>
                <Link href='/' className={styles.link}>
                    Home
                </Link>
                <Link href='/sobre' className={styles.link}>
                    Sobre nós
                </Link>
                <Link href='/contatos' className={styles.link}>
                    Contatos
                </Link>
            </nav>
        </header>
    )
}