import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer" className="footer p-3 bg-slate-300 text-base-content">
            <nav>
                <header className="footer-title">Contactos</header>
                <Link to="/contacto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contacta con nosotros</Link>
            </nav>
            <nav>
                <header className="footer-title">Info</header>
                <Link to="/info" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Cómo funciona</Link>
            </nav>
        </footer>
    )
}