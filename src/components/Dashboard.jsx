import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`profile`);
      if (res.data.error) {
        console.log(res.data.error);
      }

      setUsername(res.data.username);
    };
    fetchProfile();
  }, []);

  const signout = async () => {
    try {
      const res = await axios.post(`signout`);
      if (res.data.error) {
        console.log(res.data.error);
      }
      setUsername(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5 h-screen bg-gradient-to-t from-[#c9d6ff] to-white">
      <h1 className="text-3xl font-semibold">Welcome {username}</h1>
      <button
        onClick={signout}
        className="p-3 bg-[#1b2d6a] hover:bg-[#485da4] text-white rounded-lg"
      >
        Signout
      </button>
    </div>
  );
};

export default Dashboard;
