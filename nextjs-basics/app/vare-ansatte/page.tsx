import React from 'react'
import Konsulenter from '../components/konsulenter.component'
import { KonsulentData } from '@/ovelser/ressurser/konsulenter/konsulenter.data'

export default function VareAnsatte() {
  return (
    <div className='container mx-auto px-4'>
        <h1>Våre ansatte</h1>
        <Konsulenter itemLink='/vare-ansatte' konsulenter={KonsulentData} />
    </div>
  )
}
