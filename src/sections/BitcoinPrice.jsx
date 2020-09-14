import React, { PureComponent } from "react";

class BitcoinPrice extends PureComponent {
  state = { bpi: {} };

  renderBitcoinPrice = () => {
    const { bpi } = this.props;
    const currency = this.state.selected || this.props.defaultBPI;
    if (currency) {
      return (
        <div>
          <div key={currency}>
            1 BTC is {bpi[currency].rate}
            <span> {currency}</span>
          </div>
        </div>
      );
    }
  };

  renderButtons = () => {
    const { bpi } = this.props;
    const currencies = Object.keys(bpi);
    return currencies.map(currency => (
      <button
        key={currency}
        onClick={e => this.setState({ selected: currency })}
      >
        {currency}
      </button>
    ));
  };

  render() {
    return (
      <React.StrictMode>
        <div>
          <h4>Price Bitcoin</h4>
          <div>
            {this.renderButtons()}
            {this.renderBitcoinPrice()}
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default BitcoinPrice;
