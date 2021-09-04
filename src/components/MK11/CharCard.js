import React, { Component } from "react";
import characters from "../../json";
import * as _ from "lodash";
import "./styles.css";

export default class CharCard extends Component {
  state = {
    selectedChar: null,
  };

  render() {
    const buttonIcons = {
      u: "U.png",
      d: "D.png",
      f: "F.png",
      b: "B.png",
      one: "1.png",
      two: "2.png",
      three: "3.png",
      four: "4.png",
    };

    const renderComboIcon = (command) => {
      return (
        <img
          src={require(`../../assets/buttons/${buttonIcons[command]}`).default}
        />
      );
    };

    const charCombos = _.get(this.state.selectedChar, "combos");
    const charName = _.get(this.state.selectedChar, "name");

    return this.state.selectedChar ? (
      <div className="selectedCharPage">
        <div className="charSelectName">
          <h1>{charName}</h1>
        </div>
        {_.map(charCombos, (combo, index) => {
          const combosCommands = _.get(combo, "commands");
          const combosDamage = _.get(combo, "damage");
          const combosType = _.get(combo, "type");

          return (
            <>
              <h2>{combosType}</h2>
              <div className="selectedChar">
                {_.map(combosCommands, (command) => {
                  return renderComboIcon(command);
                })}

                <h3>Dano: {combosDamage}</h3>
              </div>
            </>
          );
        })}
        <button
          className="backButton"
          onClick={() => this.setState({ selectedChar: null })}
        >
          Voltar
        </button>
      </div>
    ) : (
      <div className="containerMain">
        <img className="mk11-image" src={require("../../assets/mk11-logo.png").default}/>
        <div className="charList">
          {_.map(characters, (char, index) => {
            const charName = _.get(char, "name");
            const charImage =
              require(`../../assets/characters/${char.image}`).default;
            return (
              <div
                className="charCard"
                onClick={() => this.setState({ selectedChar: char })}
              >
                <img class="charImage" src={charImage} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
