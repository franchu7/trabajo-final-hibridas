import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react'
import { useState } from 'react'

/* CSS principal requerido para que los componentes de Ionic funcionen correctamente */
import '@ionic/react/css/core.css'

/* CSS básico para aplicaciones construidas con Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Utilidades CSS opcionales que se pueden comentar */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Variables del tema */
import './theme/variables.css'
import './App.css'

setupIonicReact()

const App: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1)
  const [tipPercentage, setTipPercentage] = useState<number>(15)
  const [amountPerPerson, setAmountPerPerson] = useState<number>(0)

  const calculateAmountPerPerson = (): number => {
    if (totalAmount === 0 || numberOfPeople === 0) return 0
    const totalWithTip = totalAmount * tipPercentage / 100 + totalAmount
    return totalWithTip / numberOfPeople
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora de Propinas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel position='stacked'>Importe total de la cuenta</IonLabel>
            <IonInput
              type='number'
              min={0}
              value={totalAmount}
              onIonChange={(e) => setTotalAmount(Math.abs(parseInt(e.detail.value!, 10)))}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Número de comensales</IonLabel>
            <IonInput
              type='number'
              min={1}
              value={numberOfPeople}
              onIonChange={(e) => setNumberOfPeople(Math.abs(parseInt(e.detail.value!, 10)))}
            ></IonInput>
          </IonItem>
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
        </IonList>
        <IonButton expand='full' onClick={() => setAmountPerPerson(calculateAmountPerPerson())}>
          Calcular
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default App
