import { useAccountsContext } from "../hooks/useAccountsContext";
import { Link } from "react-router-dom";

const AccountDetails = ({ account }) => {
  const { dispatch } = useAccountsContext();

  const handleClick = async () => {
    const response = await fetch("/api/accounts/" + account._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ACCOUNT", payload: json });
    }
  };

  //new
  /* const handleClick_edit = async() => {
        const response = await fetch('/api/accounts/' + account._id, {
            method: 'PATCH'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'UPDATE_ACCOUNT', payload:json})
        }
    }
 */
  return (
    <div className="account-details">
      <div className="row">
        <div className="column">
          <h4>{account.game_name}</h4>
          <p>
            <strong>Username: </strong>
            {account.acc_user_name}
          </p>
          <p>
            <strong>Price: </strong>
            {account.sale_price}
          </p>
          <p>
            <strong>Duration: </strong>
            {account.offer_standing_duration}
          </p>
          <p>
            <strong>Insurance: </strong>
            {account.offer_insurance}
          </p>
          <p>
            <strong>Description: </strong>
            {account.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
