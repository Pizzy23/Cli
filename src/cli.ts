import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.gray("Bem vindo ao sistema automatizado."));

class Cli {
  noController: any;
  questions: any;
  quantity: any;
  exists: any;

  private _setquantity() {
    return (this.quantity = [
      {
        type: "input",
        name: "value",
        message: "Quantos deseja criar?",
        default: "",
      },
    ]);
  }
  private _setquestions() {
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
  private _setnoController() {
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
  private _setExists() {
    return (this.exists = [
      {
        type: "confirm",
        name: "create",
        message: "Projeto ja existente?",
        default: false,
      },
    ]);
  }
  start() {
    this._setExists();
    this._setnoController();
    this._setquestions();
    this._setquantity();
    this.validationProject();
    return;
  }
  private validationProject() {
    inquirer.prompt(this.exists).then((answers) => {
      if (answers.create === false) {
        return this.noProject();
      }
      return this.existProject();
    });
  }
  private noProject() {
    inquirer.prompt(this._setnoController()).then((answers) => {
      console.log(chalk.green("\nFoi criado com sucesso!"));
      console.log(answers);
      return
    });
  }
  private existProject(): any {
    inquirer.prompt(this._setquestions()).then((answers) => {
      let value = {
        type: answers,
        amount: answers,
      };
      inquirer.prompt(this._setquantity()).then((answers) => {
        value.amount = answers;
        value = {
          type: value.type.funcion,
          amount: value.amount.value,
        };
        console.log(chalk.green("\nFoi criado com sucesso!"));
        console.log(value);
      });
    });
  }
}

const command = new Cli();
command.start();
