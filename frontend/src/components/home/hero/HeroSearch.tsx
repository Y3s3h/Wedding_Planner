import {
  Calendar,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

export default function HeroSearch() {
  return (

    
    <div className="mt-12 w-full max-w-6xl rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-2xl">

      <div className="grid grid-cols-1 md:grid-cols-4">

        <div className="flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/20">
          <MapPin className="text-rose-400" size={24} />
          <div>
            <p className="text-white font-semibold">Location</p>
            <p className="text-gray-300 text-sm">Select your city</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/20">
          <Sparkles className="text-rose-400" size={24} />
          <div>
            <p className="text-white font-semibold">Category</p>
            <p className="text-gray-300 text-sm">Select category</p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-6 py-4 border-b md:border-b-0 md:border-r border-white/20">
          <Calendar className="text-rose-400" size={24} />
          <div>
            <p className="text-white font-semibold">Date</p>
            <p className="text-gray-300 text-sm">Select date</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-4 font-semibold text-white transition hover:scale-105">
            <Search size={20} />
            Search
          </button>
        </div>

      </div>

    </div>
  );
}