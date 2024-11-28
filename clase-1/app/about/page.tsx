import React from 'react';
import Image from 'next/image';

function about() {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-6 text-center p-6'>Members</h2>
            <h3 className=' mb-4 text-center'>The best members 😎</h3>
            <div className='flex justify-center items-center space-x-4'>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/blue.jpg" alt="Miembro Gero Grimaldi" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Gero Grimaldi
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/bluelight.jpg" alt="Miembro Nacho Debuck" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Nacho Debuck
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/red.jpg" alt="Miembro Jose Antille" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Jose Antille
                    </h2>
                </div>
                <div className="relative w-[200px] h-[200px]">
                    <Image src="/yellow.png" alt="Miembro Ema Forlin" fill className="rounded object-cover" />
                    <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold bg-black/50 rounded">
                        Ema Forlin
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default about;
