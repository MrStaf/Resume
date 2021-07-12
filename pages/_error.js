import Header from "../components/header";

function Error({ statusCode }) {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <div className="flex items-center justify-center h-full">
                <p>
                    {statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
                </p>
            </div>
        </div>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error