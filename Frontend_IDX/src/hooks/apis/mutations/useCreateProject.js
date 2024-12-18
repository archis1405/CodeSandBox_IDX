import { useMutation } from "@tanstack/react-query"
import { createProjectApi } from "../../../apis/projects.js"

export const useCreateProject = () => {

    const {mutateAsync , isPending , isSuccess , error} = useMutation({

        mutationFn: createProjectApi,
        onSuccess: () => {

            console.log("Project created successfully" , data);

        },
        onError: () => {

            console.log("Error while creating the project");

        }
    })

    return{

        createProjectMutation: mutateAsync,
        isPending,
        isSuccess,
        error
        
    }
};