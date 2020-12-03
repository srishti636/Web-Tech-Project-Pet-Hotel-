import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const petType = [
    { key: 1, value: "Dogs" },
    { key: 2, value: "Cats" },
    { key: 3, value: "Rabbits" },
    { key: 4, value: "Parrots" },
    { key: 5, value: "Fish" },
    { key: 6, value: "Tortoise" },
    { key: 7, value: "Hamster" }
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        petType: 1,
        images: [],
        price: 0
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangePrice = (event) => {
        this.setState({ price: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangepetType = (event) => {
        this.setState({ petType: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.petType || !this.state.images
            || !this.state.price) {
            return alert('Please first fill all the fields')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            petType: this.state.petType,
            price: this.state.price
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Upload Travel Product</Title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>Title</label>
                <Input
                    onChange={this.handleChangeTitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>Price($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangePrice}
                    value={this.state.price}
                />
                <br /><br />
                <select onChange={this.handleChangepetType}>
                    {petType.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
