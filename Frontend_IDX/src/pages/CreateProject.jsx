import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"

export const CreateProject = () => {


    const { createProjectMutation , isPending } = useCreateProject();

    async function handleCreateProject(){
        console.log(" Going to trigger the API ");

        try {
            await createProjectMutation();
            console.log("Redirecting to the editor");
        } 

        catch (error) {
            console.log("Error creating project ",error);
        }
        
    }

    return (

        <div>
            
            <h1>Create Project </h1>
            <button
                onClick={handleCreateProject}>CREATE PROJECT</button>
            {isPending && <p>CREATING PROJECT.....</p>}
        </div>

    )
}