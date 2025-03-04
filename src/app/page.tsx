"use client";
import MainPage from "./components/Main/MainPage"; // Adjust the path as necessary
import RestaurantList from "./components/RestaurantList";
import './global.css';
import styles from "./page.module.css";
import  TrpcProvider  from "@/app/components/TrpcProvider";
export default function Home() {
  return (
    <TrpcProvider>
     <div className="flex flex-col w-full min-h-screen">
     <main className="flex-1 w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <MainPage />
      </main>
      </div>
    </TrpcProvider>
  );
}