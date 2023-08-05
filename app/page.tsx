"use client";
import Image from "next/image";
import "./style.scss";
import CustomButton from "@/components/CustomButton";
import { fetchAdvice } from "@/utils";
import { useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState<{ advice: string; id: number }>();
  const handleGenerateAdvice = async () => {
    const generatedAdvice = await fetchAdvice();
    setAdvice(generatedAdvice);
  };
  return (
    <main className="advice-card">
      <div className="advice-card__container">
        <h4 className="advice-card__header">ADVICE # {advice?.slip.id}</h4>
        <p className="advice-card__advice">"{advice?.slip.advice}"</p>
      </div>
      <div className="advice-card__line"></div>
      <CustomButton generateAdvice={handleGenerateAdvice} />
    </main>
  );
}
