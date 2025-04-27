import React from 'react';

const Nosotros = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Nosotros</h2>
      <p style={styles.description}>
        EnRuta nació como una iniciativa independiente para conectar a los miembros de la comunidad PUCP a través de viajes compartidos. Nuestro objetivo es ofrecer una plataforma segura, eficiente y sencilla para coordinar trayectos diarios dentro de Lima.
      </p>

      <div style={styles.creatorsContainer}>
        <div style={styles.creatorCard}>
          <img 
            src="./assets/mauricio.jpg" 
            alt="Creador 1" 
            style={styles.image}
          />
          <h3 style={styles.name}>Mauricio Arenales - CEO</h3>
          <p style={styles.bio}>
            Estudiante de Ingeniería Informática que es un usuario recurrente de servicios de carpool y apasionado por desarrollar una solución para toda la comunidad.
          </p>
        </div>

        <div style={styles.creatorCard}>
          <img 
            src="./assets/gino.jpg" 
            alt="Creador 2" 
            style={styles.image}
          />
          <h3 style={styles.name}>Gino Llano - CTO</h3>
          <p style={styles.bio}>
            Estudiante de Ingeniería Informática apasionado por la creación de apps que tengan un impacto positivo en la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '50px',
    color: '#555',
    textAlign: "left"
  },
  creatorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  creatorCard: {
    width: '300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  bio: {
    fontSize: '16px',
    color: '#666',
    textAlign: "left"
  }
};

export default Nosotros;
