import React from "react";
import '../styles/styles.css';

/* localStorage.removeItem('TODOS_V1');

const defaultTodos = [
  { text: 'conseguir chamba de 20 horas al día', completed: false},
  { text: 'comerse un planeta', completed: false},
  { text: 'comprar 20 empresas', completed: false},
  { text: 'mirar directamente al sol por un día', completed: false},
  {text: 'ganarle en una pelea a Dios', completed: false},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
    
                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
    };

    return {item, saveItem, loading, error};
}

export { useLocalStorage };