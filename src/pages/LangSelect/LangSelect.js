import React, {Component} from 'react'
import { Card, Icon, Image, Dimmer, Header, Segment, Grid, Message } from 'semantic-ui-react'

class LangSelect extends Component {
	
	state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
	
	start() {
		console.log("hiii");
	}
	
	render(){
		const { active } = this.state;
		return (
			<div>
				
				<Message info>
    			<Message.Header>Was this what you wanted?</Message.Header>
    			<p>Did you know its been a while?</p>
  			</Message>
				
				<Grid centered>
					<Grid.Row>
						
						<Grid.Column key='1' width='4' stretched>
							<Dimmer.Dimmable as={Segment} onMouseEnter={this.handleShow} onMouseLeave={this.handleHide}>
								<Dimmer active={active}>
									<a href='#' onClick={this.start}>
										<Header as='h2' icon inverted>
											<Icon name='mail forward' />
											Click to start
										</Header>
									</a>
								</Dimmer>
								<Card fluid>
									<Image width='100%' src='http://nodeframework.com/assets/img/js.png' />
									<Card.Content>
										<Card.Header>
											Javascript
										</Card.Header>
										<Card.Description>
											Javasccript is fucked up language but whatever.
										</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Icon name='user' />
										0 people have completed this course!
									</Card.Content>
								</Card>
							</Dimmer.Dimmable>
						</Grid.Column>
						
						<Grid.Column key='2' width='4' stretched>
						<Dimmer.Dimmable as={Segment}>
							<Dimmer active>
								<Header as='h2' icon inverted>
									<Icon name='history' />
									Coming soon!
								</Header>
							</Dimmer>
							<Card fluid>
								<Image width='100%' src='https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.php.png' />
								<Card.Content>
									<Card.Header>
										PHP
									</Card.Header>
									<Card.Description>
										Another language widely used in web development. Laravel uses it!
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<Icon name='user' />
									0 people have completed this course!
								</Card.Content>
							</Card>
							</Dimmer.Dimmable>
						</Grid.Column>
						
						<Grid.Column key='3' width='4' stretched>
							<Dimmer.Dimmable as={Segment}>
								<Dimmer active>
									<Header as='h2' icon inverted>
										<Icon name='history' />
										Coming soon!
									</Header>
								</Dimmer>
								<Card fluid>
									<Image width='100%' src='https://zeth.net/_images/500px-Python-logo-notext.svg.png' />
									<Card.Content>
										<Card.Header>
											Python
										</Card.Header>
										<Card.Description>
											This is the only lang with a logo and it looks weird.
										</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Icon name='user' />
										0 people have completed this course!
									</Card.Content>
								</Card>
							</Dimmer.Dimmable>
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
				
			</div>
		);
	}

}

export default LangSelect;
