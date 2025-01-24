"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Player = 1 | 2;
type Element = "X" | "O" | "/";
type LineRow = Array<Element>;
type Matrix = Array<Array<Element>>;
type Winner = 0 | 1 | 2;

interface PlayerElement {
  1: Element;
  2: Element;
}

export default function Home() {
  const [turn, setTurn] = useState<Player>(1);
  const [matrix, setMatrix] = useState<Matrix>([
    ["/", "/", "/"],
    ["/", "/", "/"],
    ["/", "/", "/"],
  ]);
  const [playerElement, setPlayerElement] = useState<PlayerElement>({
    1: "/",
    2: "/",
  });

  function convertElementToPlayer(element: Element): Player | null {
    if (playerElement[1] === element) {
      return 1;
    } else if (playerElement[2] === element) {
      return 2;
    }
    return null;
  }

  function checkWinner(matrix: Matrix): Winner | null {
    //Cheque horizontal
    if (
      (matrix[0][0] === matrix[0][1] &&
        matrix[0][1] === matrix[0][2] &&
        matrix[0][0] !== "/") ||
      (matrix[1][0] === matrix[1][1] &&
        matrix[1][1] === matrix[1][2] &&
        matrix[0][0] !== "/") ||
      (matrix[2][0] === matrix[2][1] &&
        matrix[2][1] === matrix[2][2] &&
        matrix[0][0] !== "/")
    ) {
      return convertElementToPlayer(matrix[0][0]);
    }

    //Cheque vertical
    if (
      (matrix[0][0] === matrix[1][0] &&
        matrix[1][0] === matrix[2][0] &&
        matrix[0][0] !== "/") ||
      (matrix[0][1] === matrix[1][1] &&
        matrix[1][1] === matrix[2][1] &&
        matrix[0][1] !== "/") ||
      (matrix[0][2] === matrix[1][2] &&
        matrix[1][2] === matrix[2][2] &&
        matrix[0][2] !== "/")
    ) {
      return convertElementToPlayer(matrix[0][0]);
    }

    //Cheque diagonal
    if (
      (matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2] &&
        matrix[0][0] !== "/") ||
      (matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0] &&
        matrix[0][2] !== "/")
    ) {
      return convertElementToPlayer(matrix[0][0]);
    }

    return 0;
  }

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
