import { useEffect } from "react";
import { useAccountsContext } from "../hooks/useAccountsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

//components
import AccountDetails from "../components/AccountDetails";

const Account = () => {
  const { accounts, dispatch } = useAccountsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await fetch("/accounts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ACCOUNTS", payload: json });
      }
    };

    fetchAccounts();
  }, []);

  const handleClick = async () => {
    navigate("/accounts/add");
  };

  return (
    <div className="home">
      <h1>Accounts</h1>
      {user && (
        <button onClick={handleClick} id="btn-order">
          Become a Seller
        </button>
      )}
      <div className="accounts">
        {accounts &&
          accounts.map((account) => (
            <AccountDetails key={account._id} account={account} />
          ))}
      </div>
    </div>
  );
};

export default Account;
