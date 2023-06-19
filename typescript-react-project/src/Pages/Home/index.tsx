import {FC, useState} from 'react';

interface Props {
    name: string, 
    age: number,
    email: string
}

const Home: FC<Props> /* type Functional Component with 
an Interface <Props> that validates props types */ = (props)=> { // class Component is just extends React.Component
    const [description, setDescription] = useState<string>("");
return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <p>{description}</p>
        </div>
)
}

export default Home;