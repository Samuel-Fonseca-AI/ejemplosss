import React from 'react';
import { Star, Truck, Shield, Clock } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Oxford Clásico",
    price: "$450",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Derby Ejecutivo",
    price: "$420",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Loafer Premium",
    price: "$380",
    image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Brogue Elegante",
    price: "$460",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600"
  },
];

const FEATURES = [
  { icon: Star, text: "100 años de tradición artesanal" },
  { icon: Truck, text: "Envío gratis en 24-48h" },
  { icon: Shield, text: "Garantía de por vida" },
  { icon: Clock, text: "Devolución en 30 días" },
];

export function StaticSide() {
  return (
    <div className="bg-white">
      <section className="px-8 py-16 bg-black text-white text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight mb-3">ELEGANCIA ROMANO</h1>
        <p className="text-gray-400 text-lg">CALZADO DE LUJO DESDE 1924</p>
      </section>

      <section className="px-8 py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-2">
              <feature.icon size={32} className="text-black" />
              <p className="text-xs font-medium text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">CATÁLOGO</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-black mb-4">{product.price}</p>
                <button className="w-full py-3 bg-black text-white font-bold uppercase text-sm tracking-wide hover:bg-gray-800 transition-colors">
                  COMPRAR AHORA
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-tight">¿POR QUÉ ELEGIRNOS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">CUERO PREMIUM</h3>
              <p className="text-sm text-gray-600">Solo el 10% superior de cueros europeos</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">HECHO A MANO</h3>
              <p className="text-sm text-gray-600">Cada par requiere 40 horas de trabajo</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">DURABILIDAD</h3>
              <p className="text-sm text-gray-600">Construcción Goodyear resolable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4 uppercase">OFERTAS EXCLUSIVAS</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Suscríbete y recibe 10% de descuento en tu primera compra
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 bg-white text-black border-none outline-none"
          />
          <button className="px-8 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-gray-200 transition-colors">
            ENVIAR
          </button>
        </div>
      </section>

      <footer className="px-8 py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2024 Elegancia Romano. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
