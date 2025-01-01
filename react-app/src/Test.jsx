
// const Test = () => {
//   return (
//     <main className="m-0 flex h-screen bg-zinc-900 p-0 font-mono text-white">
//         <aside className="w-[30%]">
//           <div className="mx-6 my-5 h-[95%] rounded-md bg-zinc-800">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Architecto, commodi modi explicabo, temporibus quam at cupiditate,
//             dolorem saepe similique nam quos dicta pariatur. Eveniet dignissimos
//             at tempore, magnam incidunt labore!
//           </div>
//         </aside>

//         <div className="flex w-full flex-col justify-between bg-zinc-900">
//           <div className="mt-5 h-fit px-5">
//             <span className="text-7xl font-bold text-primary">orion</span>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//           </div>
//           <section id="sec1" className="flex h-full flex-col justify-around">
//             {/* answer section */}
//             {state.showResult ? (
//               <div
//                 id="result-container"
//                 className="mx-auto max-h-[400px] w-[90%] overflow-y-auto bg-zinc-700 p-5"
//               >
//                 {/* self closing P-tag with react attribute to dispplay html */}
//                 <div
//                   className="prose prose-lg w-full max-w-none dark:prose-invert p-2 text-sm "
//                   dangerouslySetInnerHTML={{ __html: htmlContent }}
//                 />
//                 {/* prose class to apply the typography style */}
//               </div>
//             ) : (
//               <div className="mx-auto grid w-[80%] grid-cols-2 gap-4">
//                 {Object.keys(obj).map((key) => (
//                   <div
//                     key={key}
//                     className="cursor-pointer rounded-md bg-zinc-800 px-2 py-3 hover:bg-zinc-700"
//                     onClick={() => handleKeyClick(key)}
//                   >
//                     {key}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//           <section
//             id="sec2"
//             className="item-center flex h-[20%] justify-center gap-4 py-2"
//           >
//             <input
//               value={state.input}
//               onChange={(e) =>
//                 dispatch({ type: "setInput", payload: e.target.value })
//               }
//               onKeyDown={handleKeyDown}
//               className="h-11 w-[60%] rounded-lg border border-primary bg-zinc-800 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
//               type="text"
//             />
//             <button
//               className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${state.isLoading ? "border-gray-300 bg-zinc-800 text-gray-100" : "primary-color border-purple-500 bg-primary"} active:scale-[0.98]`}
//               onClick={() => onSent()}
//               disabled={state.isLoading}
//             >
//               {/* <img
//                 src="/send.svg"
//                 className="flex items-center justify-center p-1 text-white "
//                 alt=""
//               /> */}
//               <svg
//                 fill={state.isLoading ? "#CCCCCC" : "#000000"}
//                 className="p-[2px]"
//                 width="30px"
//                 height="30px"
//                 viewBox="0 0 512 512"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <title>ionicons-v5-q</title>
//                 <path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" />
//               </svg>
//             </button>
//           </section>
//         </div>
//       </main>
//   );
// };

// export default Test;
