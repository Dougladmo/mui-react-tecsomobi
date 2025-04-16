
const Vantagens = () => {
  return (
    <div
    id="vantagens"
    className="flex flex-col md:flex-row w-full items-center pb-10 md:pb-72 mx-auto max-w-7xl relative"
  >

    <div className="w-full md:w-1/2 flex items-center justify-center">
      <img
        src="/blue-bus.png"
        alt="foto da hero"
        className="hidden md:block w-6/12 absolute xl:-left-80 xl:-top-[120px]"
      />
    </div>
    <div className="flex flex-col items-end justify-end w-full md:w-1/2 gap-2 px-5 mt-10 md:mt-0">
      <h2 className="text-2xl md:text-5xl leading-normal text-right text-[#000]">
        Vantagens do Tecsomobi Charging Points{" "}
        <img
          src="/semaforo.gif"
          className="hidden md:block absolute w-[350px] md:right-0 md:-top-[350px] xl:-right-[312px] xl:-top-[110px] z-10"
          alt="gif semaforo"
        />
      </h2>
      <p className="text-base md:text-xl leading-normal text-right">
        Localize pontos de recarga próximos, com informações completas e
        acesso fácil pelo celular ou computador, tudo de forma gratuita e
        sem cadastro.
      </p>
      <a
        className="from-[#175097] to-[#306EBC] bg-gradient-to-b text-base md:text-lg mt-12 rounded-2xl px-5 py-5 text-white self-end"
        href="#"
      >
        Encontre um ponto de recarga
      </a>
    </div>
  </div>
  )
}

export default Vantagens