import React, { useEffect, useState } from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';

interface DynamicSideProps {
  startAnimations: boolean;
}

export function DynamicSide({ startAnimations }: DynamicSideProps) {
  const [revealTitle, setRevealTitle] = useState(false);

  useEffect(() => {
    if (startAnimations) {
      setTimeout(() => setRevealTitle(true), 300);
    }
  }, [startAnimations]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-stone-50">
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-gold-50 to-stone-100 opacity-60"></div>
        <div className={`relative z-10 text-center transition-all duration-1000 ${revealTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-7xl font-serif text-stone-900 mb-4 leading-tight">
            Elegancia Romano
          </h1>
          <p className="text-xl text-stone-600 font-light tracking-wide italic">Un siglo forjando leyendas</p>
        </div>
      </section>

      <section className="px-8 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl font-serif text-center text-stone-900 mb-16">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={member.id}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-sm mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-stone-900 mb-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-widest text-gold-600 mb-3">{member.role}</p>
                <p className="text-stone-600 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl font-serif text-center text-stone-900 mb-20">
            El Proceso Artesanal
          </h2>
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className={`scroll-reveal opacity-0 transition-all duration-700 flex flex-col ${idx % 2 === 0 ? 'md:flex-row translate-x-[-40px]' : 'md:flex-row-reverse translate-x-[40px]'} gap-8 items-center mb-20`}
            >
              <div className="flex-1">
                <img src={step.image} alt={step.title} className="w-full h-80 object-cover rounded-sm shadow-lg" />
              </div>
              <div className="flex-1">
                <div className="text-6xl font-serif text-gold-300 mb-2">0{step.id}</div>
                <h3 className="text-3xl font-serif text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 font-light leading-loose">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl font-serif text-center text-gold-200 mb-20">
            Nuestra Historia
          </h2>
          <div className="relative border-l-2 border-gold-600 pl-8 space-y-16">
            {HISTORY_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="scroll-reveal opacity-0 translate-x-[-40px] transition-all duration-700 relative"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute w-4 h-4 bg-gold-600 rounded-full -left-[2.6rem] top-2"></div>
                <div className="text-5xl font-serif text-gold-400 mb-2">{milestone.year}</div>
                <h3 className="text-2xl font-serif mb-3">{milestone.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white text-center">
        <div className="scroll-reveal opacity-0 scale-95 transition-all duration-700 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-gold-200 mb-6">¿Listo para la Experiencia?</h2>
          <p className="text-stone-400 font-light mb-10 leading-relaxed">
            Cada par es una obra de arte. Agenda tu cita privada y descubre la diferencia.
          </p>
          <button className="px-12 py-4 bg-gold-600 hover:bg-gold-500 text-white font-serif tracking-widest text-sm uppercase rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Agendar Cita
          </button>
        </div>
      </section>
    </div>
  );
}
