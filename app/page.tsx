import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="flex justify-center items-center h-screen">
  <div className="max-w-screen-2xl w-full overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Car</th>
          <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Next Reservation</th>
          <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Rating</th>
          <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th scope="col" className="w-1/5 px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
  
          <td className="w-1/5 px-6 text-sm py-4"><span className="bg-green-500 text-white px-2 py-1 rounded-full">disponivel</span></td>
        </tr>
        {/* Outras linhas da tabela */}
      </tbody>
    </table>
  </div>
</div>

    </>
    
  );
}
