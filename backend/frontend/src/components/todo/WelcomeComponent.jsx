import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    <h4>Project description</h4>
                    <p>In order to manage team projects and tasks most effectively, having a ToDoList
application is a need. First, our ToDoList will help to hit their goals without scramble. It maps
out steps and organizes all the details of works in one place. Second, a ToDoList helps to see
where everything stands such as visualize work clearly and move work through multiple stages
quickly. Third, ToDoList is a great access to hit deadlines thanks to creating a plan that shows
you how the pieces of your project fit together, and helps you keep work on track as things
change. Fourth, ToDoList nails your timing by viewing work on a calendar. It helps to spot holes
and overlaps in your schedule and quickly make adjustments. Last but not least, ToDoList will
save us so much time from manually writing down tasks or consistently remembering upcoming
works because it stores tasks and automatically reminds us.</p>
                </div>
                <div className="container">
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>

            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then( response => this.handleSuccessfulResponse(response) )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handleSuccessfulResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({ welcomeMessage: response.data.message })
    }

    handleError(error) {

        console.log(error.response)

        let errorMessage = '';

        if (error.message)
            errorMessage += error.message

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({ welcomeMessage: errorMessage })
    }

}


export default WelcomeComponent