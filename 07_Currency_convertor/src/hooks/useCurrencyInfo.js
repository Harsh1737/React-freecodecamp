//First element is the stateful value and the second element is a function reference to update it.
//Custom Hooks can also return objects, functions, or objects (with functions.)
//Generally returns js not jsx.
//can use built-in hooks in custom hooks

// React query is a library that helps you fetch data in your react app. 
// It provides hooks to fetch data and cache it. 
// It automatically manages the cache and updates the data when it changes. 
//It also provides a way to invalidate the cache and refetch the data. and makes it in json format and also provides error handling.


/*I want to do an api call to get the currency info data
    Way-1 fetch call directly in the function
    Way-2 Only when it is used or when hook is loaded
    But to make api call only when component is mounted (or unmounted), when component lifecycle events are triggered, we use useEffect hook
    Automatic fetch call, no need to make another fun inside so that now the useCurrencyInfo is called ,once more to call the fetch function
*/

import { useState, useEffect } from 'react'

function useCurrencyInfo( currency )
{   // compulsary argument in this hook but can be optional

    const [ data, setData ] =useState({})   // {} to store the initial value and loop incase of failure

    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then(res => res.json())    // to convert the data into json format
        .then((res) => setData(res[currency]))    // to hold the data, state is used because it is a dynamic value and it will change when the data is fetched
        console.log(data)
        }, [currency] )    // to make the api call only when the currency is changed, so that the data is fetched only when the currency is changed

    return data;
    //return setData;
    //return [];
    //return [ data, setData ];   //how will u take currency access, in this case its wrong

}
export default useCurrencyInfo; //to export the function
//export { useCurrencyInfo };   //if we want to export multiple functions
//export default useCurrencyInfo;   //if we want to export only one function

// here we designed a function and returned thhe function, so that we can use it in other components

