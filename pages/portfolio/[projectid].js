import {useRouter} from "next/router";

function PortFolioProjectPage() {
  const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    
    //send a request to some backend server
    //to fetch the piece of data with an id of router.query.projectid

    return (
        <div>
            <h1>The PortFolioProject Page</h1>
        </div>
    );
}

export default PortFolioProjectPage;