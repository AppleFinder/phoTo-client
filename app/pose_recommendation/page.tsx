"use client";

import { useState } from "react";
import { ArrowLeft, Camera, Heart, Bookmark, Download } from "lucide-react";
import Image from "next/image";
import { useBasket } from "@/contexts/basket-context"; // ✅ 추가

export default function PosesPage() {
  const [step, setStep] = useState<"select" | "results">("select");
  const [peopleCount, setPeopleCount] = useState<number | string>(1);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { addToBasket } = useBasket(); // ✅ 장바구니 함수 불러오기

  const buttonOptions = [1, 2, 3, 4, "5+"] as const;

  const poseList = [
    { id: 1, title: "로맨틱 커플", color: "bg-pink-100", imageUrl: "/images/pose1.png" },
    { id: 2, title: "친구들과 함께", color: "bg-blue-100", imageUrl: "/images/pose2.png" },
    { id: 3, title: "우아한 그룹", color: "bg-purple-100", imageUrl: "/images/pose3.png" },
    { id: 4, title: "귀여운 커플", color: "bg-pink-200", imageUrl: "/images/pose4.png" },
  ];

  const filterButtons = [
    { key: "v", label: "✌ 브이" },
    { key: "heart", label: "💕 하트" },
    { key: "thumb", label: "👍 따봉" },
    { key: "animal", label: "🐱 동물" },
    { key: "face", label: "😜 표정" },
    { key: "etc", label: "😎 기타" },
  ];

  const handleFilterSelect = (key: string) => {
    setSelectedFilter(selectedFilter === key ? null : key);
  };

  const handleAddToBasket = (pose: { title: string; imageUrl: string }) => {
    addToBasket({
      title: pose.title,
      imageUrl: pose.imageUrl,
      poseType: selectedFilter ?? undefined,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 relative">
      {step === "select" && (
        <>
          <p className="text-lg font-medium text-gray-700 mb-12 mt-8 text-center">
            함께 사진 찍을 인원수를 선택해주세요
          </p>

          <div className="relative flex items-center justify-center mb-6 mt-8 w-full">
            <div className="absolute left-[35%] -translate-x-1/2">
              <Image
                src="/images/mascot.png"
                alt="수달 마스코트"
                width={130}
                height={130}
                priority
              />
            </div>
            <p className="text-6xl font-bold">{peopleCount}</p>
          </div>

          <div className="flex gap-3 mb-6">
            {buttonOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPeopleCount(option)}
                className={`w-12 h-12 flex items-center justify-center rounded-full border text-lg font-bold transition-all 
                  ${peopleCount === option
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep("results")}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            <Camera className="w-5 h-5" />
            포즈 추천 받기
          </button>
        </>
      )}

      {step === "results" && (
        <div className="flex flex-col w-full max-w-[calc(100vh*9/16)] mx-auto min-h-screen bg-gray-50 animate-fadeIn">
          <div className="flex items-center gap-3 p-4">
            <button
              type="button"
              onClick={() => setStep("select")}
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <p className="px-4 text-lg font-semibold text-gray-700 mb-4">
            선택된 인원: {peopleCount}명
          </p>

          <div className="grid grid-cols-3 gap-2 px-4 mb-6">
            {filterButtons.map((btn) => {
              const isSelected = selectedFilter === btn.key;
              return (
                <button
                  key={btn.key}
                  onClick={() => handleFilterSelect(btn.key)}
                  className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200
                    ${isSelected
                      ? "bg-black text-white scale-105"
                      : "bg-white border border-gray-300 text-black hover:bg-gray-100"}`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 p-4">
            {poseList.map((pose, index) => (
              <div
                key={pose.id}
                className={`rounded-lg overflow-hidden relative ${pose.color} transform transition-all duration-300 hover:scale-105 animate-slideUp`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  aspectRatio: "3/4"
                }}
              >
                <div className="p-4 h-full flex items-end bg-gradient-to-t from-black/40 to-transparent">
                  <p className="text-sm font-bold text-white">{pose.title}</p>
                </div>
                <div className="absolute bottom-2 left-2 flex gap-2">
                  <Heart className="w-4 h-4 text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-pink-300" />
                  <Bookmark
                    className="w-4 h-4 text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-blue-300"
                    onClick={() => handleAddToBasket(pose)} // ✅ 포즈 추가
                  />
                  <Download className="w-4 h-4 text-white cursor-pointer transition-all duration-200 hover:scale-110 hover:text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
