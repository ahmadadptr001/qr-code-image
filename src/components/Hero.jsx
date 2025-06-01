import { useState } from "react";
import imageHero from "../assets/welcome.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {

        const navigate = useNavigate();
        const arr = Array.from({ length: 25 }, (_, i) => i);
        
        return (
                <>
                <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
                        <div className="flex justify-end">
                                <img src={ imageHero } alt="stiker welcome" className="w-[300px] sm:w-[500px] object-cover"/>
                        </div>
                        <div className="flex flex-col justify-center">
                                <p className="font-bold text-4xl text-sky-600">Welcome to my qr code Image</p>
                                <p className="font-semibold text-xl text-sky-600">by Ahmad Adptr Develop</p>
                        </div>
                </div>

                <div className="grid gap-4 grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5">
                                { arr.map((item, index) => (
                                        <div onClick={() => navigate(`/image${index+1}`)} className="rounded-md bg-sky-500 hover:bg-sky-600 px-4 py-3 text-white cursor-pointer">
                                                <p className="flex gap-2 items-center">
                                                        <i className="fas fa-image"></i>
                                                        Item - { index + 1 }
                                                </p>
                                        </div>
                                )) }
                </div>
                </>
        )
}