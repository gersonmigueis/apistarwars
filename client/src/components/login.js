import React, { Component } from 'react'
import { login } from './usersFunctions'

class Login extends Component {

    constructor(){
        super()
        this.state = {
            email    : '',
            password : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user = {
            email    : this.state.email,
            password : this.state.password
        }
        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }

    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6-mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Faça login</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" 
                                className="form-control" 
                                name="email" 
                                placeholder="Entre com seu email" 
                                value={this.state.email}
                                onChange={this.onChange}
                                /> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control" 
                                name="password"  
                                placeholder="Entre com sua senha" 
                                value={this.state.password}
                                onChange={this.onChange}
                                /> 
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-bloc">
                                Entrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login