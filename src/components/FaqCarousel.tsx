import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoTriangleRight } from "react-icons/go";

const faqItems = [
  {
    question: "Posso usar em qualquer cidade?",
    answer:
      "Estamos expandindo a cobertura gradualmente. Confira o mapa para ver se já atuamos na sua região.",
  },
  {
    question: "Preciso pagar para usar a plataforma?",
    answer: "Não. O acesso ao Tecsomobi Charging Points é totalmente gratuito.",
  },
  {
    question: "Os dados dos pontos estão atualizados?",
    answer:
      "Sim, nossa equipe realiza verificações periódicas para garantir a confiabilidade das informações.",
  },
  {
    question: "Como funciona o atendimento?",
    answer:
      "Nosso suporte está disponível 24/7 para ajudar com quaisquer dúvidas.",
  },
];

const cardWidth = 352;
const gap = 32;
const slideDistance = cardWidth + gap;

const cardHeight = 280;

export default function FaqCarousel() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const [animating, setAnimating] = useState(false);
  const length = faqItems.length;

  const indicesToRender = [
    current,
    (current + 1) % length,
    (current + 2) % length,
  ];

  const nextSlide = async () => {
    if (animating) return;
    setAnimating(true);

    await controls.start({
      x: -50,
      transition: { duration: 0.3, ease: "easeOut" },
    });
    await controls.start({
      x: -slideDistance,
      transition: { duration: 0.4, ease: "easeOut" },
    });

    setCurrent((prev) => (prev + 1) % length);
    controls.set({ x: 0 });
    setAnimating(false);
  };

  return (
    <div
      id="faq"
      className="relative flex flex-col items-center w-full gap-16 py-20 mx-auto max-w-7xl"
    >
      <div className="absolute right-0 flex flex-col items-center gap-3 -top-10">
        <div className="bg-[#FF5627] w-[45px] h-[25px]"></div>
        <div className="bg-[#175097] w-[45px] h-[25px]"></div>
        <div className="bg-[#84D6DA] w-[45px] h-[25px]"></div>
      </div>
      <h2 className="text-5xl leading-normal text-left text-[#002D65]">
        Dúvidas Frequentes
      </h2>

      <div className="relative flex items-center justify-center w-full">
        <div
          style={{
            width: `${3 * slideDistance - gap}px`,
            overflow: "hidden",
          }}
        >
          <motion.div
            className="flex"
            style={{ gap: `${gap}px` }}
            animate={controls}
          >
            {indicesToRender.map((idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-4 bg-[#D9D9D9] rounded-3xl"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  padding: "3rem",
                }}
              >
                <p className="text-xl leading-normal text-[#002D65]">
                  {faqItems[idx].question}
                </p>
                <p className="text-lg leading-normal text-[#7C7B7B]">
                  {faqItems[idx].answer}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-10 z-10 px-4 text-3xl text-[#175097]"
        >
          <GoTriangleRight
            className="text-[#7C7B7B] cursor-pointer"
            size={60}
          />
        </button>
      </div>
    </div>
  );
}
