import React, {useContext} from 'react';
import { LearningContext } from '../contexts/LearningContext';
import {AppProvider, Card} from '@shopify/polaris'

// need access to learn inside this component
const LearnDetails = ({learn}) => {
    const {removeLearn} = useContext(LearningContext);     

 return (
     <AppProvider>
     <div class="learning-cards">
     <Card
        title={learn.date}
        secondaryFooterActions={[{content: 'Delete Entry', destructive: true, onAction: () => removeLearn(learn.id)}]}
        primaryFooterAction={{content: 'Change what you learned'}}>
        <Card.Section>{learn.description}</Card.Section>
    </Card>
     </div>
  

     </AppProvider>
    );
}

export default LearnDetails; 



