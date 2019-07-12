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

class Content extends Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
      }

      state = {
        inputValue1: 'replace',
        inputValue2: 'replace',
        inputValue3: 'replace',
        inputValue4: 'replace',
        showTable: false,
        productDrop1 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
          ],
        productDrop2 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
          ],
        productDrop3 : [
            { key: 'No Data', text: 'No Data', value: 'No Data' }
          ],
        productDrop4 : [
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
            axios.get("http://localhost:3050/GetCountry")
            .then(res => {
                let subjectUrl = res.data
                const dropData = []
                subjectUrl.map((obj)=>{
                    let x = obj.subject.split("owl#")
                    dropData.push({key: x[1], text: x[1], value:x[1]})
                    console.log("Val From API", x[1])
                })
                this.setState({ productDrop2: dropData })
            })
            .catch(err => {
                console.log("ERROR PRODUCT GETTING")
            })
            axios.get("http://localhost:3050/GetUsageType")
            .then(res => {
                let subjectUrl = res.data
                const dropData = []
                subjectUrl.map((obj)=>{
                    let x = obj.subject.split("owl#")
                    dropData.push({key: x[1], text: x[1], value:x[1]})
                    console.log("Val From API", x[1])
                })
                this.setState({ productDrop3: dropData })
            })
            .catch(err => {
                console.log("ERROR PRODUCT GETTING")
            })
            axios.get("http://localhost:3050/GetConsumerRate")
            .then(res => {
                let subjectUrl = res.data
                const dropData = []
                subjectUrl.map((obj)=>{
                    let x = obj.subject.split("owl#")
                    dropData.push({key: x[1], text: x[1], value:x[1]})
                    console.log("Val From API", x[1])
                })
                this.setState({ productDrop4: dropData })
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

    handleChange4(e){
        // console.log("Event Val", e.target.textContent)
        this.setState({
            inputValue4: e.target.textContent
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
                    <Header as='h1'>Electronics Appliances Ontology</Header>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Select fluid label='Brand' options={this.state.productDrop1} placeholder='Brand' onChange={this.handleChange1} />
                            <Form.Select fluid label='Country' options={this.state.productDrop2} placeholder='Country' onChange={this.handleChange2} />
                            <Form.Select fluid label='UsageType' options={this.state.productDrop3} placeholder='Type' onChange={this.handleChange3} />
                            <Form.Select fluid label='ConsumerRating' options={this.state.productDrop4} placeholder='Rate' onChange={this.handleChange4} />
                        </Form.Group>
                        <Form.Button
                            onClick={() => {
                                this.props.getTestData(this.state.inputValue1, this.state.inputValue2, this.state.inputValue3, this.state.inputValue4)
                                this.setState({ showTable: true })
                            }}
                        >Search</Form.Button>
                    </Form>
                           <Segment loading={false}>
                               <Table celled inverted selectable>
                                   <Table.Header>
                                       <Table.Row>
                                           <Table.HeaderCell>Product Name</Table.HeaderCell>
                                       </Table.Row>
                                   </Table.Header>

                                   <Table.Body>
                                   {this.props && this.props.test && this.props.test.testlist && this.props.test.testlist ? this.props && this.props.test && this.props.test.testlist && this.props.test.testlist.map((obj,i)=>{
                                      return <Table.Row  key={i}>
                                           <Table.Cell>{obj.subject.split("owl#")[1]}</Table.Cell>
                                       </Table.Row>
                                   }): <Table.Row >
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
                            <List.Item as='a' href='#'>
                            <small>&copy; Copyright 2019, dExTeR</small>
                            </List.Item>

                        </List>
                        {/* <center>Designed By: dExTeR</center> */}
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

