import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../image/lotuslogo.png'
import styles from './styles.module.css'
import ButtonWhats from '../ButtonWhats';

const linkAbout = "https://massozen.glide.page/dl/about"
const linkApp = "https://massozen.glide.page"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.cabecalho}>
                <Image
                    src={Logo}
                    width={150}
                    height={100}
                    alt="Picture of the Lotus Massozen"
                    className={styles.foto}
                    /> 
                <div className={styles.button}>
                    <ButtonWhats/>
                </div>
                
                

            </div>
            <nav className={styles.nav}>
                <Link href='/' className={styles.link}>
                    Home
                </Link>
                <Link href={linkAbout} target="_blank" className={styles.link}>
                    Sobre nós
                </Link>
                <Link href={linkApp} target="_blank" className={styles.link}>
                    Contatos
                </Link>
            </nav>
        </header>
    )
}