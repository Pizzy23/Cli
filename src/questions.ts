import chalk from "chalk";

export class Questions {
  noController: any;
  questions: any;
  quantity: any;
  exists: any;
  mainMenu: any;
  _tutorial: any;

  _setquantity() {
    return (this.quantity = [
      {
        type: "input",
        name: "value",
        message: "Quantos deseja criar?",
        default: "",
      },
    ]);
  }
  _setquestions() {
    return (this.questions = [
      {
        type: "expand",
        name: "funcion",
        message: "Qual função deseja?",
        choices: [
          {
            key: "C",
            name: "Criar UseCase",
            value: "useCase",
          },
          {
            key: "A",
            name: "Criar Api",
            value: "api",
          },
          {
            key: "D",
            name: "Criar DTO",
            value: "dto",
          },
          {
            key: "S",
            name: "Criar Services",
            value: "service",
          },
        ],
      },
    ]);
  }
  _setnoController() {
    return (this.noController = [
      {
        type: "input",
        name: "nameProject",
        message: "Qual o nome do projeto?",
        default: "",
      },
      {
        type: "input",
        name: "useCase",
        message: "Quantos UseCase?",
        default: "0",
      },
      {
        type: "input",
        name: "dto",
        message: "Deseja quantos DTO?",
        default: "0",
      },
      {
        type: "input",
        name: "service",
        message: "Deseja quantos Service?",
        default: "0",
      },
    ]);
  }
  _setExists() {
    return (this.exists = [
      {
        type: "confirm",
        name: "create",
        message: "Projeto ja existente?",
        default: false,
      },
    ]);
  }
  _setMainMenu() {
    return (this.mainMenu = [
      {
        type: "expand",
        name: "funcion",
        message: "\nS) Começar\nT) Tutorial\nH) Lista das opções",
        choices: [
          {
            key: "S",
            name: "Começar o projeto.",
            value: "start",
          },
          {
            key: "T",
            name: "Tutorial",
            value: "tuto",
          },
        ],
      },
    ]);
  }
  _setTutorial() {
    const tutorialMensage = `Bem vindo ao tutorial! \nAqui explicarei como funciona um pouco do sistema, quando tiver múltiplas escolhas, se colocar alguma das letras que aparece, ele ira colocar ">>(O que faz)" \n `
    return (this._tutorial = [
      {
        type: "confirm",
        name: "create",
        message: tutorialMensage,
        default: false,
      },
    ]);
  }
}
