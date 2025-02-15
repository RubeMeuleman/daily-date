import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>404 page not found</title>
            </Helmet>
            <h1 className="m-auto">Oops! This page does not exist</h1>
        </>
    );
}