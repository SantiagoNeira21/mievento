
import * as React from "react";

const Card = ({ src, alt, label }) => (
    <article className="flex flex-col w-1/2 text-2xl font-bold leading-8 text-center whitespace-nowrap border border-solid shadow-2xl bg-[#FFF] border-neutral-100 text-[#202020] max-md:mt-5">
      <img loading="lazy" src={src} alt={alt} className="w-auto aspect-[0.92]" />
      <div className="self-center mt-6">{label}</div>
    </article>
  );


const Cards = () => {
    const items = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd57f5ea7da9c31f4203b257213cb3c15479c55ea645321eb6a8bdc5a5ccbe63?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Concert Image", label: "Conciertos" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f511cf7a26f15b79c17d3547367ce88950f87efce43316daa9bc7ff0a060e5a?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Talk Image", label: "Charlas" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/075d53aca796df8f20d638c2a29538ed24ab434275535c59aec538a22d1558a3?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Academic Events Image", label: "Eventos académicos" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/94280179d003dfaf7860104f75f6ae666a3a2756bd08a2bb86288574fa9eccd2?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Exhibitions Image", label: "Exhibiciones" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeaf27c0db59565341a32b4f34d99dbe1ab596ba874f59c02edd2896caa3a80d?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Laboral Image", label: "Laboral" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5809de9145203accf9725ab67fc138fa599647e073f27866b5490b5e1139d3e8?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Educational Image", label: "Educación" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6f15e3af3dc78157e039bc8813edf04bd1e53c3ec4bd8b0d0ad8db85ac9be2?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Sports Image", label: "Deportes" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/43d794d12ff95fc72e2d904458a30b6825bf281bf210b4db126b6b81f0f8492f?apiKey=d2f1d8227634429d962e1433da5b503d&", alt: "Etc Image", label: "Etc..." }
    ];
    return (
        <section className="grid grid-cols-3 gap-5 px-5 mt-10 w-full">
          {items.map(({ src, alt, label }, index) => (
            <Card key={index} src={src} alt={alt} label={label} />
          ))}
        </section>
      );
};

export default Cards;
