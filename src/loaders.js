// The fetch calls to get the api to grab and pass the data to a route

import url from "./url"

export async function  IndexLoader(){
    const response=await fetch(url)
    const data=await response.json()

    console.log("Index loader:", data)

    return data
}

export async function ShowLoader({params}){
    const response=await fetch(url+params.id+"/")
    const data=await response.json()
    console.log(data)
    return data
}