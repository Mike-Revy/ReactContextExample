import React from "react";

// const { Provider, Consumer } = React.createContext();
const Store = React.createContext();

export function Parent(props) {
  const obj = { text: "random text" };
  return <Store.Provider value={obj}>{props.children}</Store.Provider>;
}
export function Child() {
  const hook = React.useContext(Store);
  // return <Consumer>{(text) => <div>{text}</div>}</Consumer>;
  return <div>{hook.text}</div>;
}
