import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from './components/LoadingQuote';
import Quote from './components/Quote';

export const MultipleCustomHooks = () => {
    const { increment, decrement, counter } = useCounter(1);

    const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote, author } = !!data && data[0];


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading 
            ? ( <LoadingQuote /> ) 
            : ( <Quote quote={ quote } author={ author } /> )
        }

        <button 
            onClick={ () => increment() }
            disabled={ isLoading }
            className="btn btn-primary">
            Next quote
        </button>

        <button 
            onClick={ () => decrement() }
            disabled={ isLoading }
            className="btn btn-primary">
            Previus quote
        </button>
    </>
  )
}
