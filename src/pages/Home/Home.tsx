import FaqCarousel from "../../components/FaqCarousel";
import Header from "../../components/layout/Header";

const Home = () => {
  return (
    <>
      <Header />

      <div className="text-5xl font-[poppins] w-full flex flex-col gap-16 bg-[#F0F0F0]">

        <div
          id="hero"
          className="flex flex-col-reverse md:flex-row w-full pt-10 md:pt-52 pb-10 md:pb-72 mx-auto max-w-[1400px]"
        >

          <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-2 px-5">
            <h1 className="text-2xl md:text-[47px] leading-normal text-left text-[#002D65]">
              Saiba onde carregar o seu cartão de transporte.
            </h1>
            <p className="text-base md:text-lg leading-normal text-left max-w-xl">
              Com o Tecsomobi Charging Points, você encontra facilmente os
              pontos de recarga mais próximos para seu cartão de mobilidade
              urbana. Praticidade no seu dia a dia.
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
          {/* Imagem no lado direito */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
            <img
              src="/hero-bus.png"
              alt="foto da hero"
              className="w-11/12 md:w-full"
            />
          </div>
        </div>

        {/* VANTAGENS */}
        <div
          id="vantagens"
          className="flex flex-col md:flex-row w-full items-center pb-10 md:pb-72 mx-auto max-w-7xl relative"
        >
          {/* 
            Para não causar sobreposição em telas pequenas, deixamos a imagem
            de fundo oculta em mobile e só exibimos no desktop.
          */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/blue-bus.png"
              alt="foto da hero"
              className="hidden md:block w-6/12 absolute -left-80 -top-[120px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-2 px-5 mt-10 md:mt-0">
            <h2 className="text-2xl md:text-5xl leading-normal text-right text-[#000]">
              Vantagens do Tecsomobi Charging Points{" "}
              <img
                src="/semaforo.gif"
                className="hidden md:block absolute w-[350px] -right-[312px] -top-[110px] z-10"
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

        {/* PASSO A PASSO */}
        <div
          id="stepbystep"
          className="w-full mx-auto flex flex-col md:flex-row items-center bg-[#012757] py-10 md:py-28"
        >
          <div className="max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-center">

          <div className="w-full md:w-1/2 px-5 flex flex-col justify-start items-start gap-2 text-[#fff]">
            <h2 className="text-2xl md:text-5xl font-semibold leading-normal text-right">
              Passo a passo
            </h2>
            <ol className="flex flex-col gap-8 text-base md:text-xl font-medium mt-5">
              <li className="flex items-center gap-4 md:gap-8">
                <span className="text-4xl md:text-[64px] font-[quicksand] font-normal">
                  1
                </span>
                Acesse a plataforma.
              </li>
              <li className="flex items-center gap-4 md:gap-8">
                <span className="text-4xl md:text-[64px] font-[quicksand] font-normal">
                  2
                </span>
                Permita acesso ao GPS para vermos os pontos mais proximos.
              </li>
              <li className="flex items-center gap-4 md:gap-8">
                <span className="text-4xl md:text-[64px] font-[quicksand] font-normal">
                  3
                </span>
                Visualize os pontos de recarga no mapa.
              </li>
              <li className="flex items-center gap-4 md:gap-8">
                <span className="text-4xl md:text-[64px] font-[quicksand] font-normal">
                  4
                </span>
                Escolha o ponto ideal para você e recarregue seu cartão com
                facilidade apenas aproximando da máquina.
              </li>
            </ol>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-5 mt-10 md:mt-0">
            <div className="flex items-center justify-center w-full">
              <video
                src="/recharge.mp4"
                autoPlay
                loop
                muted
                className="object-cover rounded-full w-11/12 md:w-auto"
                />
            </div>
            <a
              className="from-[#fff] to-[#fff] bg-gradient-to-b text-base md:text-lg mt-5 rounded-2xl px-5 py-5 text-[#175097]"
              href="#"
              >
              Encontre um ponto de recarga
            </a>
          </div>
              </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="flex w-full py-10 md:py-20 mx-auto max-w-7xl">
          <FaqCarousel />
        </div>

        {/* CTA */}
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

        {/* CONTATO */}
        <div
          id="contact"
          className="flex flex-col md:flex-row w-full py-10 md:py-24 mx-auto max-w-7xl"
        >
          <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-2 px-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#FF5627] w-[47px] h-[22px] mt-14"></div>
              <div className="bg-[#175097] w-[45px] h-[22px] mt-14"></div>
              <div className="bg-[#84D6DA] w-[45px] h-[22px] mt-14"></div>
            </div>
            <h2 className="text-2xl md:text-[47px] leading-normal text-left text-[#002D65]">
              Contatos
            </h2>
            <p className="text-base md:text-xl leading-normal text-left">
              Tel (11)3060-3912
            </p>
            <p className="text-base md:text-xl leading-normal text-left">
              comercial@tecsomobi.com.br
            </p>
            <p className="max-w-sm mt-10 text-base md:text-xl leading-normal text-left">
              Coronel Joaquim Ferreira Lobo 253, Subsl 01, 04544150, Vila Nova
              Conceição, São Paulo São Paulo
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.306517681651!2d-46.68463602388287!3d-23.593337662769226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574f87c15b8d%3A0x610a339612a19633!2sEstacionamento%20-%20R.%20Cel.%20Joaquim%20Ferreira%20Lobo%2C%20253%20-%20Vila%20Nova%20Concei%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004544-150!5e0!3m2!1spt-BR!2sbr!4v1744768657882!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-11/12 md:w-10/12 shadow-2xl rounded-2xl h-72"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
