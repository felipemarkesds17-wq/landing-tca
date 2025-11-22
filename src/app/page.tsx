"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Users, 
  Camera, 
  UtensilsCrossed, 
  Dumbbell, 
  MessageCircle, 
  Package, 
  TrendingUp, 
  Calendar, 
  Target, 
  Heart, 
  Shield, 
  Star, 
  Clock, 
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  TrendingDown
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      result: "Perdi 12kg em 28 dias",
      text: "Depois de tentar TUDO e nunca conseguir manter o peso, o TCA mudou minha vida. O app me guiou todos os dias e a comunidade me deu o apoio que eu precisava!",
      rating: 5
    },
    {
      name: "Ana Paula",
      age: 41,
      result: "Eliminei 15kg",
      text: "Eu comia pouco e não emagrecia. Estava frustrada até conhecer o TCA. Finalmente entendi o que estava fazendo errado e os resultados apareceram!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      age: 29,
      result: "10kg a menos",
      text: "Cansada de promessas falsas, encontrei no TCA um método real. O cardápio é delicioso e os treinos são práticos. Nunca mais volto aos métodos antigos!",
      rating: 5
    },
    {
      name: "Carla Mendes",
      age: 38,
      result: "13kg eliminados",
      text: "O diferencial é o acompanhamento diário. Saber que tinha o app me guiando e a comunidade me apoiando fez toda diferença. Resultado real em 28 dias!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Faixa de Urgência no Topo */}
      <div className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white py-3 px-4 text-center animate-pulse">
        <p className="text-sm md:text-base font-bold">
          🔥 ÚLTIMAS 15 VAGAS COM 50% DE DESCONTO - PROMOÇÃO ENCERRA EM 24H ⏰
        </p>
      </div>

      {/* Hero Section com Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image com Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=1920&h=1080&fit=crop" 
            alt="Mulher Fitness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-pink-900/85"></div>
        </div>

        {/* Elementos Decorativos Flutuantes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-pink-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white border border-pink-400/50 mb-6 hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
              ✨ Mais de 50.000 pessoas transformadas
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6">
              Emagreça <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-300">12kg em 28 dias</span> 💪 com o Método que já Transformou Milhares de Vidas
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Chega de dietas que não funcionam! 🚫 O TCA é o método completo com app exclusivo 📱, cardápios deliciosos 🍽️, treinos práticos 🏋️ e comunidade de apoio 👥. Tudo que você precisa em um só lugar.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-base md:text-lg text-white">📱 Acompanhamento diário pelo app exclusivo</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-base md:text-lg text-white">🍽️ Cardápios e treinos enviados automaticamente</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-base md:text-lg text-white">👥 Comunidade exclusiva de apoio 24/7</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-base md:text-lg text-white">⚡ Resultados reais em apenas 28 dias</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/questionario"
                className="group bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white px-8 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 flex items-center justify-center gap-2"
              >
                🚀 QUERO EMAGRECER AGORA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="text-center sm:text-left">
                <p className="text-sm text-pink-300 font-bold">🔥 Últimas 23 vagas com desconto</p>
                <p className="text-xs text-gray-300">⏰ Oferta expira em 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o TCA */}
      <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        {/* Padrão de fundo decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-400 border border-pink-400/30 mb-4">
              <Award className="w-4 h-4" />
              Método Completo
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              O Método <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">TCA</span> é Completo ✨
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Tudo que você precisa para emagrecer de verdade, em um único método integrado 🎯
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                emoji: "📱",
                title: "App Exclusivo",
                description: "Acompanhamento diário com registro de métricas, fotos e progresso"
              },
              {
                icon: <UtensilsCrossed className="w-8 h-8" />,
                emoji: "🍽️",
                title: "Cardápio Diário",
                description: "Receitas deliciosas e acessíveis que você vai amar preparar"
              },
              {
                icon: <Dumbbell className="w-8 h-8" />,
                emoji: "💪",
                title: "Treinos Práticos",
                description: "Sequência diária de exercícios que cabem na sua rotina"
              },
              {
                icon: <Users className="w-8 h-8" />,
                emoji: "👥",
                title: "Comunidade",
                description: "Grupo exclusivo com apoio 24/7 de quem está na mesma jornada"
              },
              {
                icon: <Camera className="w-8 h-8" />,
                emoji: "📸",
                title: "Fotos de Progresso",
                description: "Ferramenta para registrar sua evolução visual dia a dia"
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                emoji: "💬",
                title: "WhatsApp Automático",
                description: "Receba cardápios e treinos direto no seu celular todos os dias"
              },
              {
                icon: <Target className="w-8 h-8" />,
                emoji: "🎯",
                title: "Métricas Pessoais",
                description: "Acompanhe peso, medidas e evolução com gráficos inteligentes"
              },
              {
                icon: <Package className="w-8 h-8" />,
                emoji: "📦",
                title: "Box Opcional",
                description: "Receba produtos naturais do cardápio na sua casa (upsell)"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50 relative overflow-hidden"
              >
                {/* Brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-fuchsia-500/0 group-hover:from-pink-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon}
                  </div>
                  <div className="text-3xl mb-2">{feature.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Carrossel */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/30 mb-4">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Depoimentos Reais
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Resultados Reais de Quem Transformou a Vida 🌟
            </h2>
            <p className="text-lg md:text-xl text-pink-200">
              Mais de 50.000 pessoas já emagreceram com o TCA 🎉
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-pink-400 text-pink-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>
              
              <p className="text-2xl md:text-3xl font-bold mb-4">
                {testimonials[currentTestimonial].result} 🎯
              </p>
              
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-fuchsia-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-pink-200">{testimonials[currentTestimonial].age} anos</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl hover:shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl hover:shadow-2xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-pink-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(45deg, #ec4899 25%, transparent 25%), linear-gradient(-45deg, #ec4899 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ec4899 75%), linear-gradient(-45deg, transparent 75%, #ec4899 75%)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-400 border border-pink-400/30 mb-4">
              <TrendingDown className="w-4 h-4" />
              Transformações Reais
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Transformações <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">Impressionantes</span> 🔥
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Veja as transformações reais em apenas 28 dias ⚡
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Fernanda - Imagem Real */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/4632fef2-20d9-474c-867c-f1b3fcc4b6e3.png" 
                alt="Fernanda Antes e Depois" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ⚡ -14kg
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <p className="font-bold text-xl">Fernanda 💪</p>
                <p className="text-2xl font-bold text-pink-400">-14kg em 28 dias</p>
              </div>
            </div>

            {/* Patrícia - Imagem Real */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/2656f59b-426a-466f-b4db-9642c6a57aff.jpg" 
                alt="Patrícia Antes e Depois" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ⚡ -11kg
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <p className="font-bold text-xl">Patrícia 💪</p>
                <p className="text-2xl font-bold text-pink-400">-11kg em 28 dias</p>
              </div>
            </div>

            {/* Roberta - Imagem Real Atualizada */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6e97c00f-c86f-4305-9b05-f6a3f25cd1ca.jpg" 
                alt="Roberta Antes e Depois" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                ⚡ -13kg
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <p className="font-bold text-xl">Roberta 💪</p>
                <p className="text-2xl font-bold text-pink-400">-13kg em 28 dias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              TCA vs. Métodos Tradicionais ⚔️
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Veja a diferença entre tentar sozinho e ter um método completo 🎯
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Métodos Tradicionais */}
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Métodos Antigos 😞</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Dietas restritivas que causam fome 🍽️❌",
                    "Sem acompanhamento profissional 👨‍⚕️❌",
                    "Resultados lentos e frustrantes 🐌",
                    "Efeito sanfona garantido 📈📉",
                    "Você fica perdido sem direção 🤷‍♀️",
                    "Treinos genéricos da internet 💻❌",
                    "Nenhum suporte ou comunidade 😔",
                    "Promessas falsas e milagrosas 🎪"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-red-900/30 rounded-xl border border-red-800">
                  <p className="text-center text-red-400 font-bold">
                    Resultado: Frustração e desistência 😢
                  </p>
                </div>
              </div>
              
              {/* Método TCA */}
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white relative overflow-hidden border-2 border-pink-500 hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-2 rounded-bl-2xl font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  MELHOR ESCOLHA
                </div>
                
                <div className="flex items-center gap-3 mb-6 mt-8">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Método TCA ✨</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Cardápios deliciosos e satisfatórios 🍽️✅",
                    "App com acompanhamento diário 📱✅",
                    "Resultados visíveis em 28 dias ⚡",
                    "Método sustentável para sempre ♾️",
                    "Passo a passo claro todos os dias 📋",
                    "Treinos personalizados e práticos 💪",
                    "Comunidade de apoio 24/7 👥",
                    "Método cientificamente comprovado 🔬"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-pink-300 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-pink-500 rounded-xl shadow-lg">
                  <p className="text-center text-white font-bold">
                    Resultado: Transformação real e duradoura 🎉
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gráfico de Evolução */}
            <div className="mt-12 bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Evolução Comparativa em 28 Dias 📊
              </h3>
              
              <div className="space-y-6">
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-pink-400 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Método TCA
                    </span>
                    <span className="font-bold text-pink-400">-12kg média 🎯</span>
                  </div>
                  <div className="h-8 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-fuchsia-600 rounded-full shadow-lg" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Dieta Restritiva</span>
                    <span className="text-gray-400">-3kg (com fome) 😢</span>
                  </div>
                  <div className="h-8 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Sozinho/Academia</span>
                    <span className="text-gray-400">-2kg (sem direção) 🤷‍♀️</span>
                  </div>
                  <div className="h-8 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                
                <div className="group hover:scale-105 transition-transform">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Promessas Milagrosas</span>
                    <span className="text-gray-400">0kg (frustração) 😭</span>
                  </div>
                  <div className="h-8 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dor e Identificação */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-black via-purple-950 to-black text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "50px 50px"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Você Está <span className="text-pink-400">Cansada</span> de... 😤
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Tentar dietas que prometem milagres mas nunca funcionam 🎪"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Passar fome e mesmo assim não ver o ponteiro da balança descer ⚖️"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Começar na segunda-feira e desistir na quarta-feira 📅"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Perder peso e recuperar tudo de volta (efeito sanfona) 📈📉"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Sentir vergonha do seu corpo e evitar fotos 📸"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Não ter energia para brincar com seus filhos 👶"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Gastar dinheiro com métodos que não trazem resultado 💸"
                },
                {
                  icon: <X className="w-8 h-8" />,
                  text: "Sentir que nada funciona para você especificamente 😔"
                }
              ].map((pain, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 hover:bg-white/10 hover:border-pink-500/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20">
                  <div className="flex items-start gap-4">
                    <div className="text-red-400 flex-shrink-0">
                      {pain.icon}
                    </div>
                    <p className="text-left text-lg">{pain.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 p-8 md:p-12 rounded-3xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                O TCA Foi Criado Exatamente Para VOCÊ! 🎯
              </h3>
              <p className="text-lg md:text-xl mb-6">
                Para quem já tentou de tudo, está frustrada com promessas falsas e precisa de um método REAL que finalmente funcione. Não é mais uma dieta da moda. É uma transformação completa em 28 dias. 💪✨
              </p>
              <Link 
                href="/questionario"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                🚀 SIM, EU QUERO MUDAR AGORA
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Passo a Passo */}
      <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(90deg, #ec4899 1px, transparent 1px), linear-gradient(#ec4899 1px, transparent 1px)", backgroundSize: "50px 50px"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-400 border border-pink-400/30 mb-4">
              <Smartphone className="w-4 h-4" />
              App Exclusivo
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Conheça o <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">App TCA</span> 📱
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Tudo que você precisa na palma da sua mão ✨
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    emoji: "📅",
                    title: "Acompanhamento Diário",
                    description: "Registre seu peso, medidas e como está se sentindo todos os dias. O app cria gráficos automáticos da sua evolução."
                  },
                  {
                    icon: <Camera className="w-6 h-6" />,
                    emoji: "📸",
                    title: "Fotos de Progresso",
                    description: "Tire fotos semanais e veja sua transformação visual. O app organiza tudo em uma linha do tempo motivadora."
                  },
                  {
                    icon: <UtensilsCrossed className="w-6 h-6" />,
                    emoji: "🍽️",
                    title: "Cardápio Completo",
                    description: "Acesse receitas deliciosas para cada refeição. Ingredientes simples que você encontra em qualquer mercado."
                  },
                  {
                    icon: <Dumbbell className="w-6 h-6" />,
                    emoji: "💪",
                    title: "Treinos em Vídeo",
                    description: "Exercícios práticos com vídeos explicativos. Faça em casa, sem equipamentos caros."
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    emoji: "💬",
                    title: "WhatsApp Automático",
                    description: "Receba lembretes, cardápios e treinos direto no WhatsApp. Nunca mais esqueça o que fazer."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    emoji: "👥",
                    title: "Comunidade Integrada",
                    description: "Converse com outras pessoas na mesma jornada. Compartilhe vitórias, tire dúvidas e receba apoio 24/7."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        {feature.title} {feature.emoji}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop" 
                  alt="Telas do App" 
                  className="rounded-3xl shadow-2xl shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-500 to-fuchsia-600 px-6 py-4 rounded-2xl font-bold shadow-xl text-white hover:scale-110 transition-transform">
                  <p className="text-sm">📱 Disponível para</p>
                  <p className="text-xl">iOS e Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Upsell */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-pink-900 text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full font-bold mb-6 shadow-lg hover:scale-105 transition-transform">
                  <Package className="w-4 h-4" />
                  🎁 OFERTA ESPECIAL
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Box TCA Premium 📦
                </h2>
                
                <p className="text-lg md:text-xl mb-8 text-pink-100">
                  Quer facilitar ainda mais? Receba em casa um box completo com todos os produtos naturais do cardápio TCA. Sem precisar ir ao mercado, sem desculpas! 🚚✨
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Produtos naturais selecionados 🌿",
                    "Porções exatas do cardápio 📏",
                    "Entrega mensal na sua casa 🏠",
                    "Economia de tempo e dinheiro 💰",
                    "Qualidade premium garantida ⭐",
                    "Sem precisar pensar no que comprar 🛒"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-pink-300 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:shadow-xl">
                  <p className="text-sm text-pink-200 mb-2">💝 Adicione ao seu pedido por apenas:</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <p className="text-2xl font-bold text-gray-400 line-through">R$ 297</p>
                    <p className="text-4xl font-bold text-pink-300">R$ 149,90</p>
                  </div>
                  <p className="text-sm text-pink-200">✅ Você pode adicionar o Box na próxima etapa</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/5990a611-fd97-4f88-a7f2-b251b6704969.png" 
                  alt="Box TCA Premium" 
                  className="rounded-3xl shadow-2xl shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-center shadow-xl animate-bounce">
                  <div>
                    <p className="text-xs">💰 Economize</p>
                    <p className="text-xl">30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Detalhados */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: "repeating-linear-gradient(45deg, #ec4899 0px, #ec4899 2px, transparent 2px, transparent 10px)", backgroundSize: "100% 100%"}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-400 border border-pink-400/30 mb-4">
              <Zap className="w-4 h-4" />
              Método Comprovado
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Por Que o TCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">Funciona?</span> 🔬
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Método cientificamente comprovado e testado por milhares de pessoas ✅
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                emoji: "🎯",
                title: "Método Personalizado",
                description: "Não é uma dieta genérica. O TCA se adapta ao seu perfil, rotina e objetivos específicos."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                emoji: "❤️",
                title: "Sem Passar Fome",
                description: "Cardápios balanceados e satisfatórios. Você vai comer bem e emagrecer ao mesmo tempo."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                emoji: "⚡",
                title: "Resultados Rápidos",
                description: "Veja mudanças reais nos primeiros 7 dias. Motivação garantida para continuar."
              },
              {
                icon: <Users className="w-8 h-8" />,
                emoji: "👥",
                title: "Suporte Constante",
                description: "Comunidade ativa e equipe de suporte. Você nunca estará sozinha nessa jornada."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                emoji: "📈",
                title: "Sustentável",
                description: "Não é uma dieta temporária. É um estilo de vida que você mantém para sempre."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                emoji: "⏰",
                title: "Cabe na Rotina",
                description: "Treinos de 20-30 minutos e receitas rápidas. Perfeito para quem tem pouco tempo."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50">
                  {benefit.icon}
                </div>
                <div className="text-4xl mb-3">{benefit.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-500 hover:shadow-pink-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-2xl hover:scale-110 transition-transform">
                  <Shield className="w-12 h-12" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Garantia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">Resultados</span> 🛡️
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Estamos tão confiantes no TCA que oferecemos uma garantia incondicional ✅
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-900/30 to-fuchsia-900/30 p-8 rounded-2xl mb-8 border border-pink-500/30 hover:border-pink-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Garantia de 7 Dias 📅
                </h3>
                <p className="text-lg text-gray-200 text-center leading-relaxed">
                  Se nos primeiros 7 dias você não ver resultados ou não gostar do método, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. É simples assim. 💯
                </p>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="group hover:-translate-y-2 transition-transform">
                  <div className="text-4xl font-bold text-pink-400 mb-2">7 dias</div>
                  <p className="text-gray-400">⏰ Para testar sem risco</p>
                </div>
                <div className="group hover:-translate-y-2 transition-transform">
                  <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                  <p className="text-gray-400">💰 Dinheiro de volta</p>
                </div>
                <div className="group hover:-translate-y-2 transition-transform">
                  <div className="text-4xl font-bold text-pink-400 mb-2">Zero</div>
                  <p className="text-gray-400">✅ Burocracia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-950 via-fuchsia-950 to-pink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaC0xMnYxMmgxMlYzMHptMC0xMmgtMTJWMzBoMTJWMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sua Transformação Começa <span className="text-pink-400">AGORA</span> 🚀
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-pink-200">
              Mais de 50.000 pessoas já transformaram suas vidas com o TCA. Você será a próxima? 💪✨
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-pink-500/30 mb-8 hover:bg-white/20 transition-all hover:shadow-2xl hover:shadow-pink-500/50">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="group hover:-translate-y-2 transition-transform">
                  <p className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">28</p>
                  <p className="text-pink-200">📅 Dias para transformar</p>
                </div>
                <div className="group hover:-translate-y-2 transition-transform">
                  <p className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">-12kg</p>
                  <p className="text-pink-200">⚖️ Média de emagrecimento</p>
                </div>
                <div className="group hover:-translate-y-2 transition-transform">
                  <p className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">50k+</p>
                  <p className="text-pink-200">🎉 Vidas transformadas</p>
                </div>
              </div>
              
              <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block mb-6 animate-pulse shadow-lg">
                🔥 Últimas 23 vagas com desconto especial
              </div>
              
              <Link 
                href="/questionario"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 mb-6"
              >
                🚀 COMEÇAR MINHA TRANSFORMAÇÃO AGORA
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-pink-200">
                <div className="flex items-center gap-2 group hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>📱 Acesso imediato ao app</span>
                </div>
                <div className="flex items-center gap-2 group hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>🛡️ Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2 group hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>💬 Suporte 24/7</span>
                </div>
              </div>
            </div>
            
            <p className="text-pink-300 text-sm">
              ⏰ Oferta válida apenas para as próximas 24 horas
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Método TCA. Todos os direitos reservados. ✨</p>
          <p className="text-sm">Transforme sua vida em 28 dias com o método que realmente funciona. 💪</p>
        </div>
      </footer>
    </div>
  );
}
