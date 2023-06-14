import React, { ReactElement } from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

/**
 * Componente que muestra el título de la aplicación
 * @returns {ReactElement} Componente que muestra el título de la aplicación 
 */
const Header: React.FC = (): ReactElement => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Calculadora de Propinas</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
