import React, { useState } from "react";

const defaultDetails = [
  {
    preference: 1,
    optionId: "011",
    name: "Capsule",
  },
  {
    preference: 2,
    optionId: "021",
    name: "Single origin",
  },
  {
    preference: 3,
    optionId: "031",
    name: "Capsule",
  },
  {
    preference: 4,
    optionId: "041",
    name: "Wholebean",
  },
  {
    preference: 5,
    optionId: "051",
    name: "Every weeke",
  },
];

const CartContext = React.createContext({
  details: [],
  updateDetail: (detail) => {},
});

export const CartContextProvider = (props) => {
  const [detailsList, setDetailsList] = useState(defaultDetails);

  const updateDetailHandler = (detail) => {
    const existingDetailIndex = detailsList.findIndex(
      (item) => item.preference === detail.preference
    );

    const existingDetailItem = detailsList[existingDetailIndex];

    
    let updatedDetails = [...detailsList];
    const updatedDetail = {
      ...existingDetailItem,
      optionId: detail.id,
      name: detail.name,
    };

    updatedDetails[existingDetailIndex] = updatedDetail;

    setDetailsList(updatedDetails);
  };

  const cartContext = {
    details: detailsList,
    updateDetail: updateDetailHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
