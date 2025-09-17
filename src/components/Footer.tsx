function Footer() {
    return (
        <footer className="w-full py-10 flex justify-center">
            <div className="footer max-w-[960px] flex flex-1 flex-col gap-6 text-center @container text-[#9a734c]">
                <div className="legal flex flex-1 gap-6 items-center justify-center @[480px]:justify-around">
                    <a href="">Privacy Policy</a>
                    {/* <span></span> */}
                    <a href="">Terms of Service</a>
                </div>
                <span>@2025 The Daily Crumb. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;