// app/page.js
import { supabase } from '../../lib/supabaseClient'

export default async function Home() {
    // Fetch data from the 'notes' table
/*    const { data, error } = await supabase
        .from('notes')
        .select('id, title');

    if (error) {
        console.error('Error fetching notes:', error.message);
        return <div>Error loading notes</div>;
    }*/

    const {data, error} = await supabase
        .from("notes")
        .select("title")
        ;
//recordcount
//query that was executed


    return (
        <div>
            <h1 style={{fontSize:"32px", color:"darkgray" }}>Notes</h1>
            {data?.map((d:any) => (
                <li key={d.title}>{(d.title.trim())}</li>
            ))}

        </div>
    );
}