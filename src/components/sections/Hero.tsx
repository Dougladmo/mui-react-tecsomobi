
const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col-reverse md:flex-row w-full pt-10 md:pt-52 pb-10 md:pb-72 mx-auto max-w-[1400px]"
    >
      <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-2 px-5">
        <h1 className="text-2xl md:text-[47px] leading-normal text-left text-[#002D65]">
          Saiba onde carregar o seu cartão de transporte.
        </h1>
        <p className="text-base md:text-lg leading-normal text-left max-w-xl">
          Com o Tecsomobi Charging Points, você encontra facilmente os pontos de
          recarga mais próximos para seu cartão de mobilidade urbana.
          Praticidade no seu dia a dia.
        </p>
        <a
          className="from-[#175097] to-[#306EBC] bg-gradient-to-b text-base md:text-lg mt-5 rounded-2xl px-5 py-5 text-white self-start"
          href="#"
        >
          Encontre um ponto de recarga
        </a>
        <div className="flex items-center gap-3">
          <div className="bg-[#FF5627] w-[45px] h-[25px] mt-14"></div>
          <div className="bg-[#175097] w-[45px] h-[25px] mt-14"></div>
          <div className="bg-[#84D6DA] w-[45px] h-[25px] mt-14"></div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <img
          src="/hero-bus.png"
          alt="foto da hero"
          className="w-11/12 md:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
