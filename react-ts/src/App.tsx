import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';
import CourseGoals from "./components/CourseGoals.tsx";
import {useState} from "react";
import NewGoal from "./components/NewGoal.tsx";

function App() {
    const [goals, setGoals] = useState([
        {
            id: 1,
            title: 'Learn TS',
            description: 'Learn TS from the ground up'
        },
        {
            id: 2,
            title: 'Practice TS',
            description: 'Practice TS from the ground up'
        }
    ]);

    function handleGoalClick(id: number) {
        setGoals((prevGoals) => prevGoals.filter(
            goal => goal.id !== id
        ));
    }

    function handleAddGoalClick(text: string, summary: string) {
        setGoals(prevGoals =>
        prevGoals.concat({id: Math.random(), title: text, description: summary}));
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'Goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal onAdd={handleAddGoalClick}/>
            <CourseGoals goals={goals} onDelete={handleGoalClick}/>
        </main>
    );
}

export default App
