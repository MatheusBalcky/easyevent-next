import { Eczar } from "next/font/google";
import { MdEventAvailable } from "react-icons/md";
import happypeoples from "../../public/happy-people-pexels.jpg";
import Image from "next/image";

const EczarFont = Eczar({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className="flex-col">
      <header className="animate-fade-in flex p-4 mt-8">
        <section className="flex flex-col items-center w-3/5 gap-16">
          <div className="flex drop-shadow-xl">
            <h1 className={`animate-swing-in-top-fwd ${EczarFont.className} text-yellow-title text-7xl drop-shadow-[3px_2px_rgba(197,22,255,1)]`}>
              Easy <br />
              <p className="pl-4">Event</p>
            </h1>
            <MdEventAvailable className="animate-swing-in-top-fwd-rotate rotate-12 text-yellow-title text-6xl drop-shadow-[3px_2px_rgba(197,22,255,1)]" />
          </div>

          <p className="font-black text-5xl pl-4 drop-shadow-md">
            Crie ou encontre <br /> um evento <br /> easy agora!
          </p>

          <div className="flex gap-5 m-4">
            <button className="hover:animate-pulse-fast bg-roxo px-8 py-4 rounded-full font-bold drop-shadow-md">Buscar eventos</button>
            <button className="hover:animate-pulse-fast last:bg-roxo px-8 py-4 rounded-full font-bold drop-shadow-md">Criar meu evento</button>
          </div>
        </section>

        <section className="w-2/5 flex justify-center items-center">
          <div className="relative">
            <div className="bg-black w-full h-full rounded-full"> </div>
            <Image className="animate-wiggle clip-happy-peoples drop-shadow-2xl" src={happypeoples} alt="Picture of the author"></Image>
          </div>
        </section>
      </header>

      <main className="animate-fade-in h-screen p-4 mt-8 border-solid border-2 border-black">
        <section>
          <Image src={""} alt="Mulher representando uma atendente"></Image>
        </section>
        <section>
          <h1></h1>
          <p></p>
        </section>
      </main>

      <footer className="h-screen p-6 border-solid border-2 border-black">
        <h3>Footer</h3>
      </footer>
    </div>
  );
}
