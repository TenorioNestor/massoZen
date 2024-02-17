import * as React from 'react';
import styles from './styles.module.css'
import Button from '@mui/material/Button';
import Image from 'next/image'
import WarehouseOutlined from '@mui/icons-material/WarehouseOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import ElevatorOutlinedIcon from '@mui/icons-material/ElevatorOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';

export default function Condominios() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.lista}>
            <h2>Condominio II</h2>
            <ul>
              <li className={styles.list}><WarehouseOutlined sx={{ fontSize: 50 }} className={styles.icon} /> 2 Vagas de Garagem</li>
              <li className={styles.list}><CelebrationOutlinedIcon sx={{ fontSize: 50 }} className={styles.icon} /> Salao de Festas</li>
              <li className={styles.list}><ElevatorOutlinedIcon sx={{ fontSize: 50 }} className={styles.icon} /> Elevador</li>
              <li className={styles.list}><BedOutlinedIcon sx={{ fontSize: 50 }} className={styles.icon} /> 2 Quartos</li>
            </ul>
          </div>
          <div className={styles.imagem}>
            <Image
              width={300}
              height={400}
              src="/imagemProjeto.png"
              alt="Imagem de um projeto"
              className={styles.imagemConfig}
              />
          </div>
        </div>
        <div className={styles.buttondiv}>
          <Button variant="outlined" className={styles.button}>
            Verificar unidades disponíveis
          </Button>
        </div> 

      </section>
    </>
  )
}