"use client"
import Header from '@/components/Header';
import { useState , useEffect } from "react";
import { useSession } from "next-auth/react";
import { Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

type TypeStore = {
  email: string;
  name: string;
  description: string;
  website: string;
  facebook: string;
};

export default function ExplorePage() {
  const { data: session } = useSession();

  const [stores, setStores] = useState<TypeStore[]>([]);

  useEffect(() => {
    fetch("/api/stores", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setStores(data.stores);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Header session = { session } />
		<table className='text-sm text-left sm:w-7/12 w-full max-w mx-auto mt-10'>
      <thead className='text-xs text-gray-100 uppercase border-b '>
        <tr>
          <th scope='col' className='px-1 py-3 font-medium'>
            Name
          </th>
          <th scope='col' className='px-6 py-3 font-medium'>
            Description
          </th>
        </tr>
      </thead>			
      <tbody>
      {stores.map((store : TypeStore, idx : number) => {
        return (
        <tr className={`${idx % 2 == 1 ? "bg-neutral" : ""} hover:bg-secondary cursor-pointer`} key={idx} onClick={()=>(document.getElementById('my_modal_5_'+idx) as HTMLDialogElement).showModal()}>
          <td className='px-2 py-4 font-medium whitespace-nowrap'>
            {store.name}
          </td>
          <td className='px-6 py-4'>
            {store.description.length > 20 ? store.description.slice(0, 50) + " ..." : store.description}
          </td>
          <dialog id={`my_modal_5_${+idx}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{store.name}</h3>
              <p className="py-4">{store.description}</p>
              <p className="px-6 py-4">{store.website ? <Link href={store.website}><Globe /></Link> : ""}</p>
              <p className="px-6 py-4">{store.facebook ? <Link href={store.facebook}><ExternalLink /></Link> : ""}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </tr>)}
      )}
      </tbody>
		</table>
    </>
  )
}