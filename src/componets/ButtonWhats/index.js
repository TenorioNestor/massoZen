import { Button } from 'flowbite-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './styles.module.css'
import Link from 'next/link';

const texto = "Vamos Conversar"
const urlWhats = "https://encurtador.com.br/knp17"

export default function ButtonWhats() {
    return (
        <div className={styles.button}>
            <div className="flex flex-wrap gap-2">
                <Button gradientDuoTone="greenToBlue">
                    <Link href={urlWhats} target="_blank" className={styles.link}>
                        <WhatsAppIcon sx={{ fontSize: 20 }} className={styles.icons} />
                        <span className={styles.text}>
                            {texto}
                        </span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

