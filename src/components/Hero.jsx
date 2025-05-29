import imageHero from "../assets/welcome.png";

export default function Hero() {
        return (
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
                        <div className="flex justify-end">
                                <img src={ imageHero } alt="stiker welcome" className="w-[300px] sm:w-[500px] object-cover"/>
                        </div>
                        <div className="flex flex-col justify-center">
                                <p className="font-bold text-4xl text-sky-600">Welcome to my qr code Image</p>
                                <p className="font-semibold text-xl text-sky-600">by Ahmad Adptr Develop</p>
                        </div>
                </div>
        )
}