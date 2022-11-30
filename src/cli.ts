import chalk from "chalk";
import inquirer from "inquirer";
import { Questions } from "./questions";

console.log(chalk.gray("Bem vindo ao sistema automatizado."));

class Cli extends Questions {
  starter() {
    this._setExists();
    this._setnoController();
    this._setquestions();
    this._setquantity();
    this.menu();
    return;
  }

  private menu() {
    inquirer.prompt(this._setMainMenu()).then((answers) => {
      if (answers.funcion == "tuto") {
        return this.tutorial();
      }
      return this.validationProject();
    });
  }
  private restart() {
    this.menu();
  }
  private tutorial() {
    inquirer.prompt(this._setTutorial()).then((answers) => {
      this.menu();
    });
  }
  private creation() {}

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
      let obj = {
        nameProject: answers.nameProject,
        useCase: parseInt(answers.useCase),
        dto: parseInt(answers.dto),
        service: parseInt(answers.service),
      };
      if (
        Number.isNaN(obj.dto) ||
        Number.isNaN(obj.service) ||
        Number.isNaN(obj.useCase)
      ) {
        return this.error("num");
      }
      console.log(chalk.green("\nFoi criado com sucesso!"));
      console.log(obj);
      return this.restart();
    });
  }

  private existProject(): any {
    try {
      inquirer.prompt(this._setquestions()).then((answers) => {
        let value = {
          type: answers,
          amount: answers,
        };
        inquirer.prompt(this._setquantity()).then((answers) => {
          value.amount = answers;
          value = {
            type: value.type.funcion,
            amount: parseInt(value.amount.value),
          };
          if (!value.amount) {
            console.log(chalk.red("Erro apenas numeros."));
            return this.restart();
          }
          console.log(chalk.green("\nFoi criado com sucesso!"));
          console.log(value);
          return this.restart();
        });
      });
    } catch (err) {
      console.log(err);
    }
  }
  private error(err: string) {
    if (err == "num") {
      console.log(chalk.red(chalk.bold("Error Apenas numero")));
      return this.restart();
    }
  }

}

const command = new Cli();
command.starter();
