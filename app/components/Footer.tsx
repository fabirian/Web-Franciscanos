import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/*Logo y derechos*/}
                <div className={styles.logoSection}>
                    <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
                    <p>&copy; 1996-2025 Rome - OFM - All rights reserved</p>
                </div>

                {/*Menu en footer*/}
                <div className={styles.menu}>
                    <div>
                        <Link href={"/"}>Inicio</Link>
                        <Link href={"/"}>Sobre Nosotros</Link>
                        <Link href={"/"}>Vocaciones</Link>
                    </div>
                    <div>
                        <Link href={"/"}>Noticias</Link>
                        <Link href={"/"}>Contacto</Link>
                    </div>
                </div>

                {/*Redes sociales*/}
                <div className={styles.sociales}>
                    <div className={styles.icons}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                    <Link href={"privacy-policy"} className={styles.privacy}>
                        Privacy & Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}


