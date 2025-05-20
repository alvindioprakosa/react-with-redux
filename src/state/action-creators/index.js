export const depositMoney = (amount) => (dispatch) => {
  if (typeof amount !== "number" || amount <= 0) {
    console.error("Invalid deposit amount");
    return;
  }
  dispatch({
    type: "deposit",
    payload: amount,
  });
};

export const withdrawMoney = (amount) => (dispatch) => {
  if (typeof amount !== "number" || amount <= 0) {
    console.error("Invalid withdrawal amount");
    return;
  }
  dispatch({
    type: "withdraw",
    payload: amount,
  });
};
