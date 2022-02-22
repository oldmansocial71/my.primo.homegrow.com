import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dbConnect from '../../lib/dbConnect';
import Plant from '../../models/Plant';

function Index({ plants }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const headers = [
    { field: 'id', headerName: 'Plant', type: 'string', width: 70 },
    { field: 'details', headerName: 'Details', type: 'string', width: 70 },
  ];

  if (status === 'authenticated') {
    return (
      <>
        <div className='bg-base-100 flex justify-start items-center p-4 space-x-4'>
          <div className='w-12 h-12'>
            <img src={session.user.image} className='rounded-lg shadow-2xl' />
          </div>

          <div className='flex flex-col'>
            <span className='text-xl font-bold'>{session.user.name}</span>
            <p className='badge badge-accent'>let's grow some weed.</p>
          </div>
        </div>
        <div className='divider '></div>
        <div className='w-full flex justify-end items-center pr-4'>
          <Link href='/newplant'>
            <button className='btn btn-success'>New</button>
          </Link>
        </div>
        <div className='divider'></div>
        <div className='overflow-x-auto w-full px-4'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                {headers.map((header) => (
                  <th>{header.headerName}</th>
                ))}
                {/* <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th /> */}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {plants.map((plant) => (
                <tr className='hover:bg-sky-700 cursor-pointer'>
                  <th>
                    <label>
                      <input type='checkbox' className='checkbox' />
                    </label>
                  </th>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div className='avatar'>
                        <div className='w-12 h-12 mask mask-squircle'>
                          <img
                            src={plant.image}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>{plant.name}</div>
                        <div className='text-sm opacity-50'>
                          62 days till harvest
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {plant.strain_name}
                    <br />
                    <span className='badge badge-ghost badge-sm'>
                      {plant.stage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                {headers.map((header) => (
                  <th>{header.headerName}</th>
                ))}
              </tr>
            </tfoot>
          </table>
          <div className='divider'></div>
        </div>
      </>
    );
  }

  return <p>not signed in</p>;
}

export default Index;

// /* Retrieves plant(s) data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Plant.find({});
//   const plants = result.map((doc) => {
//     const plant = doc.toObject();
//     plant._id = plant._id.toString();
//     return plant;
//   });

//   return { props: { plants: plants } };
// }
