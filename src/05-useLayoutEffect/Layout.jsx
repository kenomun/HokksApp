import { useCounter, usefetch } from '../hooks'
import { LoadingQuotes } from '../03-examples/LoadingQuotes';
import { Quotes } from '../03-examples/quotes';


export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = usefetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad quotes</h1>
        <hr />

        {
            (isLoading)
            ? <LoadingQuotes/>
            : <Quotes quote={ quote } author={ author }/>
        }

        <button className="btn btn-primary" disabled={ isLoading } onClick={ () => increment(1) }>Next quote</button>

    </>
  )
}