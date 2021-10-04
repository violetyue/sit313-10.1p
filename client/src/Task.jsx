import React, {useState} from "react";
import InputBar from "./Input";
import InputText from "./Text";
import Button from "./Button";
import Title from "./Title";
import RadioCheck from "./Radio";
import { Label, Form } from 'semantic-ui-react'
import './Main.css'


const Task = (props) => {
    const [contact, setContact] = useState({
        taskType: '',
        taskTitle: '',
        taskDescription: '',
        suburb: '',
        date: '',
        budgetType: '',
        budget: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setContact ((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
        console.log(name + ": " + value)
    }

    const handlePost = () => {
        fetch('http://localhost:5000', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                taskType: contact.taskType,
                taskTitle: contact.taskTitle,
                taskDescription: contact.taskDescription,
                suburb: contact.suburb,
                date: contact.date,
                budgetType: contact.budgetType,
                budget: contact.budget
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error: " + err)
        })
    }
    
    return (
        <div className='customer-form'>
            <div className='new-task'>
                <Title 
                    title= 'New Task'
                />
                <div className='contact-input'>
                    <h3>Select Task Type:</h3>
                    <form className='radio-area'>   
                    <div className='radio'>
                    <RadioCheck
                    type='radio'
                    name='taskType'
                    value='inPerson'
                    checked={contact.taskType==='inPerson'}
                    onChange={handleChange} />
                    In person 
                    </div>
                    <div className='radio'>
                    <RadioCheck
                    type='radio'
                    name='taskType'
                    value='Online'
                    checked={contact.taskType==='Online'}
                    onChange={handleChange} />
                    Online
                    </div> 
                    </form>
                </div>
            </div>
            <div className='describe'>
                <Title 
                    title= 'Describe your task to Experts'
                />
                <div className='contact-input'>
                    <div><h3>Task Title</h3></div>
                    <div style={{marginLeft:'50px'}}><InputBar
                        size='50'
                        name='taskTitle'
                        type='text'
                        placeholder='Enter task title'
                        onChange={handleChange}
                        value={contact.taskTitle}
                    /></div>
                </div>
                <div className='contact-input'>
                    <div><h3>Description</h3></div>
                    <div style={{marginLeft:'32px'}}><InputText
                        cols='50'
                        rows='6'
                        name='taskDescription'
                        placeholder='Enter task description'
                        onChange={handleChange}
                        value={contact.taskDescription}
                    /></div>
                </div>
            </div>
            <div className='setting-up'>
                <Title 
                    title= 'Setting up your Task'
                />
                {contact.taskType==='inPerson' &&
                <div className='contact-input'>
                    <div><h3>Suburb</h3></div>
                    <div style={{marginLeft:'68px'}}><InputBar
                        size='50'
                        name='suburb'
                        type='text'
                        placeholder='Enter a suburb'
                        onChange={handleChange}
                        value={contact.suburb}
                    /></div>
                </div>}       
                <div className='contact-input'>
                    <div><h3>Date</h3></div>
                    <div style={{marginLeft:'87px'}}><InputBar
                        size='50'
                        name='date'
                        type='text'
                        placeholder='Enter a date'
                        onChange={handleChange}
                        value={contact.date}
                    /></div>
                </div>
            </div>
            <div className='suggest'>
                <Title 
                    title= 'Suggest how much'
                />
                <h3>What is your budget?</h3>
                <h3>(This is an estimate)</h3> 
                <form className='radio-area'>
                <div className='radio'>    
                    <RadioCheck
                    type='radio'
                    name='budgetType'
                    value='total'
                    checked={contact.taskType==='total'}
                    onChange={handleChange} 
                    />
                    Total 
                </div>
                <div className='radio'>    
                    <RadioCheck
                    type='radio'
                    name='budgetType'
                    value='hourlyRate'
                    checked={contact.taskType==='hourlyRate'}
                    onChange={handleChange} />
                    Hourly Rate 
                   </div> 
                    </form>
                <div className='contact-input'>              
                    <Label size={"mini"}>$</Label>
                    <InputBar
                        name='budget'
                        type='text'
                        placeholder=''
                        onChange={handleChange}
                        value={contact.budget}
                    />
                </div>
            </div>
            <div className='post' style={{marginLeft:'705px'}}>
                <Button
                    type='submit'
                    text='Post Task'
                    onClick = {handlePost}
                />
            </div>
        </div>
            
    )
}

export default Task