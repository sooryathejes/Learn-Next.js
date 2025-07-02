async function getData() {
  const data = await prisma
  return items
}

export default async function Home() {
 
  return ( 
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">
        Latest Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
          {data.map((item)=> ( 
            <h1 key={item.title}>{item.title}</h1>
          ))} 
      </div>
    </div> 
  );
} 