import { IonItem, IonLabel, IonInput } from '@ionic/react'
import { ReactElement } from 'react'

interface AmountInputProps {
  numberOfPeople: number
  setNumberOfPeople: (amount: number) => void
}

/**
 * Componente para establecer el número de comensales
 * @param props Número de comensales y función para actualizar el número de comensales  
 * @returns {ReactElement} Componente para elegir el número de comensales 
 */
const PeopleInput: React.FC<AmountInputProps> = ({ numberOfPeople, setNumberOfPeople }): ReactElement => {
  return (
    <IonItem>
      <IonLabel position='stacked'>Número de comensales</IonLabel>
      <IonInput
        type='number'
        min={1}
        value={numberOfPeople}
        onIonChange={(e) => setNumberOfPeople(Math.abs(parseInt(e.detail.value!, 10)))}
      ></IonInput>
    </IonItem>
  )
}

export default PeopleInput
