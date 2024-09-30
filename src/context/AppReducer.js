export default (state, action) => {
    switch(action.type) {
<<<<<<< HEAD
        default:
            return state;
=======
        case 'DELETE_TRANSACTION':
            state.transactions = state.transactions.filter(transaction => transaction.id !==
                action.payload); 
            return {
                ...state,
            }
        case 'ISOLATE_TRANSACTION':
            state.transactions = state.transactions.filter(transaction => transaction.id ===
                action.payload);
            return {
                ...state
            }

        case 'DUPLICATE_TRANSACTION':
            
        const transactionToDuplicate = state.transactions.find(transaction => transaction.id === action.payload);
       
        const duplicatedTransaction = {
            ...transactionToDuplicate,
            id: Math.random() 
        };

        return {
            ...state,
            transactions: [...state.transactions, duplicatedTransaction]
        };
>>>>>>> 0890680 (added functionalities)
    }
}