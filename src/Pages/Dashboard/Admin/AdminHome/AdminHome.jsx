import { BsWallet2, BsPeopleFill } from "react-icons/bs";
// import { BiHomeAlt, BiSolidStar } from "react-icons/bi";
import { FaShuttleVan } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import UseAdminStats from "../../../../hooks/UseAdminStats";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { scaleOrdinal, schemeCategory10 } from "d3";
import { Helmet } from "react-helmet";

const AdminHome = () => {
  const [AdminStats, isAdminStatsLoading, name] = UseAdminStats();
  const { customers, products, revenue, orders, completedOrders } = AdminStats;
  console.log(AdminStats);
  const colors = scaleOrdinal(schemeCategory10).range();

  // here below all elements are for graphs and Pie Chart
  // for graph Data
  const graphData = completedOrders?.map((data) => {
    return {
      name: data.category,
      uv: data.total,
    };
  });
  console.log(graphData);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // for pie Chart
  const pieChartData = completedOrders?.map((data) => {
    return {
      name: data.category,
      value: data.count,
    };
  });
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="w-full pb-12 min-h-screen pl-4">
      <Helmet>
        <title>Bistro Boss | Admin Home</title>
      </Helmet>
      <h2 className="text-xl font-semibold font-mono mt-8">
        Hi, Welcome Back{" "}
        <span className="text-amber-500 font-bold">
          {!isAdminStatsLoading && name}
        </span>
        !
      </h2>
      {!isAdminStatsLoading && (
        <div className="flex flex-col mx-auto w-5/6">
          <div className="w-full mt-8 flex flex-col md:flex-row md:flex-wrap gap-3 text-white shadow">
            <div className="stat rounded-md md:w-fit grow flex justify-center bg-gradient-to-r from-cyan-300 to-cyan-200">
              <div className="my-auto text-5xl mx-2">
                <BsWallet2></BsWallet2>
              </div>
              <div>
                {" "}
                <div className="stat-value">{revenue}</div>
                <div className="stat-title">Revenue</div>
              </div>
            </div>

            <div className="stat rounded-md md:w-fit grow flex justify-center bg-gradient-to-r from-violet-300 to-violet-200">
              <div className="my-auto text-5xl mx-2">
                <BsPeopleFill></BsPeopleFill>
              </div>
              <div>
                {/* static value of shops number */}
                <div className="stat-value">{customers}</div>
                <div className="stat-title">Customers</div>
              </div>
            </div>

            <div className="stat rounded-md md:w-fit grow flex justify-center bg-gradient-to-r from-orange-300 to-orange-200">
              <div className="my-auto text-5xl mx-2">
                <GiChefToque></GiChefToque>
              </div>
              <div>
                {/* static value of contact */}
                <div className="stat-value">{products}</div>
                <div className="stat-title">Products</div>
              </div>
            </div>
            <div className="stat rounded-md md:w-fit grow flex justify-center bg-gradient-to-r from-sky-300 to-sky-200">
              <div className="my-auto text-5xl mx-2">
                <FaShuttleVan></FaShuttleVan>
              </div>
              <div>
                <div className="stat-value">{orders}</div>
                <div className="stat-title">Orders</div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row md:flex-wrap items-center bg-slate-50 gap-3 mt-12 mx-auto">
            <div className="mx-auto md:w-fit">
              <BarChart
                width={450}
                height={300}
                data={graphData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="uv"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {graphData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Bar>
              </BarChart>
            </div>
            <div className="mx-auto md:w-fit">
              <PieChart width={350} height={400}>
                <Pie
                  data={pieChartData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
