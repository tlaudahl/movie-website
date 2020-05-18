import React from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';

export default function Landing() {
    return (
        <Jumbotron fluid className='text-center mb-0 vh-100 custom-jumbo'>
            <h1 className='display-1 h-25 mt-5'>TITLE</h1>
            <Form className='d-flex justify-content-center align-items-center flex-column'>
                <Form.Group controlId='search' className='input-group-lg col-lg-7 cl-md-4'>
                    <Form.Control type='text' placeholder='Search movie, series, or episode...' className='rounded-lg'/>
                </Form.Group>
                <Button className='w-25'>Search</Button>
            </Form>
        </Jumbotron>
    )
}
