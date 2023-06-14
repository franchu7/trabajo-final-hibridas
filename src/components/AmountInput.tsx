import React, { ReactElement } from 'react'
import { IonItem, IonLabel, IonInput } from '@ionic/react'

interface AmountInputProps {
  totalAmount: number
  setTotalAmount: (amount: number) => void
}

/**
 * Componente para establecer el importe total de la cuenta
 * @param props Importe total de la cuenta y función para actualizar el importe total de la cuenta
 * @returns {ReactElement} Componente para elegir el importe total de la cuenta
 */
const AmountInput: React.FC<AmountInputProps> = ({ totalAmount, setTotalAmount }): ReactElement => {
  return (
    <IonItem>
      <IonLabel position='stacked'>Importe total de la cuenta</IonLabel>
      <IonInput type='number' min={0} value={totalAmount} onIonChange={(e) => setTotalAmount(Math.abs(parseInt(e.detail.value!, 10)))}></IonInput>
    </IonItem>
  )
}

export default AmountInput
