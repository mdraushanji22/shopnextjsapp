"use client";
import "./globals.css";
import Image from "next/image";
import { CiSearch, CiBookmark } from "react-icons/ci";
import { MdCurrencyRupee, MdOutlinePerson2 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import Frame1 from "../Frame.png";
import Frame2 from "../Frame1.png";
import Frame3 from "../tote.png";
import Frame4 from "../Handbag.png";
import Frame5 from "../Frame2.png";
import Frame6 from "../Frame3.png";
import Frame7 from "../Frame4.png";
import Frame8 from "../messenger.png";
import Frame9 from "../Frame8.png";
import Frame10 from "../Vector.png";
import Group from "../Group.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  console.log(data);

  const fetchapi = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res?.data);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const integerValue = Math.floor(data.price);
  console.log(integerValue);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between px-3 m-3">
          <span className="flex gap-4">
            <span>T A N N</span>
            <span>T R I M</span>
          </span>
          <div className="flex gap-3">
            <CiSearch size={20} />
            <MdOutlinePerson2 size={20} />
            <CiBookmark size={20} />
            <IoBagOutline size={20} />
          </div>
        </div>

        <div className="flex gap-6 text-gray-200 font-sans text-xs justify-center">
          <p>Bags</p>
          <p>Travel</p>
          <p>Accessories</p>
          <p>Gifting</p>
          <p>Jewelery</p>
        </div>

        <div className="flex px-6 gap-12 mt-8">
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame1} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">All bags</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame2} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Vanity Pouch</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame3} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Tote Bag</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame4} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Duffle Bag</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame5} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Laptop Sleeve</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame6} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Messenger Bags</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame7} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Slings Bgs</p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <Image src={Frame8} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Handbags</p>
          </span>
          <span className="flex flex-col justify-center items-end">
            <Image src={Frame9} alt="" className="h-24 w-24 mb-4" />
            <p className="text-xs">Buck</p>
          </span>
        </div>

        <div className="flex justify-between mt-8 px-6 font-light">
          <div className="flex gap-2 ">
            <span>Bags</span>
            <span>.</span>
            <span>Backpacks</span>
          </div>
          <div className="flex gap-2">
            <span>13</span>
            <span>products</span>
            <span>
              <Image src={Frame10} alt="" />
            </span>
          </div>
        </div>

        <div className="flex gap-4 my-4 overflow-y-auto scrollbar-hide mb-48x flex-wrap justify-center w-[100%]">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[200px] bg-white text-black justify-center rounded-xl relative"
            >
              <CiBookmark
                size={32}
                color="black"
                className="absolute right-0 top-0 m-2 z-10"
              />
              <div className="relative h-72 p-3 w-full">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-contain p-5"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col w-[100%] bg-black text-white">
                <p>{item.category}</p>
                <div className="flex justify-between items-center">
                  <span>
                    <p className="flex gap-2 font-sans items-center">
                      <span className="flex items-center">
                        <MdCurrencyRupee size={20} />
                        {item.price}
                      </span>
                      <span className="line-through text-xs font-light">
                        {Math.floor(item.price) - 10}
                      </span>
                      <span className="text-green-500 text-xs">(50% off)</span>
                    </p>
                  </span>
                  <span className="items-center">
                    <Image src={Group} height={30} alt={item.title} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
