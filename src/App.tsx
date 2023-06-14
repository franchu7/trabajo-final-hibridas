import { IonButton, IonContent, IonList, IonPage, setupIonicReact } from '@ionic/react'
import { ReactElement, useState } from 'react'

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
import Header from './components/Header'
import AmountInput from './components/AmountInput'
import PeopleInput from './components/PeopleInput'
import TipPercentage from './components/TipPercentage'

setupIonicReact()

/**
 * Componente principal de la aplicación
 * Calculadora para obtener el importe total por persona de una cuenta incluida la propina
 * @returns {ReactElement} Componente principal
 */
const App: React.FC = (): ReactElement => {
  /* Estado de la aplicación (
    * totalAmount: Importe total de la cuenta
    * numberOfPeople: Número de comensales
    * tipPercentage: Porcentaje de propina
    * amountPerPerson: Importe por persona
  ) */
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1)
  const [tipPercentage, setTipPercentage] = useState<number>(15)
  const [amountPerPerson, setAmountPerPerson] = useState<number>(0)

  /* Función que calcula el importe total por persona */
  const calculateAmountPerPerson = (): number => {
    if (totalAmount === 0 || numberOfPeople === 0) return 0
    const totalWithTip = (totalAmount * tipPercentage) / 100 + totalAmount
    return totalWithTip / numberOfPeople
  }

  return (
    <IonPage>
      <Header />
      <IonContent className='ion-padding'>
        <IonList>
          <AmountInput totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
          <PeopleInput numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
          <TipPercentage tipPercentage={tipPercentage} setTipPercentage={setTipPercentage} amountPerPerson={amountPerPerson} />
        </IonList>
        <IonButton expand='full' onClick={() => setAmountPerPerson(calculateAmountPerPerson())}>
          Calcular
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default App
