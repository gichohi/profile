import Image from 'next/image';

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between m-4 p-4">
            <div className="flex w-full md:w-1/2 items-center justify-center">
                <Image
                    width={400}
                    height={400}
                    src="https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/3ef25463-241c-425b-93b2-816065b61ff7/9d7291de-f849-4071-917b-ff200b756194.png"
                    alt="avatar"
                />
            </div>
            <div className="flex flex-col w-full md:w-1/2 m-4 p-4">
                <h1 className="text-2xl">Hello there! My name is Gichohi <span className=" border-b-4 border-light-green">Karuga.</span></h1>
                <p className="text-justify mt-4">Fullstack Engineer with a passion for building scalable and user-centric
                    web applications. Proficient in a wide range of technologies, including React.js, Next.js, Node.js,
                    Angular, and Tailwind CSS. With a strong foundation in both frontend and backend development,
                    I am adept at crafting robust and efficient solutions that meet the highest standards of
                    quality and performance.</p>
            </div>
        </div>
    );
}

export default Hero;