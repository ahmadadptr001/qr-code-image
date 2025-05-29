import image from "../assets/Desain tanpa judul (23).png"

export default function CardImage23 () {
        return (
                <div className="p-5 flex justify-center bg-gray-700 text-white">
                        <div id="card" className="border border-gray-300 rounded-md w-[300px]">
                                <div className="card-header">
                                        <img src={ image } alt="image-1"className="w-[300px] h-[200px] object-cover" />
                                </div>
                                <div className="card-body p-3">
                                        <p className="font-semibold">Information</p>
                                        <p className="mt-3">Nama: Pocari Sweat</p>
                                        <p className="">Harga: Rp 250.000,00</p>
                                </div>
                        </div>
                </div>
        )
}