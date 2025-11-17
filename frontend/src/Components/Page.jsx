import { Globe, PackageSearch, ShieldCheck } from 'lucide-react';
export default function Page() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl mt-5 font-semibold text-center mx-auto">Why Choose AD Logistics?</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                At AD Logistics, we are committed to delivering unparalleled logistics solutions, ensuring your cargo reaches its destination safely, efficiently, and on time.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
                <img className="max-w-lg w-full rounded-xl h-auto"
                    src="https://imgs.search.brave.com/oZgqvcgtgyMfoR5WNGcGzRQHdBLrJKzBtvkZd6CbM78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbnRl/cm5hdGlvbmFsLWxv/Z2lzdGljcy1jb25j/ZXB0dWFsLWltYWdl/LWZlYXR1cmluZy1k/b2NrZXItbG9va2lu/Zy11bmxvYWRpbmct/Y29udGFpbmVyLXNo/aXAtaHVnZS1jcmFu/ZXMtMzExMzY2MDcu/anBn"
                    alt="Logistics warehouse" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Commitment to Excellence</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        We pride ourselves on a foundation of reliability, innovation, and customer-centric services, making us your ideal logistics partner.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                                <Globe size={24} className="text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Global Reach & Local Expertise</h3>
                                <p className="text-sm text-slate-500">Leveraging an extensive network, we provide seamless logistics solutions across continents with deep local insights.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                                <PackageSearch size={24} className="text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Advanced Tracking & Transparency</h3>
                                <p className="text-sm text-slate-500">Stay informed with real-time tracking and transparent updates on your shipments from origin to destination.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
                                <ShieldCheck size={24} className="text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Reliable & Secure Deliveries</h3>
                                <p className="text-sm text-slate-500">Your cargo's safety is our priority. We ensure secure handling and timely delivery with utmost care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};