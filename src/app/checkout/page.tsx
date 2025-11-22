"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Package, Sparkles, Shield, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Checkout() {
  const [addBox, setAddBox] = useState(false);
  
  const basePrice = 297;
  const boxPrice = 297;
  const discount = 100;
  const total = addBox ? basePrice + boxPrice - discount : basePrice - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold mb-4">
            🎉 OFERTA ESPECIAL ATIVADA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sua Transformação Está a Um Passo!
          </h1>
          <p className="text-xl text-gray-600">
            Parabéns! Você foi selecionada para nossa oferta exclusiva
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna Esquerda - Resumo do Pedido */}
          <div className="lg:col-span-2 space-y-6">
            {/* Método TCA */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Método TCA Completo</h3>
                  <p className="text-gray-600">Acesso vitalício ao método + app exclusivo</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 line-through">R$ 397</p>
                  <p className="text-3xl font-bold text-purple-600">R$ 297</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "✅ App exclusivo com acompanhamento diário",
                  "✅ Cardápios deliciosos para 28 dias",
                  "✅ Treinos em vídeo passo a passo",
                  "✅ Comunidade exclusiva de apoio",
                  "✅ Envio automático via WhatsApp",
                  "✅ Suporte 24/7 da equipe TCA",
                  "✅ Atualizações gratuitas para sempre",
                  "✅ Garantia de 7 dias ou dinheiro de volta"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <p className="font-bold text-gray-900">Garantia Incondicional de 7 Dias</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Se você não ver resultados ou não gostar do método, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>

            {/* Box Premium (Upsell) */}
            <div className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
              addBox ? 'border-yellow-400 ring-4 ring-yellow-100' : 'border-gray-200'
            }`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-2">
                      🎁 OFERTA ESPECIAL
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Box TCA Premium</h3>
                    <p className="text-gray-600">Produtos naturais entregues na sua casa</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 line-through">R$ 397</p>
                  <p className="text-3xl font-bold text-orange-600">R$ 297</p>
                  <p className="text-xs text-gray-500">/mês</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "📦 Produtos naturais selecionados",
                  "⚖️ Porções exatas do cardápio",
                  "🚚 Entrega mensal na sua casa",
                  "💰 Economize 30% vs. mercado",
                  "⏰ Sem perder tempo comprando",
                  "✨ Qualidade premium garantida"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setAddBox(!addBox)}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  addBox
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {addBox ? '✓ Box Adicionado ao Pedido' : '+ Adicionar Box Premium'}
              </button>

              {addBox && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 text-center animate-fadeIn">
                  <p className="text-green-700 font-semibold">
                    🎉 Parabéns! Você economizou R$ 100 adicionando o Box
                  </p>
                </div>
              )}
            </div>

            {/* Depoimentos Rápidos */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                O Que Nossas Alunas Dizem
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Carolina M.",
                    result: "-13kg em 28 dias",
                    text: "O Box facilitou MUITO! Não precisei me preocupar com compras."
                  },
                  {
                    name: "Juliana S.",
                    result: "-11kg em 28 dias",
                    text: "Melhor investimento que já fiz na minha saúde!"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-yellow-400 font-bold mb-2">{testimonial.result}</p>
                    <p className="text-sm mb-3">"{testimonial.text}"</p>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita - Resumo e Pagamento */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resumo do Pedido</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-700">Método TCA Completo</span>
                  <span className="font-bold text-gray-900">R$ 297</span>
                </div>

                {addBox && (
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Box TCA Premium</span>
                    <span className="font-bold text-gray-900">R$ 297</span>
                  </div>
                )}

                {addBox && (
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-green-600 font-semibold">Desconto Combo</span>
                    <span className="font-bold text-green-600">-R$ 100</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-900">Total</span>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      R$ {total}
                    </p>
                    {addBox && (
                      <p className="text-sm text-gray-500">
                        + R$ 297/mês (Box)
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Acesso imediato após pagamento</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mb-4">
                FINALIZAR COMPRA
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">Pagamento processado por plataforma segura</p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Seus dados estão protegidos</span>
                </div>
              </div>
            </div>

            {/* Gatilhos de Urgência */}
            <div className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white text-center animate-pulse">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold mb-1">⏰ Oferta expira em:</p>
              <p className="text-3xl font-bold">14:37</p>
              <p className="text-sm mt-2">Últimas 23 vagas com desconto</p>
            </div>

            {/* Prova Social */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-purple-600" />
                <p className="font-bold text-gray-900">Atividade em Tempo Real</p>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p>🟢 Ana de São Paulo acabou de comprar</p>
                <p>🟢 Carla de Curitiba acabou de comprar</p>
                <p>🟢 Juliana do Rio acabou de comprar</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Perguntas Frequentes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Quando recebo acesso?",
                a: "Imediatamente após a confirmação do pagamento!"
              },
              {
                q: "Funciona para qualquer idade?",
                a: "Sim! O TCA é adaptável para todas as idades."
              },
              {
                q: "E se eu não gostar?",
                a: "7 dias de garantia. Devolvemos 100% do seu dinheiro."
              },
              {
                q: "Preciso de equipamentos?",
                a: "Não! Todos os treinos podem ser feitos em casa."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
