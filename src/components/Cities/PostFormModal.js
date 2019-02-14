import React from 'react'
import  { Form, Segment, Button, Header, Icon, Grid, Container, Divider, Message } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react'


class PostFormModal extends React.Component{
  constructor(props){
    super(props)

    this.state={
      imageSuccess: false
    }
  }



  changeSuccess(){
    this.setState({ imageSuccess: true })
  }



  render(){
    const {toggleOpen, handleChangePost, handleSubmitPost, postData } = this.props
    return(
      <Container>
        <Grid textAlign='center' columns={1}>
          <Grid.Column width={8}>
            <Segment>
              {this.state.imageSuccess && <Message
                success> Image Successfully Uploaded </Message>
              }
              <Form onSubmit={handleSubmitPost}>


                {!this.state.imageSuccess &&
                <Form.Field required>
                  <ReactFilestack
                    apikey={ `${process.env.FILE_STACK_KEY}` }
                    mode={'pick'}
                    onSuccess={(res) => {
                      this.changeSuccess()
                      handleChangePost({
                        target: {
                          name: 'image',
                          value: res.filesUploaded[0].url
                        }
                      })
                    }
                    }
                    onError={(e) => console.log(e)}
                    buttonText={'Add An Image'}
                    buttonClass={'button is-rounded'}
                  />
                </Form.Field>
                }




                <Form.Field>
                  <Form.TextArea
                    required
                    label='Please add a brief description about your photo'
                    placeholder='Write your caption...'
                    name='caption'
                    value={postData.caption}
                    onChange={handleChangePost}
                  />
                </Form.Field>

                <Divider hidden />

                <Button.Group fluid>
                  <Button primary > Submit </Button>
                  <Button.Or />
                  <Button onClick={toggleOpen} negative > Cancel </Button>
                </Button.Group>
              </Form>

            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}


export default PostFormModal
