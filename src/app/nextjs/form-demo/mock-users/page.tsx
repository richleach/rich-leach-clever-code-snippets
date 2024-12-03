import { revalidatePath } from "next/cache";

type MockUser= {
    id: number;
    name: string;
    createdAt: string;
}

export default async function MockUsers() {
    // FETCH DATA
    //await new Promise ((resolve) => setTimeout(resolve, 3000));
    const res = await fetch('https://6733e70ea042ab85d1185212.mockapi.io/users');
    const users = await res.json();

    //INSERT DATA
    async function addUser(formData:FormData) {
        "use server"
        const name = formData.get("name");
        const newName = formData.get("name")
        //const id = formData.get("id");
        const res = await fetch('https://6733e70ea042ab85d1185212.mockapi.io/users',
            {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({name}),
            }
          );
        const newUser = await res.json();
        console.log(newUser);
        revalidatePath("/mock-users");
    }


    return (
        <div className="min-h-screen m-4">
            <form action={addUser} className="mb-4">
                <input type="text" name="name" required className="border p-2 mr-2"/>
                <button type="submit" className="bg-blue-500 text-white px-2 py-2 rounded">Add User</button>
            </form>
            <h2 className="w-full text-center text-xl">
                Fetching Data From The Server - Next.js 15
            </h2>
            <ul className="space-y-4 p-4">
                {
                    users?.map((user:MockUser) => (
                        <li key={user.id} className="p-4 bg-white shadow-md rounded-md text-gray-700">{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}