import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../image/lotuslogo.png'
import styles from './styles.module.css'
import { Button } from 'flowbite-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ButtonWhats from '../ButtonWhats';


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
                <ButtonWhats/>

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