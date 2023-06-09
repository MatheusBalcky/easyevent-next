import { Eczar } from "next/font/google";
import { MdEventAvailable } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import happypeoples from "../../public/happy-people-pexels.jpg";
import Image from "next/image";

const EczarFont = Eczar({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <div className="flex-col space-y-12">
      <nav className="flex justify-end p-6 space-x-4">
        <button className="text-sm hover:bg-dark-purple bg-roxo px-4 py-2 rounded-full font-bold drop-shadow-md">Home</button>
        <button className="text-sm hover:bg-dark-purple bg-roxo px-4 py-2 rounded-full font-bold drop-shadow-md">Fazer login</button>
      </nav>

      <header className="animate-fade-in flex flex-col justify-center items-center p-6 md-2:flex-row md-2:space-x-16">
        <section className="flex flex-col items-center gap-16">
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

          <section className="hidden w-3/5 sm:flex md-2:hidden">
            <div>
              <Image className="animate-wiggle clip-happy-peoples drop-shadow-2xl w-full" src={happypeoples} alt="Picture of the author" />
            </div>
          </section>

          <div className="flex gap-5 m-4">
            <button className="hover:animate-pulse-fast bg-roxo px-6 py-3 rounded-full font-bold drop-shadow-md">Buscar eventos</button>
            <button className="hover:animate-pulse-fast last:bg-roxo px-6 py-3 rounded-full font-bold drop-shadow-md">Criar meu evento</button>
          </div>
        </section>

        <section className="hidden w-2/5 md-2:flex">
          <div>
            <Image className="animate-wiggle clip-happy-peoples drop-shadow-2xl w-full" src={happypeoples} alt="Picture of the author" />
          </div>
        </section>
      </header>

      <main className="animate-fade-in flex justify-center items-center p-6 md-2:space-x-16">
        <section className="hidden md-2:flex">
          <div className="bg-[url(../../public/woman-office.jpg)] clip-parallelogram w-96 h-96 bg-cover bg-center drop-shadow-md" />
        </section>
        <section className="space-y-8 max-w-lg flex flex-col justify-center items-center">
          <h1 className="drop-shadow-md text-4xl font-bold">Precisando lançar a inscrição do seu evento online ?</h1>
          <p className="drop-shadow-md text-zinc-950 text-xl text-justify">Aqui você consegue apenas com poucos cliques lançar seu evento online com uma página personalizada por você contendo informações sobre local, horário, data e mais. Vem com a gente e faz teu evento de forma easy!</p>
        </section>
      </main>

      <footer className="animate-fade-in flex flex-col justify-center items-center space-y-12 p-6 pb-10 md:flex-row md-2:space-x-16">
        <div>
          <h1 className="text-5xl font-bold">Deixe-nos te ajudar.</h1>
          <br />
          <p className="text-base font-semibold">Algum problema na plataforma ou estar precisando de ajuda?</p>
          <br />

          <h2 className="text-xl font-bold">EMAIL</h2>
          <p className="text-xl text-zinc-950 font-semibold">hello@reallygreatsite.com</p>
          <br />

          <h2 className="text-xl font-bold">WHATSAPP</h2>
          <p className="text-xl text-zinc-950 font-semibold hover:text-roxo cursor-pointer">(81) xxxx-xxxx</p>
          <br />

          <h2 className="text-xl font-bold">SOCIAL</h2>
          <div className="flex space-x-2">
            <AiFillInstagram className="text-zinc-950 text-3xl cursor-pointer hover:text-roxo" />
            <AiFillTwitterCircle className="text-zinc-950 text-3xl cursor-pointer hover:text-roxo" />
          </div>
        </div>

        <div className="flex drop-shadow-xl">
          <h1 className={`animate-swing-in-top-fwd ${EczarFont.className} text-yellow-title text-6xl xl drop-shadow-[3px_2px_rgba(197,22,255,1)] md:text-8xl`}>
            Easy <br />
            <p className="pl-4">Event</p>
          </h1>
          <MdEventAvailable className="animate-swing-in-top-fwd-rotate rotate-12 text-yellow-title text-6xl drop-shadow-[3px_2px_rgba(197,22,255,1)]" />
        </div>
      </footer>
    </div>
  );
}
