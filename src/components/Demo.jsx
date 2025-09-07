import React from 'react'

export default function Demo() {


    return (
        <section className="py-12 bg-blue-100 text-center">
            <div className="mb-8">
                <p className="text-lg text-gray-700">Get Inspiration</p>
                <h2 className="text-3xl font-semibold text-black">Watch Our Demo Classes</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {/* Video Wrapper */}
                {[
                    "https://www.youtube.com/embed/0L3lEfc6dWg?si=NnQNPVOFKZlNbafC",
                    "https://www.youtube.com/embed/Beg-Qm0Ndw8?si=YwqWcd1Xpz2Lq5v-",
                    "https://www.youtube.com/embed/zRpbLd9WRXs?si=GGVCcoPbjnbsKfMl",
                ].map((src, idx) => (
                    <div key={idx} className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%]">
                        <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={src}
                                title={`YouTube video ${idx + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
