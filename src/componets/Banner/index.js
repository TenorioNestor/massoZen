import { ClassNames } from "@emotion/react";
import styles from './styles.module.css'
import Image from 'next/image'
import Logo from '../../image/cartao_frente.png'



export default function Banner() {
    return (
        <>
            <div className={styles.banner}>
            <Image
                    src={Logo}
                    alt="Picture of the Lotus Massozen"
                    className={styles.foto}
                    /> 
            </div>
        </>
    )
}