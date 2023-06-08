export const fetchRandomGreeting = () => {
  return (dispatch) => {
    fetch("/greetings/random")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRandomGreeting(data.greeting));
      });
  };
};

export const setRandomGreeting = (greeting) => {
  return {
    type: "SET_RANDOM_GREETING",
    greeting,
  };
};
