import React from "react";
import {Form, FormGroup, FormControl, HelpBlock, Row, Col} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {PostEditFormSubmit} from "./PostEditFormSubmit";

const required = value => value ? undefined : 'Required';

const RenderField = ({input, label, componentClass, type, meta: {touched, error, warning}, children}) => (
    <FormGroup>
        <Row>
            <Col sm={3}>{label}</Col>
            <Col sm={9}>
                <FormControl {...input} componentClass={componentClass} type={type}>
                    {children}
                </FormControl>
            </Col>
        </Row>
        <FormControl.Feedback/>
        <HelpBlock>
            {touched && error ? error : null}
        </HelpBlock>
    </FormGroup>
);

const PostEditForm = (props) => {
    const {handleSubmit, error, submitting, postEdit} = props;

    return (
        <Form horizontal onSubmit={handleSubmit(postEdit.formSubmit)}>
            <Field name="title" type="text" component={RenderField} label="Заглавие" validate={[required]}/>
            <Field name="author" type="text" component={RenderField} label="Автор" validate={[required]}/>
            <Field name="text" type="textarea" component={RenderField} componentClass="textarea" label="Текст"
                   validate={[required]}/>
            <Field name="tags" type="text" component={RenderField} label="Тагове" validate={[required]}/>
            <Field name="image" type="url" component={RenderField} label="Снимка" validate={[required]}/>
            <Field name="status" component={RenderField} componentClass="select" label="Статус" validate={[required]}>
                <option value="">Изберете...</option>
                <option value="activated">Активиран</option>
                <option value="deactivated">Деактивиран</option>
            </Field>
            <Field name="created_at" type="date" component={RenderField} label="Дата" validate={[required]}/>
            <PostEditFormSubmit error={error} submitting={submitting}/>
        </Form>
    );
};

export default reduxForm({
    form: 'postEditForm',
})(PostEditForm);