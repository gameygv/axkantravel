import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — Axkan Travel | Disfruta Chiapas",
  description:
    "Aviso de privacidad de Disfruta Chiapas conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function PrivacidadPage() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            En <strong>Disfruta Chiapas</strong>, con domicilio en Álvaro
            Obregón 2, Sta Lucía, 29250 San Cristóbal de las Casas, Chiapas,
            y correo electrónico de contacto{" "}
            <a
              href="mailto:ventas@disfrutachiapas.com"
              className="text-primary hover:underline"
            >
              ventas@disfrutachiapas.com
            </a>
            , somos responsables del uso y protección de sus datos personales,
            conforme a la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">
            Datos que Recopilamos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Los datos que proporcione en nuestros formularios (nombre,
            teléfono, correo electrónico, ciudad de origen y mensaje) serán
            utilizados exclusivamente para brindarle información, cotizaciones
            o servicios turísticos relacionados con nuestros paquetes.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">
            Uso de la Información
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Responder solicitudes de cotización e información</li>
            <li>Enviar información sobre paquetes turísticos y promociones</li>
            <li>Brindar atención al cliente antes y durante el viaje</li>
            <li>Mejorar nuestros servicios</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-3">
            Compartición de Datos
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            No compartimos su información con terceros ajenos al Corporativo
            Axkan. Los datos proporcionados se mantienen dentro de nuestra
            organización y se utilizan exclusivamente para los fines descritos
            en este aviso.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Derechos ARCO</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Usted puede ejercer en cualquier momento sus derechos de Acceso,
            Rectificación, Cancelación u Oposición (ARCO) enviando un correo
            a{" "}
            <a
              href="mailto:ventas@disfrutachiapas.com"
              className="text-primary hover:underline"
            >
              ventas@disfrutachiapas.com
            </a>
            .
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Consentimiento</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Al enviar sus datos a través de cualquiera de nuestros
            formularios, usted acepta el tratamiento de la información
            conforme a este aviso de privacidad.
          </p>

          <p className="text-sm text-gray-400 mt-12">
            Última actualización: Abril 2026
          </p>
        </div>
      </div>
    </section>
  );
}
