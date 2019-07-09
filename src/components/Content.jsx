import React, {Component} from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Form,
  Table
} from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { getTestData } from '../actions/index'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const options = [
    { key: 'm', text: 'TVs', value: 'TVs' },
    { key: 'f', text: 'Test1', value: 'Test1' },
    { key: 'o', text: 'Test2', value: 'Test2' },
  ]
  
class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
      }

    state = { showTable: false }

    handleChange(e){
        console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue: e.target.textContent
          });
    }

    render() {
        console.log("Props", this.props)
        console.log("State", this.state)
                return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            Ontology
                        </Menu.Item>
                        <Menu.Item as='a'>Home</Menu.Item>
                    </Container>
                </Menu>

                <Container text style={{ marginTop: '7em', minHeight: '100vh' }}>
                    <Header as='h1'>Ontology UI</Header>

                    <Form>
                        <Form.Group widths='equal'>
                        <Form.Select fluid label='First Parameter' options={options} placeholder='First Parameter' /> 
                        <Form.Select fluid label='Second Parameter' options={options} placeholder='Second Parameter' onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Button
                        onClick={()=>{
                            this.props.getTestData(this.state.inputValue)
                            this.setState({showTable:true})
                        }}
                        >Search</Form.Button>
                    </Form>
                            {this.state.showTable == true ? <Segment loading={false}>
                               
                               <Table celled inverted selectable>
                                   <Table.Header>
                                       <Table.Row>
                                           <Table.HeaderCell>Name</Table.HeaderCell>
                                       </Table.Row>
                                   </Table.Header>

                                   <Table.Body>
                                   {this.props && this.props.test && this.props.test.testlist && this.props.test.testlist.map((obj,i)=>{
                                      return <Table.Row  key={i}>
                                           <Table.Cell>{obj.name}</Table.Cell>
                                       </Table.Row>
                                   })}
                                   </Table.Body>
                               </Table> 
                           </Segment> : ''}
                </Container>


                <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em' }}>
                    <Container textAlign='center'>
                        
                        <Divider inverted section />

                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                About Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                        <center>Designed By: dExTeR</center>
                    </Container>
                </Segment>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    console.log("dsd",state)
    return {
        test: state.test
    };
  }
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getTestData
    }, dispatch)
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content))

