"use client"
import React from 'react';
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css';

const CarouselImages = ({images}) => {
    const flickityOptions = {
        cellAlign: 'left',
        contain: true,
        pageDots: true,          // Ubah ke true untuk menampilkan dots
        prevNextButtons: true,    // Ubah ke true untuk menampilkan tombol prev/next
        draggable: true,         // Pastikan bisa di-drag
        // freeScroll: true,        // Memungkinkan scroll bebas
        // wrapAround: true,        // Infinite scroll
        // autoPlay: false,         // Opsional: autoplay
        friction: 0.8,           // Mengatur kecepatan scroll
        selectedAttraction: 0.01  // Mengatur smooth scroll
    }
    return (
        <div id="details-images" className="main-carousel mt-[30px]">
    <Flickity
        options={flickityOptions}
    >
        {images.map((item,i) => (
            <div key={item + i} className="image-card pr-5 first-of-type:pl-[calc((100vw-1130px-20px)/2)]">
                <div
                    className="bg-white w-[470px] h-[350px] p-10 flex shrink-0 border border-[#E5E5E5] justify-center items-center rounded-[30px] overflow-hidden">
                    <img src={item}
                         className="w-full h-full object-contain" alt="thumbnail"/>
                </div>
            </div>

        ))}
    </Flickity>
        </div>
    );
};

export default CarouselImages;