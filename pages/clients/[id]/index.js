import { useRouter } from "next/router";

function clientsProjectPage() {
    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler(){
        // Load Data...
        // router.push('/clients/max/projecta/')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'projecta'},
        });
    }
    return (
        <div>
            <h1>The Projects of a given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default clientsProjectPage;