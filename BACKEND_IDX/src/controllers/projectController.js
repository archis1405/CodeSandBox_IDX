import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';

/*

    Create a unique id and then inside the projects folder create a new folder with that id

*/

const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req,res) => {
    const projectId = uuid4();
    console.log("New Project Id is :",projectId);

    //Project folder created
    await fs.mkdir(`./projects/${projectId}`);

    //After this call the npm create vite@latest in the newly created folder

    const response = await execPromisified('npx create-vite@latest codeGround --template react', {
        cwd: `./projects/${projectId}`
      });
      

    return res.json({ message: 'Project Created' , data : projectId});
};