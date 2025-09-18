import Image from "next/image";

function About() {
    return (
        <div className="max-w-[960px] py-5 px-5">
            <h1 className="text-3xl font-bold pt-5">About Us</h1>
            <section className="py-5">
                <p className="font-bold py-3 text-xl">Our Story</p>
                <p>for 'Our Story', 'Our Team', and 'Our Mission', along with contact information including an embedded map, phone number, email, social media links, and a contact form for 'Our Story', 'Our Team', and 'Our Mission', along with contact information including an embedded map, phone number, email, social media links, and a contact form</p>
            </section>

            <section className="py-5">
                <p className="font-bold py-3 text-xl">Our Team</p>
                <div className="grid grid-cols-1 @[480px]:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 align-center justify-center text-center">
                        <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB99rvuaZ0Z5d8Zb_B3Jo7WkJ1osea5mKQOdLBxJfi5wFmTbv4ss89qcLUW2uSCjtk86TKP-fB6SgLZu7UrLTsvvJpcweSHbewD3HBHufu9CM7-WLdegAUwWX3ZyCP_2AiEVRJJiaYL4wDRla8Knv4Wu_jUdlhfWZBm-pJfCs4WySE0NjRpj_GuB9d1tMAUWb1ehqiEzr4ocBmk-aP2dHstiICvzjnLeGvXKVonES23vYCN4UOwA9NOI_voXdrDDYPRJD_CxUIme8O4"
                        alt="team"
                        width={200} height={200}
                        className="w-full rounded-full"
                        />
                        <p className="font-bold">Sarah Miller</p>
                        <p className="text-[#bbb]">Founder & Head Baker</p>
                    </div>

                    <div className="flex flex-col gap-2 align-center justify-center text-center">
                        <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSyIuDFgExPLnipm6AZc0sdHi8JR-OwUEQvcomn3IzNn3gHURvRJFVfN1fizBSue6W1E1Lk0BIImWSoF8ltviI4fxhB-c7oGSQUXuXB95ZvtWjv0oC_NA7-DWmyWAR9fh1KOQasAT9NRA0v2zAXDTwAUFoghfGE_lnPsaBks2MNb5b3_4ujdCa5CRra9JpB2Ll6IO3uQ9P2wa-Ns8RO0sAsDEmIpAHxM1MTHK015kXF28ExawCEViWnG_yyeEyP3Dlw5RGx5cChtdH"
                        alt="team"
                        width={200} height={200}
                        className="w-full rounded-full"
                        />
                        <p className="font-bold">Mark  Johnson</p>
                        <p className="text-[#bbb]">Pastry Chief</p>
                    </div>

                    <div className="flex flex-col gap-2 align-center justify-center text-center">
                        <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq28mUAAACgFVIq47u1Gp7jk1_LwRzucPz7xGEjhP03zynCyTLhisqAGBssDMS2IRzo9kn6jPcM5-crT9gYzdvg8cwVOajdFnKxy9HxFk-MCjTsZxflLJ-hRrkichHh92Bg2pKJDuBaUZaDPGe1HP3L145-G1vQGf582XG9KF0Mw7B29St-KsofS2lqMcJ3_s8LSWbXeEsNesjIMMMluN2a0rktZSUtWix45_oq_R4T4rEbaEeoHOZ9Jv9a3l8eSSq89rQi83yNYvI"
                        alt="team"
                        width={200} height={200}
                        className="w-full rounded-full"
                        />
                        <p className="font-bold">Emily Davis</p>
                        <p className="text-[#bbb]">Customer Relations</p>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <p className="font-bold py-3 text-xl">Our Mission</p>
                <p>for 'Our Story', 'Our Team', and 'Our Mission', along with cfor 'Our Story', 'Our Team', and 'Our Mission', along with contact information including an embedded map, phone number, email, social media links, and a contact formontact information including an embedded map, phone number, email, social media links, and a contact form</p>
            </section>
        </div>
    );
}

export default About;