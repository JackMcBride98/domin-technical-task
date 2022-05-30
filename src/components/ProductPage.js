import ProductCard from './ProductCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LineChart from './LineChart';

export default function ProductPage({ product, setSelectedProductID }) {
  return (
    <>
      <header className="flex space-x-3 p-4 items-center">
        <button
          onClick={() => setSelectedProductID(null)}
          className="text-black font-medium border-2 border-black text-center rounded-full w-8 h-8 cursor-pointer"
        >
          <svg viewBox="0 0 100 100">
            <polygon
              points="47,75 47,50 38,50 50,28 62,50 53,50 53,75"
              fill="black"
              stroke="black"
              transform="rotate(270, 50, 50)"
            />
          </svg>
        </button>
        <p className="text-content text-xl">{product.serialNumber}</p>
      </header>
      <div className="flex flex-col space-y-2 overflow-y-auto h-full">
        <ProductCard {...product} />
        <Tabs
          selectedTabClassName="border-b-4 border-main"
          selectedTabPanelClassName="py-4 flex flex-col space-y-3 text-main"
        >
          <TabList className="flex w-full justify-between text-center">
            <Tab className=" py-2 border-b border-content w-full">Info</Tab>
            <Tab className=" py-2 border-b border-content w-full">
              Configure
            </Tab>
            <Tab className=" py-2 border-b border-content w-full">Reports</Tab>
          </TabList>
          <TabPanel>
            <p className="bg-content/20 w-full p-2 text-lg text-content">
              Integrated electronics
            </p>
            <div className="flex text-content w-full space-x-6 justify-around text-xl text-center">
              <div className="flex flex-col w-1/3">
                <p className="bg-main/30 p-6">25.2°C</p>
                <p className="text-base text-center">Temperature</p>
              </div>
              <div className="flex flex-col w-1/3">
                <p className="bg-main/30 p-6">3 h 47 min</p>
                <p className="text-base text-center">Operating hours</p>
              </div>
            </div>
            <div className="flex text-content px-6 w-full space-x-6 justify-center"></div>
            <p className="bg-content/20 w-full p-2 text-lg text-content">
              Operational characteristics
            </p>
            <p>
              Analog input value: <span className="text-content">15.7 mA</span>
            </p>
            <p>
              Spool position: <span className="text-content">68.4 %</span>
            </p>
            <p>
              Pressure (P): <span className="text-content">35.2 bar</span>
            </p>
            <p>
              Flow torque: <span className="text-content">520 mNm</span>
            </p>
            <p className="bg-content/20 w-full p-2 text-lg text-content">
              Charts
            </p>
            <LineChart />
          </TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </Tabs>
      </div>
    </>
  );
}
