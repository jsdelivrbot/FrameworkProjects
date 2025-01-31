import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {

    renderField(field) {
        // Used for destructing -> es6 syntax
        const { meta : { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/> 
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        //Use a action creator
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title for Post" name="title" component={this.renderField}/>
                <Field label="Categories" name="categories" component={this.renderField}/>
                <Field label="Post Content" name="content" component={this.renderField}/>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    //validate the inputs from 'values'

    if (!values.title) {
        errors.title = "Enter a title!";
    }

    if (values.title && values.title.length < 3) {
        errors.title = "Title must be atleast 3 characters";
    }

    if (!values.categories) {
        errors.categories = "Enter a category!";
    }

    if (!values.content) {
        errors.content = "Enter some content";
    }

    // If errors is empty, te form is fine to submit If errors has any properties,
    // redux form assumes form is invalid
    return errors;
}

// Pass in a configurations
export default reduxForm({validate, form: 'PostsNewForm'})
                (connect(null, { createPost }) (PostsNew));