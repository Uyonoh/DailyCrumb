function Hero() {
    return (
        <section className="hero-home flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                >The Daily Crumb</h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">Freshly baked goods delivered to your door.</h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee8d2b] text-[#1b140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
                <span className="truncate">Order Now</span>
            </button>
        </section>
    )
}

export default Hero;