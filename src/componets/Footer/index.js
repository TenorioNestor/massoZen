import * as React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Maps from '@mui/icons-material/AddLocationAlt';
import Link from 'next/link';
import localImage from "../../image/lotuslogo.png";

const whatApp = "https://encurtador.com.br/knp17"
const intagram = "https://www.instagram.com/massozenterapeutica/"
const Facebook = "https://www.facebook.com/Massozenterapeutica/"
const localization = "https://maps.app.goo.gl/yAkQfhhoRKtr38jf6"



export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.redes}>
                    <Link href={intagram} target="_blank">
                        <InstagramIcon sx={{ fontSize: 50 }} className={styles.icons} />
                    </Link>
                    <Link href={Facebook} target="_blank">
                        <FacebookIcon sx={{ fontSize: 50 }} className={styles.icons} />

                    </Link>
                    <Link href={whatApp} target="_blank">
                        <WhatsAppIcon sx={{ fontSize: 50 }} className={styles.icons} />

                    </Link>
                    <Link href={localization} target="_blank">
                        <Maps sx={{ fontSize: 50 }} className={styles.icons} />

                    </Link>

                </div>
                <div className={styles.logo}>
                    <Image
                        src={localImage}
                        width={300}
                        height={200}
                        alt="Picture of the Lotus Massozen"
                        className={styles.foto}
                    />
                </div>
                <div className={styles.contatos}>
                    <p className={styles.telefone}>Telefone: (48) 99611-4362</p>
                    <p className={styles.adress}>Av. Felipe Schmidt, 1801 - Centro, Braço do Norte - SC</p>
                </div>
            </footer>
        </>
    )
}