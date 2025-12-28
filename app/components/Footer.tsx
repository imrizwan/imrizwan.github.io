export default function Footer() {
    return (
    <footer className='section-container py-12 border-t border-[var(--border)] text-center'>
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Muhammad Rizwan / Professional Portfolio
        </p>
    </footer>
    );
}
