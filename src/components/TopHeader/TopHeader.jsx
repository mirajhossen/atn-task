import React from "react";

const TopHeader = () => {
  return (
    <div className="px-4 flex justify-between items-center">
      {/* logo  */}
      <div>
        <img className="w-[101px] h-[84px]" src="/images/atn-logo.png" alt="" />
      </div>
      {/* top header ad image  */}
      <div className="pl-[118px] pr-[61px]">
        <img
          className="w-[970px] h-[90px]"
          src="/images/top-header-ad.png"
          alt=""
        />
      </div>

      <div className="flex gap-2 items-center">
        {/* facebook item  */}
        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#F0F0F0"
            />
            <path
              d="M16.8969 11.425C16.8969 10.7812 17.4719 10.55 18.1156 10.55C18.7594 10.55 19.4469 10.75 19.4469 10.75L19.8594 8.3C19.8594 8.3 18.9844 8 16.8969 8C15.6156 8 14.8719 8.4875 14.3281 9.20625C13.8156 9.8875 13.7969 10.9813 13.7969 11.6875V13.2938H12.1406V15.6875H13.7969V24H16.8969V15.6875H19.3531L19.5344 13.2938H16.8969V11.425Z"
              fill="black"
            />
          </svg>
        </span>

        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#F0F0F0"
            />
            <path
              d="M20.1625 9.5H22.3688L17.55 15.0062L23.2188 22.5H18.7813L15.3031 17.9563L11.3281 22.5H9.11877L14.2719 16.6094L8.83752 9.5H13.3875L16.5281 13.6531L20.1625 9.5ZM19.3875 21.1812H20.6094L12.7219 10.75H11.4094L19.3875 21.1812Z"
              fill="black"
            />
          </svg>
        </span>

        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#F0F0F0"
            />
            <path
              d="M21.2437 10.3813H10.7563C10.7563 10.3813 8 10.3813 8 13.1375V18.8563C8 18.8563 8 21.6125 10.7563 21.6125H21.2437C21.2437 21.6125 24 21.6125 24 18.8563V13.1375C24 13.1375 24 10.3813 21.2437 10.3813ZM13.8687 19.075V12.9188L19.1062 16L13.8687 19.075Z"
              fill="black"
            />
          </svg>
        </span>

        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#F0F0F0"
            />
            <g clip-path="url(#clip0_1_400)">
              <path
                d="M8 9.146C8 8.513 8.526 8 9.175 8H22.825C23.474 8 24 8.513 24 9.146V22.854C24 23.487 23.474 24 22.825 24H9.175C8.526 24 8 23.487 8 22.854V9.146ZM12.943 21.394V14.169H10.542V21.394H12.943ZM11.743 13.182C12.58 13.182 13.101 12.628 13.101 11.934C13.086 11.225 12.581 10.686 11.759 10.686C10.937 10.686 10.4 11.226 10.4 11.934C10.4 12.628 10.921 13.182 11.727 13.182H11.743ZM16.651 21.394V17.359C16.651 17.143 16.667 16.927 16.731 16.773C16.904 16.342 17.299 15.895 17.963 15.895C18.832 15.895 19.179 16.557 19.179 17.529V21.394H21.58V17.25C21.58 15.03 20.396 13.998 18.816 13.998C17.542 13.998 16.971 14.698 16.651 15.191V15.216H16.635C16.6403 15.2077 16.6456 15.1993 16.651 15.191V14.169H14.251C14.281 14.847 14.251 21.394 14.251 21.394H16.651Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_400">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
