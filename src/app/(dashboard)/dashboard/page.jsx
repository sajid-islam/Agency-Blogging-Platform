import MyBlogsTable from "@/components/myBlogsTable/MyBlogsTable";

const Dashboard = async () => {
    return (
        <div className="p-4 overflow-hidden"> {/* Prevent viewport overflow */}
            <h2 className="text-xl font-bold mb-4">Blog Dashboard</h2>
            <div className="w-full">
                <MyBlogsTable />
            </div>
        </div>
    );
};
export default Dashboard;