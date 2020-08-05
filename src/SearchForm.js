import React from 'react';
import { Form, Col, FormLabel } from 'react-bootstrap';
import './App.css';

export default function SearchForm({ params, onParamChange }) {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label className="formDescription gitForm">Description</Form.Label>
                    <Form.Control onChange={onParamChange} value=
                    {params.description} name="description" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label className="formLocation gitForm">Location</Form.Label>
                    <Form.Control onChange={onParamChange} value=
                    {params.location} name="location" type="text" />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} value={params.full_time} 
                    name="full_time" id="full-time" label="Only Full Time" type="checkbox" 
                    className="mb-2 gitForm"/>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
