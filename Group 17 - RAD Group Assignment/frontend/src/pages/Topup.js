import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

//components
import TopupSale from "../components/TopupSale";

const Topup = () => {
  const [topups, setTopups] = useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopupoffers = async () => {
      const response = await fetch("/topups");
      //console.log(response);
      const json = await response.json();

      if (response.ok) {
        setTopups(json);
      }
    };

    fetchTopupoffers();
  }, []);

  const handleClick = async () => {
    navigate("/topups/add");
  };

  return (
    <div className="home">
      <h1>Top-ups</h1>
      {user && (
        <button onClick={handleClick} id="btn-order">
          Become a Seller
        </button>
      )}
      <div className="topup-sales">
        {topups &&
          topups.map((topup) => <TopupSale key={topup._id} topup={topup} />)}
      </div>
    </div>
  );
};

export default Topup;
