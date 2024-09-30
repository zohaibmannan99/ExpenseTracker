import React, {useContext} from 'react';
<<<<<<< HEAD
=======
import Transaction from './Transaction';
>>>>>>> 0890680 (added functionalities)
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
<<<<<<< HEAD
  const context = useContext(GlobalContext);

  console.log(context);
=======
  const {transactions} = useContext(GlobalContext);
  //console.log(transactions);

  
>>>>>>> 0890680 (added functionalities)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
<<<<<<< HEAD
        <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> 
=======
        {transactions.map(transaction => (<Transaction key = {transaction.id} transaction={transaction}/>))}
          
>>>>>>> 0890680 (added functionalities)
      </ul>
      
    </>
  )
}

export default TransactionList
