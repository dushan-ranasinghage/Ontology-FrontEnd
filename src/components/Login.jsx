import React, {Component} from 'react'
import { Button, Form, Grid, Header, Message, Segment, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
      }

    state = { value1: '', value2: '' , err: false}

    handleChange1 = (e, { value }) => {
      this.setState({ value1: value })
    }

    handleChange2 = (e, { value }) => {
      this.setState({ value2: value })
    }

    onSubmit = () => {
        const { value1, value2 }  = this.state
        if(value1 === 'electronics' && value2 === 'ontology'){
          this.props.history.push('/content') 
        } else {
          this.setState({ err: true})
        }   
    }

    render(props){
        return(
          <Grid textAlign='center'
            style={{
              height: '100vh',
              marginTop: '0rem',
              backgroundImage: "url(" + "https://www.electronicsb2b.com/wp-content/uploads/2018/01/04-zs-home_appliances_111-ab.jpg" + ")"
              // backgroundImage: "url(" + "https://wallpapercave.com/wp/OaCk2ys.jpg" + ")"
            }}
            verticalAlign='middle'>
             
            <Grid.Column style={{ maxWidth: 450 }}>
              
              <Header as='h1' textAlign='center' style={{fontSize:'50px', backgroundColor:'#fff', color: '#767676', borderRadius:'15px'}}>
                Log-in
              </Header>
              <Card
                centered
                style={{
                  width:'100%'
                }}
                color="red"
                header='Electronic Appliance Ontology v1.0'
                description={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing,',
                  ' elit, sed do eiusmod tempor incididunt ut labore et dolore',
                ].join('')}
              />
              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid icon='user'
                    iconPosition='left'
                    placeholder='Username'
                    value={this.state.value1}
                    onChange={this.handleChange1}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    value={this.state.value2}
                    onChange={this.handleChange2}
                    type='password'
                  />
                  <Button fluid size='large'
                  style={{
                    backgroundColor: '#767676',
                    color:'#fff'
                  }}
                    onClick={this.onSubmit}
                  >
                    Login
                  </Button>
                  <Message warning visible={this.state.err}>
                    <Message.Header>Login Failed!</Message.Header>
                    <p>The user name or password is incorrect. Try again.</p>
                  </Message>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        )
    }
} 

export default withRouter(LoginForm)