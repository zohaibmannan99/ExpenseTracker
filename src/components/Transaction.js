import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);

  const { isolateTransaction } = useContext(GlobalContext);

  const {duplicateTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        <button onClick={() => isolateTransaction(transaction.id)} className='isolate-btn'>i</button>
        <button onClick={() => duplicateTransaction(transaction.id)} className='duplicate-btn'>c</button>
    </li> 
  )
}

export default Transaction
