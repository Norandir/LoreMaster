import { Component } from "react"

export class Inputs extends Component {
    state = {
       name: '',
       level: 0
    }
    handleName = (text: string) => {
       this.setState({ name: text })
    }
    handlePassword = (text: number) => {
       this.setState({ level: text })
    }
    login = (name: string, level: number) => {
       alert('Name: ' + name + ' Level: ' + level)
    }
    test?:string
}