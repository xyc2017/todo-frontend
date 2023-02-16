// a function that triggers a certain behavior / action on a form submission
import url from "./url"
import {redirect} from "react-router-dom"


export async function CreateAction({request}){
    // get the form data
    const formData=await request.formData()
    // construct new todo
    const newTodo={
        subject: formData.get("subject"),
        details: formData.get("details")
    }
    // request to create route in backend
    await fetch(url, {
        method:"post",

        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newTodo)

    })
    // redirect user back to index page
    return redirect("/")

    }

    export async function UpdateAction({request, params}){
        // get the form data
        const formData=await request.formData()
        // construct new todo
        const newTodo={
            subject: formData.get("subject"),
            details: formData.get("details")
        }
        // request to update route in backend
        await fetch(url+params.id+"/", {
            method:"put",
    
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newTodo)
    
        })
        // redirect user back to index page
        return redirect("/")
    
        }
    export async function DeleteAction({params}){
        // get the id
        const id=params.id 
        // send the request to delete
        await fetch(url+id+"/", {
            method: "delete"
        })
        return redirect("/")
    }