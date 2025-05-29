

export default function Header() {
        return (
                <header className="sticky top-0 flex items-center justify-between p-7 bg-sky-100">
                        <a href="/" className="navbar-brand font-extrabold text-2xl">Ahmad QR</a>
                        <nav className="flex items-center gap-4">
                                <li className="nav-item">
                                        <a href="" className="hover:!underline"><i class="fa-solid fa-phone-volume"></i> Hubungi Admin</a>
                                </li>
                                <li className="nav-item">
                                        <a href="" className="hover:!underline"><i class="fa-solid fa-circle-question"></i> Tentang Admin</a>
                                </li>
                        </nav>

                        <button type="button" className="md:hidden px-3 py-2 rounded-md bg-transparent">
                                <i class="fa-solid fa-bars text-xl font-extrabold"></i>
                        </button>
                </header>
        )
}