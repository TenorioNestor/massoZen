import * as React from 'react'
import Links from 'next/link'
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


export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.redes}>
                    <InstagramIcon sx={{ fontSize: 50 }} className={styles.icons}/>
                    <FacebookIcon sx={{ fontSize: 50 }} className={styles.icons}/>
                    <WhatsAppIcon sx={{ fontSize: 50 }} className={styles.icons}/>
                    <Maps sx={{ fontSize: 50 }} className={styles.icons}/>
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
                    <p className={styles.telefone}>Telefone: (48) 9 9999-9999</p>
                    <p className={styles.adress}>Rua Jose, Centro - Braço do Norte</p>
                </div>
            </footer>
        </>
    )
}