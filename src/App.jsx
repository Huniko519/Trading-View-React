import { AdvancedChart } from "react-tradingview-embed";

export default function App() {
  return (
    <>
      <h1> Trading View </h1>
      <AdvancedChart widgetProps={{"theme": "dark"}} />;
    </>
  );
}
