import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Cómo uso la app?",
    answer: "Si quieres viajar, simplemente ingresa tu ruta y horario, encuentra compañeros de viaje y comparte el taxi. Si eres un conductor que quiere hacer carpool, ingresa tu ruta y horario, y espera a que los usuarios se unan a tu viaje.",
  },
  {
    question: "¿Qué requisitos hay para usar la app?",
    answer: "Por el momento, el único requisito que necesitas es ser parte de la comunidad PUCP pues necesitas usar el correo institucional para registrarte. Próximamente nos expanderemos a otras universidades e institutos.",
  },
  {
    question: "¿Cuánto cuesta usar la app?",
    answer: "La app es completamente gratis por ahora.",
  },
  {
    question: "¿Cómo se definen los precios del viaje?",
    answer: "Los precios del viaje se coordinan en el chat grupal de una sala. Nosotros recomendamos que en una sala de carpool el conductor defina un precio justo y en una sala que comparte taxi el precio se divida equitativamente entre todos los usuarios.",
  },
  {
    question: "¿Cómo elimino mi cuenta?",
    answer: "Para solicitar la eliminación de tu cuenta, envía un correo electrónico a enruta.revision@gmail.com con el asunto \"Eliminar cuenta\" y desde el correo asociado a tu cuenta en EnRuta.\nAl eliminar tu cuenta, los siguientes datos serán eliminados de manera permanente:\nNombre de usuario\nDirección de correo electrónico\nHistorial de rutas\n\nPodemos conservar ciertos datos durante un periodo adicional si son necesarios para cumplir obligaciones legales o resolver disputas. Estos datos se eliminarán automáticamente una vez finalizado el periodo de retención obligatorio.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingRight: 50,
      paddingLeft: 50,
      marginBottom: 100,
    }}>
      <h2 className="text-3xl font-bold mb-6 text-center" style={{
          color: "black",
          fontSize: "48px",
          marginBottom: "24px",
          alignSelf: "center",

      }}>Preguntas Frecuentes</h2>
      <div className="space-y-4" style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "100%",
          maxWidth: "1280px",
        }}>
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4" style={{
            width: "100%",
          }}> 
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingRight: 20,
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                border: "none",
                borderRadius: 10,
                cursor: "pointer"
              }}
            >
              <div className="font-semibold" style={{
                fontSize: 16,
                textAlign: "left"
              }}>{faq.question}</div>
              <div >{activeIndex === index ? '-' : '+'}</div>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

