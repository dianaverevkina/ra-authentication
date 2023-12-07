import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../Button";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  console.log(error)

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-message">
          <b>{error.status || ''} </b>
          <i>{error.statusText || error.message}</i>
        </p>
        <Button onClick={handleClick}>Back</Button>
      </div>
    </div>
  );
}