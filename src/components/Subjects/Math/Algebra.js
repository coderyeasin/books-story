import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import initialBooks from '../../../Firebase/Firebase.init';
import { Article } from '@mui/icons-material';
import { Button, Paper, Typography } from '@mui/material';
import useFirebase from '../../../Hooks/useFirebase';


const Algebra = () => {

    const {topics} = useFirebase()

    // const [topics, setTopics] = useState([])

    // const db = initialBooks()
    // const topicsCollectionRef = collection(db, "topics")

    // useEffect(() => {
            
    //     const getTopics = async () => {
    //         const data = await getDocs(topicsCollectionRef)
    //         setTopics(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    //         console.log(data);
    //     }
    //     getTopics()
    // },[])
    return (
        <div>
            <h3>Hello Algebra</h3>

            <h3>Its from db:</h3> {topics.map((topic) => {
                return (
                    <div key={topic.id}>
                       <Paper elevation={3} sx={{mx:2, py:2, mb:2}} >
                        <Typography variant="h3" gutterBottom component="div">
                           Title: {topic?.title}
                            </Typography>

                        <Typography variant="h5" gutterBottom component="div">
                            Author Name: {topic?.name} || Subject: {topic?.subject}
                            </Typography>
                            
                            <Typography variant="body2" gutterBottom sx={{mx:2}}>
                            <strong>History: </strong>{topic?.description}
                            </Typography>

                            <Button sx={{mx:2}} variant="contained">Update</Button>
                            <Button variant="contained">Delete</Button>
                      </Paper>
                </div>
                );
            })} 
        </div>
    );
};

export default Algebra;