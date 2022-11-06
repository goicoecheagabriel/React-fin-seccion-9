import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from '../03-examples/components/LoadingQuote'
import Quote from '../03-examples/components/Quote'

export const Layout = () => {
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
        <br />
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
