import { Button } from 'flowbite-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './styles.module.css'

export default function ButtonWhats() {
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <Button gradientDuoTone="greenToBlue">
                    <WhatsAppIcon sx={{ fontSize: 20 }} className={styles.icons} />
                    Vamos conversar!
                </Button>
            </div>
        </div>
    )
}