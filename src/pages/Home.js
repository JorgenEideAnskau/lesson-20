import Header from "../components/Header";

function Home() {
    return (
        <>
            <Header title="Home" />
            <div className="flex flex-col gap-4 m-16">
                <h1 className="text-4xl font-semibold">Want to see more?</h1>
                <p>
                    Enter the password below to accsess protected content
                </p>
                <input className="border-2 border-gray-300 outline-none" placeholder="password" type="password" />
            </div>
        </>
    );
}

export default Home;