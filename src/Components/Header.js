// Header.js
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-950  grid grid-flow-col p-2   shadow-md items-center">
      {/* Your header content goes here */}
      <div className="col-span-7 ">
        <input
          placeholder="🔍Search"
          type="text"
          className="bg-zinc-600 items-center border border-gray-500 w-[55%] rounded-full p-1 pl-4 shadow-md border-x-slate-400 ml-12 text-white hover:scale-105"
        />
      </div>
      <div className="col-span-3 flex">
        <div className="p-2 m-2">
          <img
            className="h-10 rounded-full border border-white cursor-pointer hover:scale-105"
            src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-notification-icon-png-image_4187244.jpg"
            alt="notification-icon"
          />
        </div>
        <div className="p-2 m-2">
          <img
            className="h-10 rounded-full border border-white cursor-pointer hover:scale-105"
            src="https://p7.hiclipart.com/preview/414/419/724/computer-icons-email-marketing-webmail-email-icon.jpg"
            alt="notification-icon"
          />
        </div>
        <div className="p-2 m-2">
          <img
            className="h-10 cursor-pointer hover:scale-105"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwlesO39g87q6JS6a-xEd43s4-Qt-Ej8HvA&usqp=CAU"
            alt="setting-icon"
          />
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 rounded-full border border-white cursor-pointer hover:scale-105"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt="usericon"
        />
      </div>
    </div>
  );
};

export default Header;
