import styles from './styles.module.css'
import Image from 'next/image'
import { Button } from 'flowbite-react';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Link from 'next/link';

const linkApp = " https://massozen.glide.page"

export default function CardApp() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.text}>
                    <h1 className={styles.titulo}>
                        Conheça nosso Aplicativo
                    </h1>
                    <h2 className={styles.subtitulo}>
                        Em nosso APP você tem acesso:
                    </h2>
                    <ul className={styles.lista}>
                        <li><CheckRoundedIcon /> Lista de serviços</li>
                        <li><CheckRoundedIcon /> Avaliação de clientes</li>
                        <li><CheckRoundedIcon /> Ultimas novidades</li>
                        <li><CheckRoundedIcon /> Agendamentos</li>
                        <li><CheckRoundedIcon /> requisitos para consulta</li>
                        <li>E muito mais...</li>
                    </ul>
                    <div className="fflex flex-wrap gap-2">
                        <Button gradientDuoTone="purpleToBlue">
                            <Link href={linkApp} target="_blanck">
                                <span className={styles.span}>Clique aqui e venha conhecer!</span>
                                <TouchAppIcon sx={{ fontSize: 20 }} />
                            </Link>

                        </Button>
                    </div>
                </div>
                <div className={styles.cardImage}>
                    {/* Imagem aqui */}
                </div>
            </div>

        </section>
    )
}