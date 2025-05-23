'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import { ChatBubbleBottomCenterTextIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="page-content">
      <div className="page-background">
        <div className="background-blur top-0 -left-1/4 bg-[#1F526B]"></div>
        <div className="background-blur top-1/3 -right-1/4 bg-[#9ECCFA]"></div>
        <div className="background-blur -bottom-1/4 left-1/3 bg-[#E6D8C7]"></div>
        <div className="background-blur bottom-0 -right-1/4 bg-[#FD6F2F]"></div>
      </div>
      
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              <span className="text-white">
                Desbloqueie seu potencial de comunicação com confiança
              </span>
            </h1>
            <p className="text-base text-white/80">
              Na Comunique-se, entendemos que comunicar-se bem não é um dom é uma habilidade. Se você sente dificuldades em se expressar, seja por timidez, ansiedade social ou insegurança, nós estamos aqui para ajudar.
              Nosso compromisso é oferecer conteúdos acessíveis, práticos e baseados em vivências reais para quem deseja se comunicar melhor no trabalho, em casa ou em qualquer ambiente. Com artigos criados para orientar, inspirar e transformar, somos um ponto de apoio confiável para quem busca evoluir pessoal e profissionalmente por meio da comunicação.
              Seja bem-vindo ao espaço onde sua voz ganha força.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/cadastro"
                className="glass-button"
              >
                Comece Agora
              </Link>
              <Link 
                href="/sobre"
                className="px-5 py-2 rounded-md text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg aspect-video relative overflow-hidden border border-white/20 hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <ChatBubbleBottomCenterTextIcon className="w-20 h-20 text-[#FD6F2F]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-white mb-3">Planos que cabem no seu bolso</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-sm">
              Escolha o plano ideal para o seu desenvolvimento e comece sua jornada hoje mesmo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Básico</h3>
              <p className="text-2xl font-bold text-white mb-4">R$ 49,90<span className="text-sm font-normal text-white/70">/mês</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  5 cursos básicos
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Certificado
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Suporte por email
                </li>
              </ul>
              <Link 
                href="/pricing"
                className="block text-center text-sm text-white/70 hover:text-white transition-colors"
              >
                Ver mais detalhes →
              </Link>
            </div>

            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 relative">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-24 rounded-full bg-[#FD6F2F] px-2 py-1 text-xs font-medium text-white text-center">
                Mais popular
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Profissional</h3>
              <p className="text-2xl font-bold text-white mb-4">R$ 89,90<span className="text-sm font-normal text-white/70">/mês</span></p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Todos os cursos
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Mentoria em grupo
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Suporte prioritário
                </li>
              </ul>
              <Link 
                href="/pricing"
                className="block text-center text-sm text-white/70 hover:text-white transition-colors"
              >
                Ver mais detalhes →
              </Link>
            </div>

            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-2xl font-bold text-white mb-4">Sob consulta</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Soluções personalizadas
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Mentoria individual
                </li>
                <li className="flex items-center text-white/70 text-sm">
                  <CheckIcon className="h-5 w-5 text-[#FD6F2F] mr-2" />
                  Suporte dedicado
                </li>
              </ul>
              <Link 
                href="/pricing"
                className="block text-center text-sm text-white/70 hover:text-white transition-colors"
              >
                Ver mais detalhes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">Pronto para transformar sua comunicação?</h2>
                <p className="text-white/70 text-sm">Comece sua jornada hoje mesmo.</p>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/cadastro" 
                  className="glass-button"
                >
                  Comece Agora
                </Link>
                <Link 
                  href="/pricing" 
                  className="glass-button"
                >
                  Ver Planos
                </Link>
                <Link 
                  href="/sobre" 
                  className="px-5 py-2 rounded-md text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 