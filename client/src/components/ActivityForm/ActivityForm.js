import { Form,Field } from 'react-final-form';
import React, { Component } from 'react';
import Styles from './ActivityForm.styles';

class ActivityForm extends Component{
    
    render(){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

        const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        }

        const activities = ["Office Work", "Reading", "Exercising", "Cleaning", "Cooking", "Chilling", "Driving"]
        const moods = ["Cheerful","Reflective","Gloomy","Humorous","Melancholy","Idyllic","Whimsical","Romantic","Mysterious","Ominous","Calm","Lighthearted","Hopeful","Angry","Fearful","Tense","Lonely"];
        
        return (
            <Styles>
   
                <Form
                onSubmit={onSubmit}
                initialValues={{ activity: 'reading'}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                    <div>
                    <label>Activity</label>
                    <div>
                    {
                        activities.map(act=>{
                           return <label>
                            <Field
                                name="activity"
                                component="input"
                                type="radio"
                                value={act.toLowerCase()}
                            />{' '}
                            {act}
                            </label>
                        })
                    }
                    </div>
                    </div>
                    <div>
                        <label>Moods</label>
                        <Field name="moods" component="select" multiple>
                        {
                            moods.map(mood=>{
                                return <option value={mood}>{mood}</option>})
                        }
                        </Field>
                    </div>
                    

                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                    Submit
                    </button>
                    <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                    >
                    Reset
                    </button>
                </div>
                </form>
                )}
                />

            </Styles>
        )
    }
}

export default ActivityForm;

