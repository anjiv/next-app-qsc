export default function Page({params}: {params : {id : any}}) {
  console.log(params);
  return <h1>{params.id?.join(", ")}</h1>
}
