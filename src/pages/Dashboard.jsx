import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";

import { LogOut } from "lucide-react";

const Dashboard = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const [selected, setSelected] = useState();

  useEffect(() => {
    const selected = localStorage.getItem("selected");
    if (selected) {
      setSelected(selected);
    }
  }, []);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleLogoutClick = async () => {
    logoutUser();
    localStorage.removeItem("selected");
  };

  const handlefeature1 = () => {
    const newSelected = "feature1";
    setSelected(newSelected);
    localStorage.setItem("selected", newSelected);
    navigate("feature1");
  };

  const handlefeature2 = () => {
    const newSelected = "feature2";
    setSelected(newSelected);
    localStorage.setItem("selected", newSelected);
    navigate("feature2");
  };

  return (
    <div className="flex w-full  relative bg-[#fffffb]">
      <div className="flex flex-col justify-between items-center h-screen top-0 sticky bg-[#f8f8ec] border-r border-gray-300 px-4 py-6">
        <div onClick={handleHomeClick} className="cursor-pointer">
          <svg
            width="29"
            height="29"
            viewBox="0 0 66 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.73391 52.391C3.14407 45.891 12.4409 20.922 13.023 6.76998C16.3003 6.59029 22.6519 7.44967 26.207 7.76607C37.859 8.81297 51.309 10.1255 62.324 13.6606C62.1521 16.477 60.4334 21.7895 59.7459 24.8596C58.0936 32.258 56.4568 40.1256 55.3084 47.6136C55.0311 49.4261 54.2967 58.6916 53.7615 59.3986C48.3787 60.4377 34.6565 57.0158 28.7105 55.9611C24.5152 55.2189 20.5543 54.6134 16.3395 54.0236C14.3473 53.7423 4.69091 52.9886 3.73391 52.391ZM19.1679 42.7738C19.5156 43.1214 18.3359 43.2543 20.2226 43.5433C21.8515 43.7933 34.0236 43.5082 36.0156 43.4261C37.7148 43.3558 40.707 43.6332 41.1211 42.8832C40.6914 42.1917 36.9492 41.9613 35.9727 41.8207C32.2579 41.2933 21.9377 41.3714 19.1717 42.7738H19.1679ZM19.3242 29.0318C20.2499 29.8208 35.8902 29.3365 39.3832 29.3912C40.9457 29.4146 45.0277 29.8248 45.6488 29.2857C44.8128 27.8677 34.5198 27.1568 32.4688 27.149C31.3204 27.1451 19.6962 27.3716 19.3242 29.0318ZM19.3124 17.4268C20.4179 18.4385 39.1364 19.3956 42.9494 19.8526C44.1252 19.9932 50.0041 20.8878 50.6135 20.6495C50.5471 19.7237 50.0667 19.7706 47.6447 19.0753C46.3869 18.7159 45.2853 18.4385 43.9963 18.1534C37.9807 16.8292 29.1603 16.2042 22.9653 16.505C22.2622 16.5362 21.5356 16.5909 20.8364 16.6573C19.8599 16.7472 19.5591 16.6183 19.3091 17.4229L19.3124 17.4268ZM10.3866 5.75078C10.6366 6.59844 10.4921 6.0789 10.9257 6.30156L11.6249 6.54375C11.6562 6.49297 11.7499 6.57891 11.8046 6.61407C11.7499 7.30548 10.8515 11.5438 10.578 11.9305C9.93739 12.8406 7.14831 13.2821 6.28891 14.0985C5.42954 16.2469 6.82016 24.6805 6.25766 27.4815C5.60141 30.7549 4.05846 34.8057 3.20296 38.2155C2.26155 41.9733 1.44126 45.7936 0.792761 49.6135C0.519321 51.2346 0.0310415 54.0823 1.65214 55.1369C3.19904 56.1408 6.02324 55.6759 7.20294 56.2697C8.22634 58.0197 7.23028 62.2892 9.92954 63.0431C11.8201 63.5704 22.6135 60.6525 25.2655 60.0509C29.4178 59.1095 28.9803 59.2657 33.0858 60.0352C38.6092 61.0704 43.4298 62.1485 49.0978 62.5196C58.4103 63.1329 57.133 60.9805 57.84 52.6719C59.4923 51.7266 62.9533 51.7384 63.3673 49.3633C63.9377 46.1016 59.715 40.375 60.7384 35.3713C61.2306 32.9729 61.6955 30.5627 62.2345 28.1721L65.4962 13.9531C65.6251 10.9101 63.1759 10.5351 60.7189 9.90234C58.4181 9.30859 56.0119 8.85544 53.7501 8.24214C53.2853 6.47654 52.7032 4.55074 51.9532 2.91794C50.9102 0.648441 49.3516 0.66794 47.0782 1.18744C43.3594 2.039 39.6641 3.19914 35.9222 4.03904C27.5003 5.93354 32.7269 5.53124 23.6062 5.23434C19.8562 5.11325 15.4968 5.0234 11.7232 5.24997C10.8209 5.30465 10.7936 5.21481 10.3834 5.75388L10.3866 5.75078Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center gap-6">
          <div
            className={`p-2 cursor-pointer ${
              selected === "feature1" ? "bg-[#c4e456]" : "bg-transparent"
            } rounded-md`}
            onClick={handlefeature1}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.3714 4.00004C9.3714 3.73482 9.47676 3.48047 9.66429 3.29293C9.85183 3.1054 10.1062 3.00004 10.3714 3.00004H22.2584C22.5236 3.00004 22.778 3.1054 22.9655 3.29293C23.153 3.48047 23.2584 3.73482 23.2584 4.00004C23.2584 4.26526 23.153 4.51961 22.9655 4.70715C22.778 4.89468 22.5236 5.00004 22.2584 5.00004H10.3714C10.1062 5.00004 9.85183 4.89468 9.66429 4.70715C9.47676 4.51961 9.3714 4.26526 9.3714 4.00004ZM5.4894 1.28204L2.9824 4.46304L2.2064 3.43804C2.12715 3.33298 2.02798 3.24456 1.91455 3.17783C1.80113 3.1111 1.67567 3.06736 1.54535 3.04911C1.41502 3.03087 1.28238 3.03847 1.15499 3.07149C1.0276 3.1045 0.907958 3.16229 0.802901 3.24154C0.697843 3.32079 0.609425 3.41996 0.542693 3.53338C0.475961 3.64681 0.432223 3.77227 0.413976 3.90259C0.39573 4.03292 0.403332 4.16556 0.436348 4.29295C0.469364 4.42034 0.527148 4.53998 0.606401 4.64504L2.1684 6.70004C2.26032 6.82263 2.37919 6.92245 2.51582 6.99181C2.65245 7.06116 2.80319 7.09819 2.9564 7.10004H2.9664C3.11753 7.09998 3.26669 7.06567 3.40265 6.99968C3.53861 6.93369 3.65785 6.83774 3.7514 6.71904L7.0594 2.51904C7.14075 2.41595 7.20101 2.29785 7.23672 2.17148C7.27243 2.0451 7.2829 1.91293 7.26753 1.78251C7.25216 1.65209 7.21126 1.52598 7.14715 1.41137C7.08304 1.29675 6.99699 1.19589 6.8939 1.11454C6.79081 1.03318 6.67271 0.972932 6.54634 0.937221C6.41996 0.901509 6.28779 0.891039 6.15737 0.906407C6.02695 0.921776 5.90084 0.962681 5.78623 1.02679C5.67162 1.0909 5.57076 1.17695 5.4894 1.28004V1.28204ZM22.2584 11H10.3714C10.1062 11 9.85183 11.1054 9.66429 11.2929C9.47676 11.4805 9.3714 11.7348 9.3714 12C9.3714 12.2653 9.47676 12.5196 9.66429 12.7071C9.85183 12.8947 10.1062 13 10.3714 13H22.2584C22.5236 13 22.778 12.8947 22.9655 12.7071C23.153 12.5196 23.2584 12.2653 23.2584 12C23.2584 11.7348 23.153 11.4805 22.9655 11.2929C22.778 11.1054 22.5236 11 22.2584 11ZM22.2584 19H10.3714C10.1062 19 9.85183 19.1054 9.66429 19.2929C9.47676 19.4805 9.3714 19.7348 9.3714 20C9.3714 20.2653 9.47676 20.5196 9.66429 20.7071C9.85183 20.8947 10.1062 21 10.3714 21H22.2584C22.5236 21 22.778 20.8947 22.9655 20.7071C23.153 20.5196 23.2584 20.2653 23.2584 20C23.2584 19.7348 23.153 19.4805 22.9655 19.2929C22.778 19.1054 22.5236 19 22.2584 19ZM6.9404 12C6.9404 12.6132 6.75859 13.2125 6.41796 13.7223C6.07732 14.2321 5.59317 14.6294 5.02672 14.8641C4.46027 15.0987 3.83696 15.1601 3.23562 15.0405C2.63428 14.9209 2.08191 14.6256 1.64837 14.1921C1.21483 13.7585 0.919581 13.2062 0.799967 12.6048C0.680352 12.0035 0.741743 11.3802 0.976374 10.8137C1.21101 10.2473 1.60834 9.76312 2.11813 9.42248C2.62793 9.08185 3.22728 8.90004 3.8404 8.90004C4.66257 8.90004 5.45107 9.22665 6.03243 9.80801C6.61379 10.3894 6.9404 11.1779 6.9404 12ZM4.9404 12C4.9404 11.7825 4.87589 11.5698 4.75502 11.3889C4.63415 11.208 4.46235 11.067 4.26135 10.9838C4.06035 10.9005 3.83918 10.8787 3.6258 10.9212C3.41242 10.9636 3.21642 11.0684 3.06258 11.2222C2.90875 11.3761 2.80398 11.5721 2.76154 11.7854C2.71909 11.9988 2.74088 12.22 2.82413 12.421C2.90739 12.622 3.04838 12.7938 3.22927 12.9147C3.41017 13.0355 3.62284 13.1 3.8404 13.1C3.98485 13.1 4.12789 13.0716 4.26135 13.0163C4.39481 12.961 4.51607 12.88 4.61822 12.7779C4.72036 12.6757 4.80139 12.5544 4.85667 12.421C4.91195 12.2875 4.9404 12.1445 4.9404 12ZM6.9404 20C6.9404 20.6132 6.75859 21.2125 6.41796 21.7223C6.07732 22.2321 5.59317 22.6294 5.02672 22.8641C4.46027 23.0987 3.83696 23.1601 3.23562 23.0405C2.63428 22.9209 2.08191 22.6256 1.64837 22.1921C1.21483 21.7585 0.919581 21.2062 0.799967 20.6048C0.680352 20.0035 0.741743 19.3802 0.976374 18.8137C1.21101 18.2473 1.60834 17.7631 2.11813 17.4225C2.62793 17.0818 3.22728 16.9 3.8404 16.9C4.66257 16.9 5.45107 17.2266 6.03243 17.808C6.61379 18.3894 6.9404 19.1779 6.9404 20ZM4.9404 20C4.9404 19.7825 4.87589 19.5698 4.75502 19.3889C4.63415 19.208 4.46235 19.067 4.26135 18.9838C4.06035 18.9005 3.83918 18.8787 3.6258 18.9212C3.41242 18.9636 3.21642 19.0684 3.06258 19.2222C2.90875 19.3761 2.80398 19.5721 2.76154 19.7854C2.71909 19.9988 2.74088 20.22 2.82413 20.421C2.90739 20.622 3.04838 20.7938 3.22927 20.9147C3.41017 21.0355 3.62284 21.1 3.8404 21.1C3.98485 21.1 4.12789 21.0716 4.26135 21.0163C4.39481 20.961 4.51607 20.88 4.61822 20.7779C4.72036 20.6757 4.80139 20.5544 4.85667 20.421C4.91195 20.2875 4.9404 20.1445 4.9404 20Z"
                fill={selected === "feature1" ? "black" : "#6b7280"}
              />
            </svg>
          </div>
          <div
            className={`flex justify-center items-center p-2 cursor-pointer ${
              selected === "feature2" ? "bg-[#c4e456]" : "bg-transparent"
            } rounded-md`}
            onClick={handlefeature2}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.26855 0.25H3.23145C1.2251 0.25 0.25 1.18164 0.25 3.09961V18.9004C0.25 20.8184 1.2251 21.75 3.23145 21.75H7.26855C9.2749 21.75 10.25 20.8184 10.25 18.9004V3.09961C10.25 1.18164 9.2749 0.25 7.26855 0.25ZM8.75 18.9004C8.75 19.9131 8.53564 20.25 7.26855 20.25H3.23145C1.96436 20.25 1.75 19.9131 1.75 18.9004V3.09961C1.75 2.08691 1.96436 1.75 3.23145 1.75H7.26855C8.53564 1.75 8.75 2.08691 8.75 3.09961V18.9004ZM18.7686 0.25H14.7314C12.7251 0.25 11.75 1.18164 11.75 3.09961V11.9004C11.75 13.8184 12.7251 14.75 14.7314 14.75H18.7686C20.7749 14.75 21.75 13.8184 21.75 11.9004V3.09961C21.75 1.18164 20.7749 0.25 18.7686 0.25ZM20.25 11.9004C20.25 12.9131 20.0356 13.25 18.7686 13.25H14.7314C13.4644 13.25 13.25 12.9131 13.25 11.9004V3.09961C13.25 2.08691 13.4644 1.75 14.7314 1.75H18.7686C20.0356 1.75 20.25 2.08691 20.25 3.09961V11.9004Z"
                fill={selected === "feature2" ? "black" : "#6b7280"}
              />
            </svg>
          </div>
        </div>

        {/* User */}
        <LogOut
          onClick={handleLogoutClick}
          className="text-[#374151] cursor-pointer hover:text-[#1e2632]"
        />
      </div>
      <div className="flex justify-center items-center w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
