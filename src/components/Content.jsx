import React, {Component} from 'react'
import {
  Container,
  Divider,
  Header,
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
import axios from 'axios'

const options1 = [
    { key: 'm', text: 'TVs', value: 'TVs' },
    { key: 'f', text: 'Test1', value: 'Test1' },
    { key: 'o', text: 'Test2', value: 'Test2' },
  ]

const options2 = [
    { key: 'm', text: 'TVs', value: 'TVs' },
    { key: 'f', text: 'Test1', value: 'Test1' },
    { key: 'o', text: 'Test2', value: 'Test2' },
  ]

const options3 = [
    { key: 'm', text: 'TVs', value: 'TVs' },
    { key: 'f', text: 'Test1', value: 'Test1' },
    { key: 'o', text: 'Test2', value: 'Test2' },
  ]
  
class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
      }

    componentDidMount() {
        axios.get("http://localhost:3050/product")
            .then(res => {
                let subjectUrl = res.data
                const dropData = []
                subjectUrl.map((obj)=>{
                    let x = obj.subject.split("owl#")
                    dropData.push({value:x[1]})
                    console.log("Val From API", x[1])
                })
                this.setState({ productDrop1: dropData })
            })
            .catch(err => {
                console.log("ERROR PRODUCT GETTING")
            })
    }

    state = { showTable: false }

    handleChange1(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue1: e.target.textContent
          });
    }    
    
    handleChange2(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue2: e.target.textContent
          });
    }    
    
    handleChange3(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue3: e.target.textContent
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
                        <Menu.Menu position='right'>
                        <Menu.Item as='a' onClick={()=>{
                                window.history.replaceState(null, null, "/");
                                window.location.href = '/';
                        }}>Logout</Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>

                <Container text style={{ marginTop: '7em', minHeight: '100vh' }}>
                    <Header as='h1'>Ontology UI</Header>

                    <Form>
                        <Form.Group widths='equal'>
                        <Form.Select fluid label='First Parameter' options={this.state.productDrop1} placeholder='First Parameter' onChange={this.handleChange}/>
                        <Form.Select fluid label='Second Parameter' options={options2} placeholder='Second Parameter' onChange={this.handleChange2}/>
                        <Form.Select fluid label='Third Parameter' options={options3} placeholder='Third Parameter' onChange={this.handleChange3}/>
                        </Form.Group>
                        <Form.Button
                        onClick={()=>{
                            this.props.getTestData(this.state.inputValue1)
                            this.setState({showTable:true})
                        }}
                        >Search</Form.Button>
                    </Form>
                            {(this.props && this.props.test && this.props.test.testlist && this.props.test.testlist) ? <Segment loading={false}>
                               
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

