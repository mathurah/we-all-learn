import React, {useState, useContext} from 'react'; 
import { LearningContext } from '../contexts/LearningContext';
const NewLearnForm = ({}) => {
    const {addLearn} = useContext(LearningContext)
    const [date, setDate] = useState('');
    const [description, setDescription] =useState(''); 
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        addLearn(date, description); 
        setDate(''); 
        setDescription(''); 
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="date" placeholder="date" value={date} onChange={(e) => setDate(e.target.value)} required/>

            
            <textarea name="textarea" rows="4" cols="5" placeholder="what you learned" value={description} onChange={(e) => setDescription(e.target.value)} required/>
           
            {/* storing what the user enters in a local state */}
            {/* gets us the value inside the input form */}
            <input type="submit" value="add what you learned"/>
        </form>
    ); 
}

export default NewLearnForm