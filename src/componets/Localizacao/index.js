import styles from './styles.module.css'
import Iframe from 'react-iframe'
import ButtonWhats from '../ButtonWhats';


let urlMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.4947696912773!2d-49.162108249898594!3d-28.270778967881053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952111dca2241af5%3A0x9a0d3501b5ee9e12!2sMassozen!5e0!3m2!1spt-BR!2sbr!4v1710249286259!5m2!1spt-BR!2sbr";

export default function Localizacao() {
    return (
        <section className={styles.section}>
            <div className={styles.mapsFrame}>
                <Iframe
                    url={urlMaps}
                    width="300px"
                    height="200px"
                    className={styles.maps}
                    display="block"
                />
            </div>
            <div className={styles.texto}>
                <h1 className={styles.titulo}>
                    Estamos localizados
                </h1>
                <h2 className={styles.subtitulo}>
                    Proximo a chapeação Santa Augusta
                </h2>
                <h3 className={styles.endereco}>
                Av. Getúlio Vargas, 1064 - Santa Augusta<br/> Braço do Norte - SC
                </h3>
                <ButtonWhats />
            </div>

        </section>
    )
}