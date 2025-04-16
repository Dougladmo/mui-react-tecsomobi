
const CtaSection = () => {
  return (
    <div
      id="cta"
      className="flex flex-col items-center justify-center w-full py-10 md:py-20 mx-auto max-w-7xl px-5"
    >
      <h2 className="text-2xl md:text-5xl leading-normal text-center text-[#002D65]">
        Está pronto para recarregar seu cartão com mais praticidade?
      </h2>
      <a
        className="from-[#175097] to-[#306EBC] bg-gradient-to-b text-base md:text-lg mt-10 md:mt-14 rounded-2xl px-5 py-5 text-white"
        href="#"
      >
        Acesse o mapa agora mesmo
      </a>
      <img
        src="/bus-cta.png"
        alt="onibus de frente"
        className="w-full mt-10 md:mt-16"
      />
    </div>
  );
};

export default CtaSection;
