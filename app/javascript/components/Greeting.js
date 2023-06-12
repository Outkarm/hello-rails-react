import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "../redux/slices/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);
  const loading = useSelector((state) => state.greeting.loading);
  const error = useSelector((state) => state.greeting.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div>{greeting.greeting}</div>;
};

export default Greeting;
