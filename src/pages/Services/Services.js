import React from 'react';

function TermsAndConditions({ volver }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📜 Términos y Condiciones</h1>
      <div style={styles.scroll}>
        <p style={styles.date}>Última actualización: 07 de abril de 2025</p>
        <p style={styles.email}>📧 enruta.equipo@gmail.com</p>

        <Subtitulo>1. Objeto</Subtitulo>
        <Parrafo>
          El presente documento establece las condiciones generales que rigen el uso de la plataforma digital EnRuta (en adelante, la “Aplicación”), desarrollada para facilitar la coordinación de viajes compartidos entre miembros de la comunidad de la Pontificia Universidad Católica del Perú (PUCP), dentro de la ciudad de Lima, Perú.
        </Parrafo>
        <Parrafo>
          La Aplicación permite crear salas de coordinación para organizar desplazamientos hacia o desde puntos previamente establecidos en cada distrito. EnRuta no presta servicios de transporte, ni intermedia en el pago de traslados.
        </Parrafo>

        <Subtitulo>2. Definiciones</Subtitulo>
        <Parrafo>
          <strong>Usuario:</strong> Persona natural que cuente con una dirección de correo institucional @pucp.edu.pe, lo cual acredita su pertenencia a la comunidad PUCP, sin importar su condición actual (alumno, egresado, docente, personal administrativo, etc.).
        </Parrafo>
        <Parrafo>
          <strong>Conductor:</strong> Usuario que dispone de un vehículo propio y se ofrece a transportar a otros usuarios, pudiendo solicitar una contribución económica para cubrir gastos de desplazamiento.
        </Parrafo>
        <Parrafo>
          <strong>Pasajero:</strong> Usuario que se une a una sala para compartir un trayecto, ya sea en vehículo de un conductor o mediante acuerdo grupal para utilizar un taxi externo.
        </Parrafo>
        <Parrafo>
          <strong>Sala de Coordinación:</strong> Espacio virtual de conversación en la Aplicación, en el cual un grupo de usuarios acuerda un punto de encuentro, destino, hora y modalidad de viaje.
        </Parrafo>

        <Subtitulo>3. Naturaleza del servicio</Subtitulo>
        <Parrafo>
          EnRuta actúa como una plataforma de organización y coincidencia de trayectos, y no como proveedor de transporte. La Aplicación no organiza, ejecuta, supervisa ni se responsabiliza por los viajes que acuerdan los usuarios.
        </Parrafo>
        <Parrafo>
          Los pagos acordados entre usuarios tienen un carácter estrictamente voluntario y se entienden como contribuciones para compartir gastos operativos (combustible, peaje, etc.). EnRuta no percibe comisión ni beneficio económico de tales acuerdos.
        </Parrafo>

        <Subtitulo>4. Registro y acceso</Subtitulo>
        <Parrafo>
          El acceso está restringido a usuarios que cuenten con una dirección de correo @pucp.edu.pe, validada al momento del registro. Se recopilan datos básicos como nombre, correo institucional, teléfono y código universitario.
        </Parrafo>
        <Parrafo>
          El usuario se compromete a proporcionar información verídica y mantener la confidencialidad de sus credenciales.
        </Parrafo>

        <Subtitulo>5. Reglas de uso</Subtitulo>
        <Parrafo>Los usuarios se comprometen a:</Parrafo>
        <Parrafo>• Utilizar la Aplicación únicamente con fines personales y dentro del marco de respeto a la comunidad PUCP.</Parrafo>
        <Parrafo>• No publicar ni difundir contenido ilegal, violento, discriminatorio o que atente contra derechos de terceros.</Parrafo>
        <Parrafo>• Respetar los compromisos asumidos en las salas de coordinación.</Parrafo>

        <Parrafo>Está prohibido:</Parrafo>
        <Parrafo>• Crear múltiples cuentas con fines fraudulentos.</Parrafo>
        <Parrafo>• Usurpar identidades ajenas.</Parrafo>
        <Parrafo>• Utilizar la plataforma para fines comerciales o ajenos a su propósito.</Parrafo>

        <Subtitulo>6. Limitación de responsabilidad</Subtitulo>
        <Parrafo>EnRuta y su equipo desarrollador no se responsabilizan por:</Parrafo>
        <Parrafo>• La puntualidad, asistencia o cumplimiento del viaje por parte de los usuarios.</Parrafo>
        <Parrafo>• La seguridad, calidad o ejecución del viaje.</Parrafo>
        <Parrafo>• Los acuerdos económicos entre usuarios.</Parrafo>
        <Parrafo>• El contenido compartido en salas por los participantes.</Parrafo>
        <Parrafo>
          No obstante, EnRuta se compromete a mitigar los incumplimientos y cancelaciones de último minuto mediante la implementación futura de mecanismos de pago por uso del servicio, con el objetivo de fortalecer el compromiso de los usuarios al confirmar un viaje.
        </Parrafo>
        <Parrafo>
          Asimismo, se deja constancia de que la Pontificia Universidad Católica del Perú (PUCP) no guarda ninguna relación con EnRuta ni asume responsabilidad alguna por el uso de la Aplicación, su funcionamiento o cualquier incidente que pudiera derivarse del mismo.
        </Parrafo>

        <Subtitulo>7. Contenido generado por los usuarios</Subtitulo>
        <Parrafo>
          Todo contenido publicado en salas (mensajes, fotos, coordenadas, etc.) es responsabilidad del usuario que lo comparte. EnRuta se reserva el derecho de eliminar contenido que infrinja estas condiciones o sea reportado como inapropiado.
        </Parrafo>

        <Subtitulo>8. Suspensión de cuentas</Subtitulo>
        <Parrafo>EnRuta podrá suspender o cancelar cuentas en caso de:</Parrafo>
        <Parrafo>• Incumplimiento de los presentes términos.</Parrafo>
        <Parrafo>• Conductas abusivas, fraudulentas o reiteradamente denunciadas.</Parrafo>
        <Parrafo>• Uso indebido del sistema.</Parrafo>

        <Subtitulo>9. Propiedad intelectual</Subtitulo>
        <Parrafo>
          Todo el software, diseño, código fuente, nombre comercial, documentación y contenido visual de EnRuta es propiedad exclusiva de su equipo desarrollador independiente. Queda prohibida su reproducción, modificación o redistribución sin autorización expresa. EnRuta no forma parte ni pertenece a la Pontificia Universidad Católica del Perú, y su desarrollo no ha sido financiado ni promovido por dicha institución.
        </Parrafo>

        <Subtitulo>10. No afiliación institucional</Subtitulo>
        <Parrafo>
          EnRuta es una iniciativa independiente desarrollada por miembros de la comunidad estudiantil, sin relación oficial, patrocinio ni aprobación por parte de la Pontificia Universidad Católica del Perú (PUCP).
        </Parrafo>
        <Parrafo>
          El uso del nombre “PUCP” se realiza únicamente con fines descriptivos para señalar el público objetivo de la Aplicación. En ningún caso debe interpretarse como que EnRuta es un producto, servicio o plataforma institucional de la PUCP.
        </Parrafo>
        <Parrafo>
          Cualquier mención a la universidad tiene carácter referencial y no implica vínculo formal alguno.
        </Parrafo>

        <Subtitulo>11. Modificaciones</Subtitulo>
        <Parrafo>
          Estas condiciones pueden ser actualizadas por EnRuta en cualquier momento. Los cambios serán informados a través de la Aplicación, y su aceptación será requisito para el uso continuado del servicio.
        </Parrafo>

        <Subtitulo>12. Tarifa de uso del servicio (futura implementación)</Subtitulo>
        <Parrafo>
          EnRuta podrá implementar una tarifa proporcional al uso del servicio, basada en la distancia estimada del viaje planificado. Este cargo será aplicado a todos los usuarios que confirmen su participación en una sala, independientemente de quién la haya creado. El pago dará acceso a las funciones de organización, coincidencia y planificación de viaje.
        </Parrafo>
        <Parrafo>Esta medida busca:</Parrafo>
        <Parrafo>• Reforzar el compromiso de asistencia.</Parrafo>
        <Parrafo>• Desincentivar cancelaciones de último minuto.</Parrafo>
        <Parrafo>• Financiar mejoras tecnológicas del servicio.</Parrafo>
        <Parrafo>
          La tarifa no guarda relación con el costo del transporte y EnRuta no cobra por traslados ni gestiona pagos entre usuarios.
        </Parrafo>

        <Subtitulo>13. Legislación aplicable</Subtitulo>
        <Parrafo>
          Estos términos se rigen por la legislación peruana. Cualquier controversia será resuelta ante los tribunales competentes de Lima Metropolitana.
        </Parrafo>

        <Subtitulo>14. Contacto</Subtitulo>
        <Parrafo>
          Para consultas, solicitudes o ejercicio de derechos, escribir a: 📧{' '}
          <a style={styles.link} href="mailto:enruta.equipo@gmail.com">
            enruta.equipo@gmail.com
          </a>
        </Parrafo>
      </div>

    </div>
  );
}

function Subtitulo({ children }) {
  return <h2 style={styles.subtitle}>{children}</h2>;
}

function Parrafo({ children }) {
  return <p style={styles.paragraph}>{children}</p>;
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  scroll: {
    // maxHeight: '500px',
    // overflowY: 'auto',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  date: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '5px',
  },
  email: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
  },
};

export default TermsAndConditions;
