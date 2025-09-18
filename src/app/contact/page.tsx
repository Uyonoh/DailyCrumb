function Contact() {
    return (
        <div className="max-w-[960px] py-5 px-5">
                    <h1 className="text-3xl font-bold pt-5">Contact Us</h1>
                    <section className="py-5">
                        {/* <p className="font-bold py-3 text-xl">Our Story</p> */}
                        <p>for 'Our Story', 'Our Team', and 'Our Mission', along with contact information including an embedded map, phone number, email, social media links, and a contact form for 'Our Story', 'Our Team', and 'Our Mission', along with contact information including an embedded map, phone number, email, social media links, and a contact form</p>
                    </section>

                    <section className="address">
                        <table className="w-full border-spacing-y-5">
                            <tbody>
                                <tr className="border-b border-[#ccc]">
                                    <td className="text-[#aaa] py-2">Address</td>
                                    <td>12 Main Street Anywhere</td>
                                </tr>
                                <tr className="border-b border-[#ccc]">
                                    <td className="text-[#aaa] py-2">Phone</td>
                                    <td>+01 23456789</td>
                                </tr>
                                <tr className="border-b border-[#ccc]">
                                    <td className="text-[#aaa] py-2">Email</td>
                                    <td>info@thedailycrumb.com</td>
                                </tr>
                                <tr className="border-b border-[#ccc]">
                                    <td className="text-[#aaa] py-2">Socials</td>
                                    <td>Faceboook, Instagram, Twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="max-w-[480px] pt-10">
                        <form action="" method="post" className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="py-2 font-semibold">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name"
                                className="border border-[#aaa] text-[#aaa] rounded-sm p-2 focus:border-[#ee8d2b] focus:outline-none focus:ring-0"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="py-2 font-semibold">Email</label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                className="border border-[#aaa] text-[#aaa] rounded-sm p-2 focus:border-[#ee8d2b] focus:outline-none focus:ring-0"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="py-2 font-semibold">Message</label>
                                <textarea name="message" id="message" placeholder="Your Message"
                                className="border border-[#aaa] text-[#aaa] rounded-sm p-2 focus:border-[#ee8d2b] focus:outline-none focus:ring-0"></textarea>
                            </div>
                            <button className="flex min-w-[100px] max-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee8d2b] text-[#1b140d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
                                <span className="truncate">Send Message</span>
                            </button>
                        </form>
                    </section>
                </div>
    );
}

export default Contact;