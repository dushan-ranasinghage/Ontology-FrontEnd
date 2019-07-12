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

      state = {
        inputValue1: 'Replace',
        showTable: false,
        productDrop1 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
          ]
      }

    componentDidMount() {
        axios.get("http://localhost:3050/GetBrand")
            .then(res => {
                let subjectUrl = res.data
                const dropData = []
                subjectUrl.map((obj)=>{
                    let x = obj.subject.split("owl#")
                    dropData.push({key: x[1], text: x[1], value:x[1]})
                    console.log("Val From API", x[1])
                })
                this.setState({ productDrop1: dropData })
            })
            .catch(err => {
                console.log("ERROR PRODUCT GETTING")
            })
    }

    handleChange1(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue1: e.target.textContent
          });
    }    
    
    handleChange2(e){
        debugger
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue2: e.target.textContent
          });
          debugger
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

                <Container text style={{ marginTop: '7em', minHeight: '100vh', minWidth: '1100px' }}>
                    <Header as='h1'>Ontology UI</Header>
                    <Form>
                        <Form.Group widths='equal'>
                        <Form.Select fluid label='Product' options={this.state.productDrop1} placeholder='First Parameter' onChange={this.handleChange1}/>
                        <Form.Select fluid label='Brand' options={options2} placeholder='Second Parameter' onChange={this.handleChange2}/>
                        <Form.Select fluid label='Third Parameter' options={options3} placeholder='Third Parameter' onChange={this.handleChange3}/>
                        </Form.Group>
                        <Form.Button
                        onClick={()=>{
                            this.props.getTestData(this.state.inputValue1)
                            this.setState({showTable:true})
                        }}
                        >Search</Form.Button>
                    </Form>
                           <Segment loading={false}>
                               <Table celled inverted selectable>
                                   <Table.Header>
                                       <Table.Row>
                                           <Table.HeaderCell>Name</Table.HeaderCell>
                                           <Table.HeaderCell>Test1</Table.HeaderCell>
                                           <Table.HeaderCell>Test2</Table.HeaderCell>
                                       </Table.Row>
                                   </Table.Header>

                                   <Table.Body>
                                   {this.props && this.props.test && this.props.test.testlist && this.props.test.testlist ? this.props && this.props.test && this.props.test.testlist && this.props.test.testlist.map((obj,i)=>{
                                      return <Table.Row  key={i}>
                                           <Table.Cell>{obj.subject.split("owl#")[1]}</Table.Cell>
                                       </Table.Row>
                                   }): <Table.Row >
                                   <Table.Cell>No Data</Table.Cell>
                                   <Table.Cell>No Data</Table.Cell>
                                   <Table.Cell>No Data</Table.Cell>
                               </Table.Row>}
                                   </Table.Body>
                               </Table> 
                           </Segment> 
                </Container>


                <Segment inverted vertical style={{ 
                    margin: '1em 0em 0em', 
                    padding: '1em 0em',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0px'
                    }}>
                    <Container textAlign='center'>
                        <Divider inverted section style={{
                            marginTop: '1rem', 
                            marginBottom: '1rem'
                        }}/>
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

