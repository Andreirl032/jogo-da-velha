import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        id="container"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-96 h-96 flex flex-col gap-[2%]"
      >
        <div className="flex flex-row gap-[2%]">
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
        </div>
        <div className="flex flex-row gap-[2%]">
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
        </div>
        <div className="flex flex-row gap-[2%]">
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
          <button className="bg-white p-[16%]"></button>
        </div>
      </div>
    </main>
  );
}
