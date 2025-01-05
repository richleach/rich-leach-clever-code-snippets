'use server'

export async function submitForm(formData:FormData) {

    const errors:string[] = [];

    //loop over the form and spit out all key/value pairs for debugging
    const formDataObject = Object.fromEntries(formData.entries());
    console.log('Form Data as Object:', formDataObject);

    //another way to loop over all  the submitted key/value pairs
    /*for (const [key, value] of formData.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
    }*/

    // Return a success response
    return { success: true, errors, message: 'Successfully processed form' };
}