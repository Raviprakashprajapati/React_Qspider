import React, { useContext } from "react";
import { apiContext } from "./Context02";

function Acessasor02() {
  const context = useContext(apiContext);
  console.log(context);

  return (
    <div className="mb-20">
      <div className="mt-20 mb-20">
        <div className="border p-3 border-black bg-slate-900 text-white rounded-lg w-[250px] m-auto  ">
          <main>
            <img
              src={context?.data?.avatar_url}
              className="h-[10rem] m-auto rounded-lg "
              alt=""
            />
            <div>
              <p className="text-center font-semibold capitalize m-3">
                {context?.data?.login}
              </p>
            </div>
            <section className="flex justify-evenly mb-5">
                <div className="bg-slate-800 p-2 rounded-lg text-sm" >Followers : {context?.data?.followers}</div>
                <div className="bg-slate-800 p-2 rounded-lg text-sm">Following : {context?.data?.following}</div>
            </section>
          </main>

          <div className="flex justify-evenly items-center gap-3">
            <a
              href={context?.data?.html_url}
              className="bg-black text-white p-2 rounded hover:bg-slate-900 "
            >
              Github
            </a>
            <a
              href={context?.data?.organizations_url}
              className="bg-black text-white p-2 rounded hover:bg-slate-900 "
            >
              Organization
            </a>
          </div>
          <main>
            <button className="bg-black  p-2 block w-[100%] font-bold mt-5 italic" >Public Repo : {context?.data?.public_repos}</button>
          </main>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 m-auto" >
        {
            context?.imageArray.map((i,index)=>(
        <img src={i} className="h-40" alt="" key={index} />

            ))
        }
      </div>

    </div>
  );
}

export default Acessasor02;
