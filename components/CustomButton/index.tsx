import React from "react";
import Image from "next/image";
import "./style.scss";
import { CustomButtonProps } from "@/types";

function CustomButton({ generateAdvice }: CustomButtonProps) {
  return (
    <button className="btn" onClick={() => generateAdvice()}>
      <Image
        src="./icon-dice.svg"
        width={30}
        height={30}
        alt="Regenerate Button"
      />
    </button>
  );
}

export default CustomButton;
