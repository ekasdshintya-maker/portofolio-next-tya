export default function Footer() {
    const tahun = new Date().getFullYear();

    return (
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
                <p>&copy; 2026 Shintya Eka Ramadhani.
                dibuat dengan Next.js di Kelas Industri UBIG.</p>          
        </footer>
    );
}