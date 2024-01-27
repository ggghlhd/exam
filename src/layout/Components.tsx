import React, { Component } from "react";
interface ComponentsState {
  priceFirst: number;
  priceSecond: number;
  priceThird: number;
  uaCoefficient: number;
  bucksCoefficient: number;
  zlCoefficient: number;
  currency: string;
  total: number;
}

class Components extends Component<{}, ComponentsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      priceFirst: 750,
      priceSecond: 850,
      priceThird: 1250,
      uaCoefficient: 41,
      zlCoefficient: 4,
      bucksCoefficient: 1.09,
      currency: "€",
      total: 2850,
    };
  }
  UkrHryvnaChanger() {
    let totalPrice =
      (this.state.priceFirst + this.state.priceSecond + this.state.priceThird) *
      this.state.uaCoefficient;
    this.setState({
      priceFirst: 750 * this.state.uaCoefficient,
      priceSecond: 850 * this.state.uaCoefficient,
      priceThird: 1250 * this.state.uaCoefficient,
      currency: "₴",
      total: totalPrice,
    });
  }
  EuroChanger() {
    let totalPrice = 2850;

    this.setState({
      priceFirst: 750,
      priceSecond: 850,
      priceThird: 1250,
      currency: "€",
      total: totalPrice,
    });
  }
  ZlotyChanger() {
    let totalPrice =
      (this.state.priceFirst + this.state.priceSecond + this.state.priceThird) *
      this.state.zlCoefficient;
    this.setState({
      priceFirst: 750 * this.state.zlCoefficient,
      priceSecond: 850 * this.state.zlCoefficient,
      priceThird: 1250 * this.state.zlCoefficient,
      currency: "zł",
      total: totalPrice,
    });
  }
  BucksChanger() {
    let totalPrice =
      (this.state.priceFirst + this.state.priceSecond + this.state.priceThird) *
      this.state.bucksCoefficient;
    this.setState({
      priceFirst: +(750 * this.state.bucksCoefficient).toFixed(2),
      priceSecond: +(850 * this.state.bucksCoefficient).toFixed(2),
      priceThird: +(1250 * this.state.bucksCoefficient).toFixed(2),
      currency: "$",
      total: +totalPrice.toFixed(2),
    });
  }

  render() {
    return (
      <>
        <div style={{ display: "flex", width: "160px", gap: "1px" }}>
          {" "}
          <button onClick={() => this.EuroChanger()}>EU</button>
          <button onClick={() => this.BucksChanger()}>US</button>
          <button onClick={() => this.ZlotyChanger()}>ZŁ</button>
          <button onClick={() => this.UkrHryvnaChanger()}>UAH</button>
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>iPhone 12</h2>
            this is iPhone 12
            <div>
              {this.state.priceFirst}
              {this.state.currency}
            </div>
            <button>Buy</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>iPhone 12</h2>
            this is iPhone 8
            <div>
              {this.state.priceSecond}
              {this.state.currency}
            </div>
            <button>Buy</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>iPhone 12</h2>
            this is iPhone X
            <div>
              {this.state.priceThird}
              {this.state.currency}
            </div>
            <button>Buy</button>
          </div>
        </div>

        <p>
          total:{this.state.total}
          {this.state.currency}
        </p>
      </>
    );
  }
}

export default Components;
