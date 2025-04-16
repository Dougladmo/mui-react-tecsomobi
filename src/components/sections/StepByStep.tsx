const StepByStep = () => {
  return (
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
  );
};

export default StepByStep;
