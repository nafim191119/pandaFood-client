import { BsWallet2, BsFillCartFill } from "react-icons/bs";
import { BiHomeAlt, BiSolidStar } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import UseUserStats from "../../../../hooks/UseUserStats";
import { Helmet } from "react-helmet";

const UserHome = () => {
  const { userStats, isUserStatsLoading, name, photo } = UseUserStats();
  const { review, payment, menu } = userStats;
  return (
    <div className="w-full pb-12 border-red-300 border-8 min-h-screen pl-4">
      <Helmet>
        <title>Bistro Boss | User Home</title>
      </Helmet>
      <h2 className="text-xl font-semibold font-mono mt-8">
        Hi, Welcome Back {!isUserStatsLoading && name}!
      </h2>
      <div className="flex justify-center">
        <div className="stats mt-8 flex flex-col gap-3 md:flex-row text-white w-5/6 shadow">
          <div className="stat flex justify-center bg-gradient-to-r from-cyan-300 to-cyan-200">
            <div className="my-auto text-5xl mx-2">
              <BsWallet2></BsWallet2>
            </div>
            <div>
              {" "}
              {!isUserStatsLoading && <div className="stat-value">{menu}</div>}
              <div className="stat-title">Menu</div>
            </div>
          </div>

          <div className="stat flex justify-center bg-gradient-to-r from-violet-300 to-violet-200">
            <div className="my-auto text-5xl mx-2">
              <BiHomeAlt></BiHomeAlt>
            </div>
            <div>
              {/* static value of shops number */}
              <div className="stat-value">8</div>
              <div className="stat-title">Shops</div>
            </div>
          </div>

          <div className="stat flex justify-center bg-gradient-to-r from-orange-300 to-orange-200">
            <div className="my-auto text-5xl mx-2">
              <LuPhoneCall></LuPhoneCall>
            </div>
            <div>
              {/* static value of contact */}
              <div className="stat-value">4</div>
              <div className="stat-title">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-5/6 mx-auto flex-col mt-8 md:flex-row ">
        <div className="card rounded-none w-full md:w-1/2 bg-[#d19f5431]">
          <div className="card-body">
            <div className="avatar justify-center">
              <div className="w-32 rounded-full">
                <img src={photo} />
              </div>
            </div>
            <h2 className="text-xl text-center font-semibold font-mono mt-8">
              {name}
            </h2>
          </div>
        </div>
        <div className="card rounded-none w-full md:w-1/2 bg-[#fef9c335]">
          {!isUserStatsLoading && (
            <div className="card-body">
              <h3 className="text-2xl font-semibold font-mono">
                Your Activities
              </h3>
              <p className="flex gap-3 items-center">
                <BsFillCartFill></BsFillCartFill>Orders : {payment}
              </p>
              <p className="flex gap-3 items-center">
                <BiSolidStar></BiSolidStar>Reviews : {review}
              </p>
              <p className="flex gap-3 items-center">
                <SlCalender></SlCalender>Booking : 0{" "}
                {/* here booking is statistics */}
              </p>
              <p className="flex gap-3 items-center">
                <BsWallet2></BsWallet2>Payment : {payment}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
