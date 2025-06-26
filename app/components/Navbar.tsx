import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* Logo a la izquierda */}
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                </Link>
            </div>
            {/* Contenedor Menú + Lupa */}
            <div className={styles.menuWrapper}>
                <div className={styles.navlinks}>
                    <Link href="/">Inicio</Link>
                    <Link href="/sobre-nosotros">Sobre Nosotros</Link>
                    <Link href="/vocaciones">Vocaciones</Link>
                    <Link href="/noticias">Noticias</Link>
                    <Link href="/contacto">Contacto</Link>
                </div>
                <button className={styles.rightSection}>
                    <FaSearch />
                </button>
            </div>
        </nav>
    );
}
