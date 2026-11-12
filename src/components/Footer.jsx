export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">© {currentYear} | Student: Alexander Krivokorytov | Group: 6.1214-pi2 | ZNU, Zaporizhzhia, Ukraine | znu.edu.ua</p>
        </footer>
    );
}
