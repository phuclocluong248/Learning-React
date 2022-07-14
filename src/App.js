import logo from './logo.svg';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> APP BAN HANG</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body class="App-body">
        <Card color="#FF6663" title="Product"/>
        <Card color="#58B3FF" title="Sell"/>
        <Card color="#FFD52E" title="Purchase"/>
        <Card color="#49DD8E" title="Stock"/>
        <Card color="#FF6663" title="Client"/>
        <Card color="#58B3FF" title="Shipping"/>
        <Card color="#FFD52E" title="Profit"/>
        <Card color="#49DD8E" title="Supplier"/>
        <Card color="#FF6663" title="Material"/>
        <Card color="#58B3FF" title="Order"/>
        <Card color="#FFD52E" title="Employee"/>
        <Card color="#49DD8E" title="Setting"/>

      </body>
    </div>
  );
}

export default App;
