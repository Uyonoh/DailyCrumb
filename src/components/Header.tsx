
function Header() {
    return (
        <header className="flex justify-between w-full px-5 py-4">
            <div className="logo">The Daily Crumb</div>
            <nav>
                <ul className="flex gap-1">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;