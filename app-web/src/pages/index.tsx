import { url } from "inspector";
import Head from "next/head";
import Image from "next/image";
import heroImg from "../assets/hero_copa.png";
import logo from "../assets/logo.svg";
import avatars from "../assets/users_avatar.png";
import iconCheck from "../assets/icon_check.svg";
import { api } from "../lib/axios";
import { FormEvent, useState } from "react";

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home({ poolCount, guessCount, userCount }: HomeProps) {
  const [poolTitle, setPoolTitle] = useState("");

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setPoolTitle(e.currentTarget.value);
  };

  const handleCreatePool = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!poolTitle) {
      return;
    }

    try {
      const response = await api.post("/pools", {
        title: poolTitle,
      });

      const { code } = response.data;

      await navigator.clipboard.writeText(code);

      setPoolTitle("");

      alert(
        "Bolão criado com sucesso! O código foi copiado para a área de transferência."
      );
    } catch (error) {
      alert("Falha ao criar o bolão!");
    }
  };

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logo} alt="Logo Copa do Mundo" quality={100} />

        <h1 className="mt-14 text-white font-bold text-4xl leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image
            src={avatars}
            alt="foto de alguns usuários da aplicação"
            quality={100}
          />

          <strong className="text-gray-100 text-xl">
            <span className="text-greeny-500">+{userCount}</span> pessoas já
            estão usando
          </strong>
        </div>

        <form onSubmit={handleCreatePool} className="mt-10 flex gap-2">
          <input
            className="flex-1 text-gray-500 bg-gray-800 px-6 py-4 rounded border-2 border-gray-600 text-sm focus:outline-none focus:border-greeny-500 placeholder:text-gray-600"
            type="text"
            placeholder="Qual nome do seu bolão"
            value={poolTitle}
            onChange={onChange}
          />

          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 font-bold text-sm uppercase px-6 py-4 rounded 
          hover:bg-yellow-700 hover:ease-in-out transiton-all duration-200"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600  text-gray-100 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <Image
              src={iconCheck}
              alt="esfera verde com a letra V dentro"
              quality={100}
            />

            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <span className="h-16 w-px bg-gray-600" />

          <div className="flex gap-6 items-center">
            <Image
              src={iconCheck}
              alt="esfera verde com a letra V dentro"
              quality={100}
            />

            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        quality={100}
        src={heroImg}
        alt="dois celulares exibindo uma prévia da aplicação"
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const [poolCountResponse, guessCountResponse, userCountResponse] =
    await Promise.all([
      api.get("pools/count"),
      api.get("guesses/count"),
      api.get("users/count"),
    ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    },

    revalidate: 60 * 10, // 10 minutes
  };
};
