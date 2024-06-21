// const [featuredProjects, setFeaturedProjects] = useState([])
const pantryId = "877b957b-7d0e-4c40-9da4-07104a18a377"

export const getMainData = async() => {
    try{
        const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/mainData`)
        const data = await response.json();
        return data;
    }catch(error){
        console.log("Couldn't get featured projects: " + error)
    }
}