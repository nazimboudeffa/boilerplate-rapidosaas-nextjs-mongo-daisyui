"use client"
import Header from '@/components/Header'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation';
import { useEffect, useState } from "react";
import { Trash2 } from 'lucide-react';
import SideNav from '@/components/SideNav';

type TypeStore = {
    email: string;
    name: string;
    description: string;
    website: string;
    facebook: string;
};

function Profile () {

        const { data: session } = useSession();

        if (!session) {
                redirect('/');
        }

        const [editmode, setEditMode] = useState<boolean>(false);
        const [formData, setFormData] = useState<TypeStore>({
            email: session?.user?.email as string,
            name: "",
            description: "",
            website: "",
            facebook: "",
        });

        useEffect(() => {
            fetch(`/api/stores/${session?.user?.email}`, {
                method: "GET",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.foundStore) {
                    setFormData(data.foundStore);
                    setEditMode(true);
                }
            })
            .catch((err) => console.log(err)); 
        }, [session]); 
    
        const handleChange = (e: any) => {
            const value = e.target.value;
            const name = e.target.name;
            setFormData({
                ...formData,
                [name]: value,
            });
        };
    
        const handleSubmit = async (e: any) => {
            e.preventDefault();

            if (editmode) {
                await fetch(`/api/stores/${session?.user?.email}`, {
                    method: "PUT",
                    body: JSON.stringify({ formData }),
                    //@ts-ignore
                    "Content-Type": "application/json",
                });
            } else {
                const res = await fetch("/api/stores", {
                    method: "POST",
                    body: JSON.stringify({ formData }),
                    //@ts-ignore
                    "Content-Type": "application/json",
                });
                if (!res.ok) {
                    throw new Error("Failed to create store");
                }    
            }
        };

        const handleDelete = async () => {
            await fetch(`/api/stores/${session?.user?.email}`, {
                method: "DELETE",
            });
            setFormData({
                email: session?.user?.email as string,
                name: "",
                description: "",
                website: "",
                facebook: "",
            });
            setEditMode(false);
        }

    return (
        <>
            <Header session = { session } />
            <div className="grid h-full md:h-screen md:min-h-screen overflow-hidden md:grid-cols-[auto_1fr]">
                    <SideNav />
                    <div className="flex flex-col">
                    <div className="flex justify-center items-center mt-10">
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            method="post"
                            className="flex flex-col gap-3"
                        >
                            <div className='flex justify-between items-center'>
                            <h1 className='text-xl'>Describe your store</h1> <Trash2 className='cursor-pointer text-red-500' onClick={handleDelete} />
                            </div>
                            <label htmlFor="name">Name <span className='text-red-500'>*</span></label>
                            <input
                                className='w-80 p-2 rounded-md border-2'
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                required={true}
                                value={formData.name}
                                placeholder="My cool store"
                                maxLength={30}
                            />                            
                            <label htmlFor="description">Description <span className='text-red-500'>*</span></label>
                            <textarea
                                className='h-40 w-80 p-2 rounded-md border-2'
                                id="description"
                                name="description"
                                onChange={handleChange}
                                required={true}
                                value={formData.description}
                                placeholder="I have a cool store that sells cool stuff"
                                maxLength={200}
                            />
                            <label htmlFor="Website">website</label>
                            <input
                                className='w-80 p-2 rounded-md border-2'
                                id="website"
                                name="website"
                                type="text"
                                onChange={handleChange}
                                value={formData.website}
                                placeholder="https://www.example.com"
                            /> 
                            <label htmlFor="facebook">Facebook</label>
                            <input
                                className='w-80 p-2 rounded-md border-2'
                                id="facebook"
                                name="facebook"
                                type="text"
                                onChange={handleChange}
                                value={formData.facebook}
                                placeholder="https://www.facebook.com/example"
                            /> 
                            <input
                            type="submit"
                            className="btn btn-secondary rounded-md p-2 cursor-pointer"
                            value="Enregistrer"
                            />
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile