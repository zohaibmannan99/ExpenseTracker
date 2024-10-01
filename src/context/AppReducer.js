export default (state, action) => {
    switch(action.type) {
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


        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

            default:
                return state;
    }
}