import styles from './styles.module.css'
import Image from 'next/image'
import { Button } from 'flowbite-react';
import TouchAppIcon from '@mui/icons-material/TouchApp';

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
                        <li>Lista de serviços</li>
                        <li>Avaliação de clientes</li>
                        <li>Ultimas novidades</li>
                        <li>Agendamentos</li>
                        <li>requisitos para consulta</li>
                        <li>E muito mais...</li>
                    </ul>
                    <div className="fflex flex-wrap gap-2">
                        <Button gradientDuoTone="purpleToBlue">
                           Clique aqui e venha conhecer!
                            <TouchAppIcon sx={{ fontSize: 20 }} className={styles.icons} />
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