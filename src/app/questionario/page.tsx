"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Target, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";

export default function Questionario() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    objetivo: "",
    pesoAtual: "",
    pesoDesejado: "",
    tentativas: "",
    motivacao: "",
    disponibilidade: "",
    desafio: ""
  });

  const totalSteps = 7;

  const handleAnswer = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Redirecionar para checkout
      window.location.href = "/checkout";
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-fuchsia-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Passo {step} de {totalSteps}</span>
            <span className="text-white font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-400 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Qual é o seu principal objetivo?
                </h2>
                <p className="text-gray-600">
                  Vamos personalizar o TCA para você alcançar seus resultados
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "emagrecer", label: "Emagrecer e perder gordura", emoji: "🎯" },
                  { value: "tonificar", label: "Tonificar e definir o corpo", emoji: "💪" },
                  { value: "saude", label: "Melhorar saúde e bem-estar", emoji: "❤️" },
                  { value: "autoestima", label: "Recuperar autoestima e confiança", emoji: "✨" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleAnswer("objetivo", option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                      answers.objetivo === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Quantas vezes você já tentou emagrecer?
                </h2>
                <p className="text-gray-600">
                  Não se preocupe, o TCA é diferente de tudo que você já tentou
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "primeira", label: "Esta é minha primeira vez", emoji: "🌟" },
                  { value: "2-3", label: "Já tentei 2-3 vezes", emoji: "🤔" },
                  { value: "4-5", label: "Tentei 4-5 vezes", emoji: "😔" },
                  { value: "muitas", label: "Perdi a conta de tantas vezes...", emoji: "😢" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleAnswer("tentativas", option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                      answers.tentativas === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Qual é o seu maior desafio?
                </h2>
                <p className="text-gray-600">
                  Vamos te ajudar a superar exatamente isso
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "fome", label: "Sinto muita fome nas dietas", emoji: "🍽️" },
                  { value: "tempo", label: "Não tenho tempo para cozinhar", emoji: "⏰" },
                  { value: "motivacao", label: "Perco a motivação rápido", emoji: "😓" },
                  { value: "resultado", label: "Não vejo resultados", emoji: "😞" },
                  { value: "sanfona", label: "Recupero o peso perdido", emoji: "🔄" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleAnswer("desafio", option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                      answers.desafio === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  O que mais te motiva a emagrecer?
                </h2>
                <p className="text-gray-600">
                  Seu "porquê" é fundamental para o sucesso
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "saude", label: "Melhorar minha saúde", emoji: "❤️" },
                  { value: "autoestima", label: "Recuperar minha autoestima", emoji: "✨" },
                  { value: "roupas", label: "Caber nas minhas roupas", emoji: "👗" },
                  { value: "familia", label: "Ter mais energia para família", emoji: "👨‍👩‍👧‍👦" },
                  { value: "confianca", label: "Me sentir confiante novamente", emoji: "💪" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleAnswer("motivacao", option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                      answers.motivacao === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Quanto tempo você tem por dia?
                </h2>
                <p className="text-gray-600">
                  O TCA se adapta à sua rotina
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { value: "20min", label: "20-30 minutos", emoji: "⚡" },
                  { value: "30-45min", label: "30-45 minutos", emoji: "⏱️" },
                  { value: "1hora", label: "Cerca de 1 hora", emoji: "🕐" },
                  { value: "flexivel", label: "Varia bastante", emoji: "🔄" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      handleAnswer("disponibilidade", option.value);
                      setTimeout(nextStep, 300);
                    }}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                      answers.disponibilidade === option.value
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{option.emoji}</span>
                      <span className="text-lg font-semibold text-gray-900">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6 */}
          {step === 6 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Qual é o seu peso atual?
                </h2>
                <p className="text-gray-600">
                  Essa informação nos ajuda a personalizar seu plano
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Ex: 75"
                  value={answers.pesoAtual}
                  onChange={(e) => handleAnswer("pesoAtual", e.target.value)}
                  className="w-full p-5 text-2xl text-center rounded-2xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-all"
                />
                <p className="text-center text-gray-500 text-sm">kg</p>
              </div>

              <button
                onClick={nextStep}
                disabled={!answers.pesoAtual}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 7 */}
          {step === 7 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Qual é o seu peso ideal?
                </h2>
                <p className="text-gray-600">
                  Vamos te ajudar a chegar lá em 28 dias
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Ex: 63"
                  value={answers.pesoDesejado}
                  onChange={(e) => handleAnswer("pesoDesejado", e.target.value)}
                  className="w-full p-5 text-2xl text-center rounded-2xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-all"
                />
                <p className="text-center text-gray-500 text-sm">kg</p>

                {answers.pesoAtual && answers.pesoDesejado && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                    <p className="text-center text-gray-700 mb-2">
                      Você quer perder:
                    </p>
                    <p className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {Number(answers.pesoAtual) - Number(answers.pesoDesejado)} kg
                    </p>
                    <p className="text-center text-green-600 font-semibold mt-2">
                      ✅ Totalmente possível com o TCA!
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={nextStep}
                disabled={!answers.pesoDesejado}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Ver Minha Oferta Personalizada
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Botão Voltar */}
          {step > 1 && step < 6 && (
            <button
              onClick={prevStep}
              className="mt-6 w-full text-gray-500 hover:text-gray-700 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
          )}
        </div>

        {/* Mensagem de Confiança */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="font-semibold">Suas informações estão seguras</span>
          </div>
        </div>

        {/* Gatilhos de Urgência */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">23 pessoas preenchendo agora</span>
            </div>
            <div className="text-yellow-400 font-bold">
              🔥 Últimas vagas com desconto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
