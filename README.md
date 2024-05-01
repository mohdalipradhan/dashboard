A) Steps Undertaken:

I commenced the project by unzipping the provided folder and initiating a new eReact project using the command npx create-react-app appName.
Upon examination of the interface and the essential imports, I delved into the sample file directory to grasp the necessary structuring.
To streamline the process, I opted out of routing and directly rendered the requisite component.
Through scrutinizing the exported and imported components, along with the dependencies affecting the desired output, insights were gleaned from the index.js files within folders.
To streamline the project, I eliminated superfluous contexts, filters, layouts, and components that were not utilized in the rendering process, focusing solely on the essential dependencies.
I replaced the Link tag provided by react-router-dom with suitable methods leveraging the window object for functionalities akin to useNavigate and useLocation.
The base path of vite.config.js was set to the root link for coherence.


B) Justification for Deviating from the Recommended Folder Structure:

Despite efforts to adhere to the suggested folder structure, certain files contained code segments that posed challenges for immediate comprehension, hence necessitating the retention of their original structure.
However, all code files reside within the src folder, and components utilized are located within the designated component folder. Notably, context, layout, and asset folders were segregated outside the components folder.

C) Reason for not being ble to get rid of all the redundand code before the deadline:


****
Hooks :-  Kept only one hook as other were redundant and not necessary
FakeApi: Removed Fake Api as there is no work of that dependency and also deleted wallet and other components related to it.
Authentication is not necessary so removed that as well.


Regrettably, due to time constraints, I couldn't decipher certain sections of the code promptly, necessitating their retention for subsequent optimization.
While endeavoring to minimize redundancy, I acknowledge the possibility of further optimization, particularly within helpers and utils folders, had I been more vigilant in monitoring time allocation.
Consolidating the code for importing and exporting components within a single index.js file across various folders could have streamlined the process. Considering that I managed to remove many unnecessary files, I successfully completed around 65% of the intended optimization.
