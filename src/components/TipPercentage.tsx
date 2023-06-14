import { IonRadioGroup, IonList, IonItem, IonLabel, IonRadio, IonRange } from '@ionic/react'
import { ReactElement } from 'react'

interface TipPercentageProps {
  tipPercentage: number
  setTipPercentage: (amount: number) => void
  amountPerPerson: number
}

/**
 * Componente que muestra el porcentaje de propina a elegir
 * @param props  Porcentaje de propina, función para actualizar el porcentaje de propina y el importe por persona
 * @returns {ReactElement} Componente que muestra el porcentaje de propina a elegir
 */
const TipPercentage: React.FC<TipPercentageProps> = ({ tipPercentage, setTipPercentage, amountPerPerson }): ReactElement => {
  return (
    <IonRadioGroup value={tipPercentage} onIonChange={(e) => setTipPercentage(parseInt(e.detail.value!, 10))}>
      <IonList>
        <IonItem>
          <IonLabel>Porcentaje de Propina ({tipPercentage}%)</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>15%</IonLabel>
          <IonRadio slot='start' value={15} />
        </IonItem>
        <IonItem>
          <IonLabel>20%</IonLabel>
          <IonRadio slot='start' value={20} />
        </IonItem>
        <IonItem>
          <IonLabel>25%</IonLabel>
          <IonRadio slot='start' value={25} />
        </IonItem>
        <IonItem>
          <IonRange
            min={0}
            max={100}
            step={1}
            snaps={true}
            value={tipPercentage}
            onIonChange={(e) => setTipPercentage(parseInt(e.detail.value as unknown as string, 10))}
          >
            <IonLabel slot='start'>0%</IonLabel>
            <IonLabel slot='end'>100%</IonLabel>
          </IonRange>
        </IonItem>
        <IonItem className='ion-padding-horizontal' color={'success'}>
          <IonLabel className='amount-per-person'>Importe por comensal: $ {amountPerPerson.toFixed(2)}</IonLabel>
        </IonItem>
      </IonList>
    </IonRadioGroup>
  )
}

export default TipPercentage
