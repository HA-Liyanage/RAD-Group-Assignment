import { useEffect } from "react";
import { useAccountsContext } from "../hooks/useAccountsContext";
//import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import AccountDashboardItems from "../components/AccountDashboardItems";

const AccountDashboard = () => {
  const { accounts, dispatch } = useAccountsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await fetch("/accounts/dashboard", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ACCOUNTS", payload: json });
      }
    };

    if (user) {
      fetchAccounts();
    }
  }, [user]);

  return (
    <div className="home">
      <div className="rankups">
        <br />
        <br />
        <br />
        {accounts &&
          accounts.map((account) => (
            <AccountDashboardItems key={account._id} account={account} />
          ))}
      </div>
    </div>
  );
};

export default AccountDashboard;
