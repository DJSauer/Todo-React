import "../styles/globals.css";
import TodosContextProvider from "../context/todos-context";

function MyApp({ Component, pageProps }) {
  return (
    <TodosContextProvider>
      <Component {...pageProps} />
    </TodosContextProvider>
  );
}

export default MyApp;
